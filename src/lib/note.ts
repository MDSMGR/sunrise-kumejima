// note の公開RSSからブログ記事を取得する。
// KUROKO AI が note に自動投稿した記事が、そのままサイトのブログに反映されます。
// 取得はビルド時に一度だけ行われ、失敗してもビルドは止まりません（空配列を返す）。

export const NOTE_USER = 'kume_sun';
export const NOTE_URL = `https://note.com/${NOTE_USER}`;
export const NOTE_RSS = `${NOTE_URL}/rss`;

export type NotePost = {
  title: string;
  link: string;
  date: Date | null;
  dateLabel: string;
  bodyHtml: string;   // 本文（サニタイズ済み）
  excerpt: string;    // 冒頭の抜粋（プレーンテキスト）
  image: string | null;
  hasMore: boolean;   // 抜粋より本文が長いか
};

const unwrap = (s: string) =>
  s.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();

const pick = (xml: string, tag: string): string => {
  const m = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i'));
  return m ? unwrap(m[1]) : '';
};

const decode = (s: string) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
   .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
   .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');

/** note本文HTMLから危険・不要な要素を落とし、表示に使うタグだけ残す */
const sanitize = (html: string): string => {
  let out = html
    .replace(/<(script|style|iframe|object|embed|form|input)[\s\S]*?<\/\1>/gi, '')
    .replace(/<(script|style|iframe|object|embed|form|input)[^>]*\/?>/gi, '')
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\son\w+\s*=\s*'[^']*'/gi, '')
    .replace(/\sstyle\s*=\s*"[^"]*"/gi, '')
    .replace(/\sclass\s*=\s*"[^"]*"/gi, '');

  // 許可タグ以外は中身を残して除去
  const allowed = /^(p|br|h2|h3|h4|ul|ol|li|a|img|strong|b|em|i|blockquote|figure|figcaption)$/i;
  out = out.replace(/<\/?([a-zA-Z0-9]+)(\s[^>]*)?>/g, (tag, name) =>
    allowed.test(name) ? tag : ''
  );

  // 外部リンクは新規タブ
  out = out.replace(/<a\s+([^>]*href="[^"]*"[^>]*)>/gi,
    (_m, attrs) => `<a ${attrs} target="_blank" rel="noopener nofollow">`);

  return out.replace(/(\s*<br\s*\/?>\s*){3,}/gi, '<br><br>').trim();
};

const stripTags = (html: string) =>
  decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

const firstImage = (html: string): string | null => {
  const m = html.match(/<img[^>]+src="([^"]+)"/i);
  return m ? m[1] : null;
};

/** RSSのitem内にサムネイル情報があれば拾う（media:thumbnail / media:content / enclosure） */
const feedThumbnail = (item: string): string | null => {
  const m =
    item.match(/<media:thumbnail[^>]+url="([^"]+)"/i) ??
    item.match(/<media:content[^>]+url="([^"]+)"/i) ??
    item.match(/<enclosure[^>]+url="([^"]+)"[^>]*type="image/i);
  return m ? m[1] : null;
};

/** note記事ページの og:image を取得（アイキャッチ画像） */
async function ogImage(url: string): Promise<string | null> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'User-Agent': 'SUNRISE-Kumejima-Site/1.0 (+https://kumejima-sunrise.netlify.app)' },
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const html = await res.text();
    const m =
      html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i) ??
      html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:image"/i);
    const src = m ? decode(m[1]) : null;
    // noteのデフォルトプロフィール画像はアイキャッチとして使わない
    if (!src || /assets\/default\//.test(src)) return null;
    return src;
  } catch {
    return null;
  }
}

const formatDate = (d: Date | null) =>
  d ? `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}` : '';

const EXCERPT_LENGTH = 110;

// noteにアイキャッチが無かった場合に使うサイト内の写真
const FALLBACK_IMAGES = [
  '/images/courses/course-sup.webp',
  '/images/courses/course-hatenohama.webp',
  '/images/courses/sup-sunset-8.webp',
  '/images/courses/course-snorkel.webp',
  '/images/courses/cruising-6.webp',
  '/images/courses/course-stargazing.webp',
  '/images/courses/hama-3.webp',
  '/images/courses/course-trekking.webp',
];

export async function fetchNotePosts(limit = 30): Promise<NotePost[]> {
  let xml = '';
  try {
    const res = await fetch(NOTE_RSS, {
      headers: { 'User-Agent': 'SUNRISE-Kumejima-Site/1.0 (+https://kumejima-sunrise.netlify.app)' },
    });
    if (!res.ok) {
      console.warn(`[note] RSS取得に失敗しました (HTTP ${res.status})。ブログは空で出力します。`);
      return [];
    }
    xml = await res.text();
  } catch (e) {
    console.warn('[note] RSS取得でエラーが発生しました。ブログは空で出力します。', e);
    return [];
  }

  const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  const posts = items.map((item): NotePost => {
    const title = decode(pick(item, 'title'));
    const link = pick(item, 'link');
    const raw = pick(item, 'content:encoded') || pick(item, 'description');
    const html = /&lt;/.test(raw) && !/</.test(raw) ? decode(raw) : raw;
    const bodyHtml = sanitize(html);
    const text = stripTags(bodyHtml);
    const pub = pick(item, 'pubDate');
    const date = pub ? new Date(pub) : null;

    return {
      title,
      link,
      date: date && !isNaN(date.getTime()) ? date : null,
      dateLabel: formatDate(date && !isNaN(date.getTime()) ? date : null),
      bodyHtml,
      excerpt: text.slice(0, EXCERPT_LENGTH),
      image: feedThumbnail(item) ?? firstImage(bodyHtml),
      hasMore: text.length > EXCERPT_LENGTH,
    };
  });

  // 新しい順（RSSは基本新着順だが念のため明示的に並べ替え）
  posts.sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
  const list = posts.slice(0, limit);

  // 画像が拾えなかった記事は、note記事ページの og:image を見に行く
  const need = list.filter((p) => !p.image && p.link);
  for (let i = 0; i < need.length; i += 5) {
    const chunk = need.slice(i, i + 5);
    const found = await Promise.all(chunk.map((p) => ogImage(p.link)));
    chunk.forEach((p, j) => { p.image = found[j]; });
  }

  // それでも無ければサイト内の写真をあてる（画像なしのカードを作らない）
  list.forEach((p, i) => {
    if (!p.image) p.image = FALLBACK_IMAGES[i % FALLBACK_IMAGES.length];
  });

  return list;
}
