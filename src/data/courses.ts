export type Course = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  summary: string;
  detail: string;
  highlights: string[];
  duotone: 'dawn' | 'lagoon' | 'gold' | 'deep' | 'shallow';
  image: string;
  gallery?: string[];   // サムネイル切替用（最大5枚）
  group?: string;
};

export type Group = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  summary: string;
  image: string;
  members: string[];
};

// ※ギャラリー画像は現状すべて仮置き（手持ち写真）。各ツアーの実写に差し替えてください。
const G = {
  sup: '/images/courses/course-sup.jpg',
  hero: '/images/hero-sup.jpg',
  view: '/images/gallery-view.jpg',
  hama: '/images/courses/course-hatenohama.jpg',
  snk: '/images/courses/course-snorkel.jpg',
  fish: '/images/courses/course-fishing.jpg',
  trek: '/images/courses/course-trekking.jpg',
  star: '/images/courses/course-stargazing.jpg',
};

export const groups: Group[] = [
  { slug: 'sup', name: 'SUP', tag: 'SUP', tagline: '海の上を、ただ静かに歩く',
    summary: '体験・サンライズ・サンセットの3プランから選べます。', image: G.sup,
    members: ['sup-taiken', 'sup-sunrise', 'sup-sunset'] },
  { slug: 'hama', name: '無人島・はての浜', tag: 'ISLAND', tagline: '白い砂浜と、360度の海へ',
    summary: '無人島ツアーやはての浜の渡船・フルコースなど4プラン。', image: G.hama,
    members: ['mujinto', 'hatenohama-full', 'hatenohama-tosen', 'hatenohama-tosen-snorkel'] },
  { slug: 'trekking', name: 'トレッキング', tag: 'ADVENTURE', tagline: 'ガイドとしか行けない秘境へ',
    summary: '定番トレッキングと秘境ツアーの2プラン。', image: G.trek,
    members: ['trekking-basic', 'hikyo'] },
  { slug: 'yugyosen', name: '遊漁船', tag: 'FISHING', tagline: '漁師ガイドと、本気の海釣り',
    summary: '1人プランと貸切プランの2つからお選びいただけます。', image: G.fish,
    members: ['yugyosen-solo', 'yugyosen-charter'] },
];

export const courses: Course[] = [
  // ── SUP ──
  { slug: 'sup-taiken', group: 'sup', name: '体験SUP', tag: 'SUP', tagline: '海の上を、ただ静かに歩く',
    summary: 'SUP初心者やのんびり過ごしたい方に最適な、癒し系の定番プラン。',
    detail: 'ボードの上に立って水面を進むSUP（スタンドアップパドル）。久米島の透明度抜群のエメラルドブルーを、自分のペースで散歩するように楽しめます。インストラクターが基礎から丁寧にレクチャーするので、初めての方でも数分で海の上に立てます。',
    highlights: ['初心者歓迎', '少人数制', '所要 約2時間'], duotone: 'shallow', image: G.sup,
    gallery: [G.sup, G.hero, G.view, G.hama, G.snk] },
  { slug: 'sup-sunrise', group: 'sup', name: 'サンライズSUP', tag: 'SUP / SUNRISE', tagline: '朝焼けの海を、独り占め',
    summary: '早朝の静かな海で楽しむ、特別なSUP。（※内容は調整中）',
    detail: '日の出とともに漕ぎ出す、一日でいちばん静かな時間のSUP。鏡のような海面と朝焼けを独り占めできます。（※文面は仮です）',
    highlights: ['早朝開催', '朝焼け', '写真映え'], duotone: 'dawn', image: G.hero,
    gallery: [G.hero, G.sup, G.view, G.hama, G.snk] },
  { slug: 'sup-sunset', group: 'sup', name: 'サンセットSUP', tag: 'SUP / SUNSET', tagline: '夕陽に染まる海を漕ぐ',
    summary: '夕暮れの海をゆったり漕ぐ、ロマンチックなSUP。（※内容は調整中）',
    detail: '空と海がオレンジに染まる時間に漕ぎ出すSUP。一日の終わりを久米島の夕陽とともに。カップルにも人気です。（※文面は仮です）',
    highlights: ['夕方開催', 'サンセット', 'カップルに人気'], duotone: 'gold', image: G.hero,
    gallery: [G.hero, G.view, G.sup, G.hama, G.snk] },

  // ── 無人島・はての浜 ──
  { slug: 'mujinto', group: 'hama', name: '無人島ツアー', tag: 'ISLAND', tagline: '誰もいない島へ',
    summary: '船で無人島へ渡り、手つかずの自然を満喫。（※内容は調整中）',
    detail: '船でしか行けない無人島へ渡り、プライベートな海と砂浜を満喫するツアーです。（※文面は仮です。正式な内容に差し替えてください）',
    highlights: ['船で渡る', 'プライベート感', '写真映え'], duotone: 'gold', image: G.hama,
    gallery: [G.hama, G.view, G.sup, G.snk, G.hero] },
  { slug: 'hatenohama-full', group: 'hama', name: 'はての浜フルコース', tag: 'BEST VIEW', tagline: '渡船・SUP・シュノーケル、全部',
    summary: '渡船・SUP・シュノーケルがすべて楽しめる、欲張りな1日プラン。',
    detail: 'どこまでも続く真っ白な砂浜と、360度を海に囲まれた久米島屈指の絶景「はての浜」。渡船・SUP・シュノーケルをすべて楽しめる、いちばん欲張りなフルコースです。久米島の海を丸ごと味わいたい方に。',
    highlights: ['渡船込み', 'SUP・シュノーケル', '1日満喫'], duotone: 'gold', image: G.hama,
    gallery: [G.hama, G.view, G.sup, G.snk, G.hero] },
  { slug: 'hatenohama-tosen', group: 'hama', name: 'はての浜渡船', tag: 'BEST VIEW', tagline: '白い砂浜へ、ひとっ飛び',
    summary: 'はての浜への渡船プラン。まずは絶景の砂浜へ。（※内容は調整中）',
    detail: 'はての浜まで船でお送りする渡船プラン。真っ白な砂浜と透明な海を、気軽に楽しめます。（※文面は仮です）',
    highlights: ['渡船のみ', '気軽に', '絶景'], duotone: 'gold', image: G.hama,
    gallery: [G.hama, G.view, G.hero, G.sup, G.snk] },
  { slug: 'hatenohama-tosen-snorkel', group: 'hama', name: 'はての浜渡船＋シュノーケル', tag: 'BEST VIEW', tagline: '砂浜と、海の中と',
    summary: '渡船にシュノーケルをプラス。砂浜も海中も。（※内容は調整中）',
    detail: 'はての浜への渡船に、シュノーケルをプラスしたプラン。白い砂浜と、色鮮やかな海の中、両方を楽しめます。（※文面は仮です）',
    highlights: ['渡船＋シュノーケル', '器材込み', 'ガイド同行'], duotone: 'lagoon', image: G.snk,
    gallery: [G.hama, G.snk, G.view, G.hero, G.sup] },

  // ── トレッキング ──
  { slug: 'trekking-basic', group: 'trekking', name: 'トレッキング', tag: 'ADVENTURE', tagline: '海だけじゃない久米島へ',
    summary: '久米島の自然のなかを歩く、定番のトレッキング。',
    detail: '地元を知り尽くしたガイドと、久米島の自然のなかを歩くトレッキング。海だけじゃない久米島の表情に出会えます。歩きやすい服装でご参加ください。',
    highlights: ['ガイド同行', '自然満喫', '歩きやすい服装で'], duotone: 'lagoon', image: G.trek,
    gallery: [G.trek, G.view, G.hama, G.hero, G.sup] },
  { slug: 'hikyo', group: 'trekking', name: '秘境ツアー', tag: 'ADVENTURE', tagline: 'ガイドとしか行けない場所へ',
    summary: 'ガイド同行でしか辿り着けない、冒険感MAXの秘境へ。（※内容は調整中）',
    detail: '地元ガイドと一緒でなければ辿り着けない、久米島の秘境へ分け入る冒険系プラン。（※文面は仮です）',
    highlights: ['ガイド必須', '冒険感MAX', '秘境'], duotone: 'deep', image: G.trek,
    gallery: [G.trek, G.hama, G.view, G.hero, G.sup] },

  // ── 単体 ──
  { slug: 'snorkel', name: 'シュノーケル', tag: 'SNORKEL', tagline: 'その日いちばん美しい海へ',
    summary: '船で移動して、その日のベストなシュノーケルポイントへご案内。',
    detail: 'ガイドが海況を見極め、その日もっとも美しいポイントへ船でお連れします。カラフルな珊瑚と熱帯魚の群れ、運が良ければウミガメに出会えることも。ガイドが常に同行するので、泳ぎに自信がない方も安心して楽しめます。',
    highlights: ['ガイド同行', 'ウミガメ遭遇のチャンス', '器材レンタル込み'], duotone: 'lagoon', image: G.snk,
    gallery: [G.snk, G.hama, G.view, G.hero, G.sup] },
  { slug: 'stargazing', name: '星空ツアー', tag: 'NIGHT', tagline: '冬の夜空に、天の川',
    summary: '冬は星が最も綺麗。一眼レフで天の川を撮影、データもプレゼント。',
    detail: '街明かりの少ない久米島は、星空観賞にうってつけ。空気の澄む冬は天の川までくっきりと見えます。一眼レフであなたと星空を撮影し、データはそのままプレゼント。一生の思い出になる一枚を持ち帰れます。',
    highlights: ['天の川撮影', '撮影データ進呈', '冬がベストシーズン'], duotone: 'deep', image: G.star,
    gallery: [G.star, G.hero, G.view, G.hama, G.snk] },
  { slug: 'cruising', name: 'クルージング', tag: 'CRUISING', tagline: '海風を切って、島を巡る',
    summary: '船で久米島の海を巡る、爽快なクルージング。（※内容は調整中）',
    detail: '船で久米島の海を巡るクルージング。海風を感じながら、島の景色をゆったり楽しめます。（※文面は仮です）',
    highlights: ['船でゆったり', '爽快', '記念撮影'], duotone: 'lagoon', image: G.hama,
    gallery: [G.hama, G.view, G.hero, G.sup, G.snk] },
  { slug: 'yugyosen-solo', group: 'yugyosen', name: '遊漁船（1人・4時間）', tag: 'FISHING', tagline: '漁師ガイドと、本気の海釣り',
    summary: '1人・4時間・20,000円のプラン。漁師ガイドが同行します。',
    detail: '漁師の資格を持つガイドが、その日の潮の流れや天候にあわせて釣りスポットへご案内。近海の五目釣りから外洋のトローリングまで楽しめます。道具のレンタルも可能。【料金】1人・4時間・20,000円',
    highlights: ['1人', '4時間', '¥20,000'], duotone: 'deep', image: G.fish,
    gallery: [G.fish, G.hero, G.hama, G.view, G.snk] },
  { slug: 'yugyosen-charter', group: 'yugyosen', name: '遊漁船（貸切・4時間）', tag: 'FISHING', tagline: '船を貸し切って、仲間と',
    summary: '貸切・4時間・50,000円のプラン。グループでの釣りに。',
    detail: '船を貸し切って、グループで楽しむ釣りプラン。漁師ガイドがその日のベストなポイントへご案内します。仲間やご家族での釣行におすすめ。【料金】貸切・4時間・50,000円',
    highlights: ['貸切', '4時間', '¥50,000'], duotone: 'deep', image: G.fish,
    gallery: [G.fish, G.hero, G.view, G.hama, G.snk] },
  { slug: 'okazuri', name: '陸釣り', tag: 'FISHING', tagline: '気軽に、岸から一匹', 
    summary: '船に乗らず、岸から気軽に楽しむ釣り。（※内容は調整中）',
    detail: '船に乗らず、岸から気軽に楽しめる釣りプラン。お子さま連れにもおすすめです。（※文面は仮です）',
    highlights: ['気軽に', '船が苦手でも', '家族向け'], duotone: 'shallow', image: G.fish,
    gallery: [G.fish, G.hama, G.view, G.hero, G.snk] },
  { slug: 'full-day', name: '1日満喫', tag: 'FULL DAY', tagline: '朝から夜まで、久米島を丸ごと',
    summary: '複数のアクティビティを1日で満喫する贅沢プラン。（※内容は調整中）',
    detail: 'SUPやシュノーケル、はての浜など、複数の体験を1日でたっぷり楽しむ贅沢プラン。久米島を丸ごと味わいたい方に。（※文面は仮です）',
    highlights: ['1日たっぷり', '複数体験', '贅沢プラン'], duotone: 'gold', image: G.hero,
    gallery: [G.hero, G.hama, G.view, G.sup, G.star] },
];

// トップレベルの並び順（グループ slug or 単体コース slug）
const ORDER = ['sup', 'hama', 'trekking', 'snorkel', 'stargazing', 'cruising', 'yugyosen', 'okazuri', 'full-day'];

export type MenuItem =
  | { kind: 'group'; group: Group }
  | { kind: 'course'; course: Course };

export const topLevel: MenuItem[] = ORDER.map((slug) => {
  const g = groups.find((x) => x.slug === slug);
  if (g) return { kind: 'group', group: g };
  return { kind: 'course', course: courses.find((c) => c.slug === slug)! };
});

export const options = [
  { name: 'アクションカメラ撮影',
    body: 'ツアーの迫力ある瞬間を高画質のアクションカメラで撮影。水上で輝くあなたを、何度でも見返せる映像として残します。' },
  { name: '記念写真のプレゼント',
    body: 'ツアー中の自然な笑顔や素敵な瞬間を、プロのクオリティで撮影・編集してプレゼント。久米島の自然とともに最高の思い出を。' },
];
