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
  price?: string;       // 料金（例: '¥20,000 / 1名'）
  duration?: string;    // 所要時間（例: '約2時間'）
  popular?: boolean;    // 「一番人気」として目立たせる
  imagePos?: string;    // カード画像の表示位置（object-position）。顔切れ防止など
};

export type Group = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  summary: string;
  image: string;
  imagePos?: string; // 表紙画像の焦点位置（object-position）。未指定なら中央
  members: string[];
};

// 料金の共通注記（詳細ページ・一覧ページで表示）
export const priceNote = '※料金はすべて1名様・税込表示です。小学生以下は半額でご案内します。';

// 施設・ご利用案内（全ツアー共通。詳細ページで表示）
export const facilityInfo: { label: string; value: string }[] = [
  { label: '集合場所', value: '久米島町比嘉160-71（SUNRISE店舗前）※プランにより異なる場合があります' },
  { label: 'レンタル', value: 'ウェットスーツ・シュノーケル器材・ライフジャケットなど無料（マリン系プラン）' },
  { label: '送迎', value: '久米島町内は無料送迎あり（ホテル・港などへお迎え）' },
  { label: '写真データ', value: 'GoPro・一眼レフに加えチェキ（インスタント写真）も無料。撮影データは当日その場でお渡し' },
  { label: '設備', value: '更衣室・トイレ・無料駐車場あり／食事の持ち込みOK' },
];

// ※ギャラリー画像は現状すべて仮置き（手持ち写真）。各ツアーの実写に差し替えてください。
const G = {
  sup: '/images/courses/course-sup.webp',
  hero: '/images/hero-sup.webp',
  view: '/images/gallery-view.webp',
  hama: '/images/courses/course-hatenohama.webp',
  snk: '/images/courses/course-snorkel.webp',
  fish: '/images/courses/course-fishing.webp',
  trek: '/images/courses/course-trekking.webp',
  star: '/images/courses/course-stargazing.webp',
};

export const groups: Group[] = [
  { slug: 'sup', name: 'SUP', tag: 'SUP', tagline: '海の上を、ただ静かに歩く',
    summary: '体験・サンライズ・サンセットの3プランから選べます。', image: '/images/courses/sup-taiken-5.webp',
    members: ['sup-sunset', 'sup-taiken', 'sup-sunrise'] },
  { slug: 'hama', name: '無人島・はての浜', tag: 'ISLAND', tagline: '白い砂浜と、360度の海へ',
    summary: '無人島ツアーやはての浜の渡船・フルコースなど4プラン。', image: '/images/courses/hama-3.webp',
    members: ['hatenohama-full', 'mujinto', 'hatenohama-tosen', 'hatenohama-tosen-snorkel'] },
  { slug: 'trekking', name: 'トレッキング・秘境ツアー', tag: 'ADVENTURE', tagline: 'ガイドとしか行けない秘境へ',
    summary: '絶景トレッキングと秘境探検の2プラン。', image: G.trek,
    members: ['hikyo', 'trekking-basic'] },
  { slug: 'yugyosen', name: '遊漁船', tag: 'FISHING', tagline: '漁師ガイドと、本気の海釣り',
    summary: '沖釣り体験と貸切チャーターの2プランからお選びいただけます。', image: '/images/courses/okazuri-1.webp',
    imagePos: 'center 25%',
    members: ['yugyosen-solo', 'yugyosen-charter'] },
];

export const courses: Course[] = [
  // ── SUP ──
  { slug: 'sup-taiken', group: 'sup', name: 'はじめての体験SUPツアー', tag: 'SUP', tagline: '海の上を、ただ静かに歩く',
    summary: '波の穏やかな内海で、初めてでも数分で立てる定番SUP。ウミガメ遭遇率90%。',
    detail: 'ボードの上に立って水面を歩くように進むSUP（スタンドアップパドル）。久米島の透明度抜群のエメラルドブルーを、自分のペースで散歩するように楽しめます。経験豊富なインストラクターが基礎から丁寧にサポートするので、初めての方やお子さまでも数分で海の上に立てます。そしてこの海の魅力は、ウミガメとの遭遇率がおよそ90%と高いこと。足元をゆうゆうと泳ぐ姿を、SUPの上から見下ろせます。海に浮かんでいるだけで心がほどけていく、いちばん人気の癒しプランです。',
    highlights: ['初心者歓迎', 'ウミガメ遭遇率90%', '90分'], duration: '90分', price: '¥8,000 / 1名', duotone: 'shallow', image: '/images/courses/sup-taiken-5.webp',
    gallery: ['/images/courses/sup-taiken-5.webp', '/images/courses/sup-taiken-7.webp', '/images/courses/sup-taiken-1.webp', '/images/courses/sup-taiken-2.webp', '/images/courses/sup-taiken-3.webp', '/images/courses/sup-taiken-4.webp', '/images/courses/sup-taiken-6.webp', '/images/courses/sup-taiken-8.webp'] },
  { slug: 'sup-sunrise', group: 'sup', name: 'サンライズSUP｜朝焼けの海クルーズ', tag: 'SUP', tagline: '朝焼けの海を、独り占め',
    summary: '朝日に染まる鏡のような海を独り占め。一日でいちばん静かな時間のSUP。',
    detail: '日の出とともに漕ぎ出す、一日でいちばん静かな時間のSUP。風のない早朝の海は鏡のように凪ぎ、空のグラデーションをそのまま映し込みます。朝焼けに染まる海を独り占めしながら、ゆっくりとパドルを進める贅沢なひととき。少人数制で、久米島の特別な朝をお届けします。',
    highlights: ['早朝開催', '朝焼けを独り占め', '90分'], duration: '90分', price: '¥9,000 / 1名', duotone: 'dawn', image: '/images/courses/sup-sunrise-1.webp',
    gallery: ['/images/courses/sup-sunrise-1.webp', '/images/courses/sup-sunrise-2.webp', '/images/courses/sup-sunrise-3.webp', '/images/courses/sup-sunrise-4.webp', '/images/courses/sup-sunrise-5.webp', '/images/courses/sup-sunrise-6.webp', '/images/courses/sup-sunrise-7.webp', '/images/courses/sup-sunrise-8.webp'] },
  { slug: 'sup-sunset', group: 'sup', name: 'サンセットSUP｜夕焼けの海クルーズ', tag: 'SUP', tagline: '夕陽に染まる海を漕ぐ',
    summary: '刻々と色を変える夕景の海を漕ぐ、ロマンチックなサンセットSUP。',
    detail: '空と海がオレンジから茜色へと染まっていく時間に漕ぎ出すSUP。刻一刻と表情を変える夕景のなかを、波の音だけを聞きながらゆったりと進みます。一日の終わりを久米島の夕陽とともに締めくくる、カップルや女性同士のご旅行にも人気のロマンチックなプランです。',
    highlights: ['夕方開催', 'サンセット', 'カップルに人気', '90分'], duration: '90分', price: '¥9,000 / 1名', popular: true, duotone: 'gold', image: '/images/courses/sup-sunset-1.webp', imagePos: 'center 60%',
    gallery: ['/images/courses/sup-sunset-1.webp', '/images/courses/sup-sunset-2.webp', '/images/courses/sup-sunset-3.webp', '/images/courses/sup-sunset-4.webp', '/images/courses/sup-sunset-5.webp', '/images/courses/sup-sunset-6.webp', '/images/courses/sup-sunset-7.webp', '/images/courses/sup-sunset-8.webp'] },

  // ── 無人島・はての浜 ──
  { slug: 'mujinto', group: 'hama', name: '無人島SUP＆シュノーケル冒険ツアー', tag: 'ISLAND', tagline: '誰もいない島へ',
    summary: 'SUPで無人島へ渡り、透明な海でシュノーケル。ウミガメ遭遇率90%。',
    detail: 'SUPで無人島を目指し、上陸してからは透明度抜群の海でシュノーケリング。手つかずの砂浜と珊瑚礁を、まるで貸切のような静けさのなかで満喫できる冒険ツアーです。この海のいちばんの魅力は、ウミガメとの遭遇率がおよそ90%と高いこと。すぐそばをゆうゆうと泳ぐ姿に、きっと歓声が上がります。SUPもシュノーケルも一度に楽しみたい、欲張りな方にぴったりの一番人気プランです。',
    highlights: ['ウミガメ遭遇率90%', 'SUP＋シュノーケル', '無人島上陸', '120分'], duration: '120分', price: '¥12,000 / 1名', duotone: 'gold', image: '/images/courses/mujinto-1.webp',
    gallery: ['/images/courses/mujinto-1.webp', '/images/courses/mujinto-2.webp', '/images/courses/mujinto-3.webp', '/images/courses/mujinto-4.webp', '/images/courses/mujinto-5.webp', '/images/courses/mujinto-6.webp', '/images/courses/mujinto-7.webp', '/images/courses/mujinto-8.webp'] },
  { slug: 'hatenohama-full', group: 'hama', name: 'はての浜完全満喫プレミアムツアー', tag: 'BEST VIEW', tagline: '渡船・SUP・シュノーケル、全部',
    summary: '渡船・SUP・シュノーケルを一度に楽しむ、いちばん贅沢なフルコース。',
    detail: 'どこまでも続く真っ白な砂浜と、360度を海に囲まれた久米島随一の絶景「はての浜」。渡船で砂州へ上陸し、SUPで遠浅の海を進み、シュノーケルで色鮮やかな魚たちと泳ぐ——久米島の海の魅力をこの一日にすべて詰め込んだ、最上級のフルコースです。時間をたっぷり使って、はての浜を心ゆくまで味わいたい方に。',
    highlights: ['渡船・SUP・シュノーケル', 'はての浜上陸', '180分たっぷり'], duration: '180分', price: '¥15,000 / 1名', popular: true, duotone: 'gold', image: '/images/courses/hama-2.webp',
    gallery: ['/images/courses/hama-2.webp', '/images/courses/hama-3.webp', '/images/courses/hama-1.webp', '/images/courses/hama-6.webp', '/images/courses/hama-7.webp'] },
  { slug: 'hatenohama-tosen', group: 'hama', name: 'はての浜上陸クルーズ（渡船のみ）', tag: 'BEST VIEW', tagline: '白い砂浜へ、ひとっ飛び',
    summary: '東洋一とも称される白い砂浜「はての浜」へ、気軽に上陸。',
    detail: '「東洋一美しい」とも称される真っ白な砂州「はての浜」へ、船でお送りする気軽な渡船プラン。360度を海に囲まれた非日常の絶景のなかで、写真を撮ったり、波打ち際を歩いたり、思い思いの時間を過ごせます。まずは久米島いちばんの景色だけを、気軽に味わいたい方におすすめです。',
    highlights: ['渡船で気軽に', '絶景の砂浜', '写真映え'], price: '¥4,000 / 1名', duotone: 'gold', image: '/images/courses/hama-5.webp',
    gallery: ['/images/courses/hama-5.webp', '/images/courses/hama-3.webp', '/images/courses/hama-4.webp', '/images/courses/hama-1.webp'] },
  { slug: 'hatenohama-tosen-snorkel', group: 'hama', name: 'はての浜シュノーケリングツアー', tag: 'BEST VIEW', tagline: '砂浜と、海の中と',
    summary: 'はての浜周辺の穏やかな海で、色鮮やかな魚たちと泳ぐ。',
    detail: 'はての浜へ渡ったあとは、周辺の穏やかな海でシュノーケリング。遠浅で波が静かなので、泳ぎに自信のない方やお子さまでも安心して楽しめます。真っ白な砂浜と、色とりどりの熱帯魚が舞う海の中。はての浜の「上」と「中」、両方の絶景を欲張って味わえるプランです。',
    highlights: ['シュノーケル', '器材込み', 'ガイド同行', '120分'], duration: '120分', price: '¥8,000 / 1名', duotone: 'lagoon', image: '/images/courses/hama-6.webp',
    gallery: ['/images/courses/hama-6.webp', '/images/courses/hama-1.webp', '/images/courses/hama-7.webp', '/images/courses/hama-2.webp'] },

  // ── トレッキング・秘境ツアー ──
  { slug: 'trekking-basic', group: 'trekking', name: '絶景トレッキングツアー', tag: 'ADVENTURE', tagline: '海だけじゃない久米島へ',
    summary: '宇江城城跡・洞窟・断崖の絶景を巡るネイチャーツアー。雨の日でも楽しめる。',
    detail: '地元を知り尽くしたガイドと、車と徒歩で久米島の絶景スポットを巡るネイチャーツアー。久米島最高峰にそびえる宇江城城跡からの大パノラマ、神秘的な洞窟（鍾乳洞）、切り立った断崖の絶景、亜熱帯の森——海だけではない久米島の奥深い表情に出会えます。海が荒れてSUPが出せない雨の日でも楽しめるのも、このツアーの魅力です。移動は車も使うので体力に自信がない方も安心。歩きやすい服装と靴でご参加ください。',
    highlights: ['ガイド同行', '絶景スポット巡り', '雨の日OK', '150分'], duration: '150分', price: '¥7,000 / 1名', duotone: 'lagoon', image: '/images/courses/trekking-1.webp',
    gallery: ['/images/courses/trekking-1.webp', '/images/courses/trekking-2.webp', '/images/courses/trekking-3.webp', '/images/courses/trekking-4.webp', '/images/courses/trekking-5.webp', '/images/courses/trekking-6.webp', '/images/courses/trekking-7.webp', '/images/courses/trekking-8.webp'] },
  { slug: 'hikyo', group: 'trekking', name: '秘境探検ツアー', tag: 'ADVENTURE', tagline: 'ガイドとしか行けない場所へ',
    summary: '洞窟・断崖・大迫力の滝を目指す、冒険気分たっぷりの秘境ツアー。',
    detail: '地元ガイドと一緒でなければ辿り着けない、久米島の秘境へ分け入る探検ツアー。亜熱帯の森を抜け、神秘的な洞窟や切り立った断崖、知る人ぞ知る大迫力の滝を目指します。マイナスイオンあふれる大自然のなかで、冒険気分を存分に味わえます。しっかり歩ける服装・靴でのご参加がおすすめです。',
    highlights: ['ガイド必須', '秘境の滝', '冒険感MAX', '150分'], duration: '150分', price: '¥8,000 / 1名', popular: true, duotone: 'deep', image: '/images/courses/hikyo-1.webp',
    gallery: ['/images/courses/hikyo-1.webp', '/images/courses/hikyo-2.webp', '/images/courses/hikyo-3.webp', '/images/courses/hikyo-4.webp', '/images/courses/hikyo-5.webp', '/images/courses/hikyo-6.webp', '/images/courses/hikyo-7.webp', '/images/courses/hikyo-8.webp'] },

  // ── 単体 ──
  { slug: 'snorkel', name: 'シュノーケリングツアー', tag: 'SNORKEL', tagline: 'その日いちばん美しい海へ',
    summary: '船でその日のベストポイントへ。魚影の濃い海を満喫。',
    detail: 'ガイドがその日の海況を見極め、もっとも美しく魚影の濃いポイントへ船でお連れします。カラフルな珊瑚礁と熱帯魚の群れ、運が良ければウミガメに出会えることも。ガイドが常に寄り添うので、シュノーケルが初めての方や泳ぎに自信のない方も安心。久米島の海のいちばんいい表情に会いに行きましょう。',
    highlights: ['ガイド同行', 'ベストポイントへ船で', '器材レンタル込み', '120分'], duration: '120分', price: '¥10,000 / 1名', popular: true, duotone: 'lagoon', image: '/images/courses/snorkel-1.webp',
    gallery: ['/images/courses/snorkel-1.webp', '/images/courses/snorkel-2.webp', '/images/courses/snorkel-3.webp', '/images/courses/snorkel-4.webp', '/images/courses/snorkel-5.webp', '/images/courses/snorkel-6.webp', '/images/courses/snorkel-7.webp', '/images/courses/snorkel-8.webp'] },
  { slug: 'stargazing', name: '星のソムリエと行く 久米島星空フォトツアー', tag: 'NIGHT', tagline: '冬の夜空に、天の川',
    summary: '星のソムリエが案内。星空観察と一眼レフ撮影・データ進呈付き。',
    detail: '街明かりの少ない久米島は、星空観賞にうってつけ。空気の澄む秋冬には、天の川までくっきりと浮かび上がります。「星のソムリエ」の資格を持つガイドが、季節の星座や神話を語りながら夜空をご案内。一眼レフであなたと満点の星を撮影し、そのデータはそのままプレゼント。一生ものの一枚を持ち帰れます。',
    highlights: ['星のソムリエ同行', '天の川撮影', '撮影データ進呈', '120分'], duration: '120分', price: '¥6,000 / 1名', duotone: 'deep', image: '/images/courses/stargazing-1.webp',
    gallery: ['/images/courses/stargazing-1.webp', '/images/courses/stargazing-2.webp', '/images/courses/stargazing-3.webp', '/images/courses/stargazing-4.webp', '/images/courses/stargazing-5.webp', '/images/courses/stargazing-6.webp', '/images/courses/stargazing-7.webp', '/images/courses/stargazing-8.webp'] },
  { slug: 'cruising', name: '絶景クルージングツアー', tag: 'CRUISING', tagline: '海風を切って、島を巡る',
    summary: '久米島の美しい海を船でゆったり巡る、気軽なクルージング。',
    detail: '久米島の美しい海を、船でゆったりと巡るクルージング。海風を感じながら、島影や沖の絶景、時間帯によっては夕陽まで楽しめます。泳がずに海を満喫したい方や、小さなお子さま連れ、記念日の特別な時間にもおすすめ。デッキから望む久米島の海は、格別です。',
    highlights: ['船でゆったり', '絶景・夕陽', '記念撮影', '90分'], duration: '90分', price: '¥8,000 / 1名', duotone: 'lagoon', image: '/images/courses/cruising-1.webp',
    gallery: ['/images/courses/cruising-1.webp', '/images/courses/cruising-2.webp', '/images/courses/cruising-3.webp', '/images/courses/cruising-4.webp', '/images/courses/cruising-5.webp', '/images/courses/cruising-6.webp', '/images/courses/cruising-7.webp', '/images/courses/cruising-8.webp'] },
  { slug: 'yugyosen-solo', group: 'yugyosen', name: '沖釣りフィッシング体験ツアー', tag: 'FISHING', tagline: '漁師ガイドと、本気の海釣り',
    summary: '久米島沖で本格的な船釣りに挑戦。漁師ガイドが同行。',
    detail: '漁師の経験を持つガイドが、その日の潮の流れや天候にあわせてベストな釣り場へご案内。久米島近海の五目釣りから、大物を狙う外洋の釣りまで、本格的な船釣りを体験できます。道具のレンタルもあるので手ぶらでOK。釣った魚は、持ち帰りやお店での調理のご相談も可能です。',
    highlights: ['漁師ガイド同行', '本格船釣り', '道具レンタルあり', '4時間'], duration: '4時間', price: '¥20,000 / 1名', popular: true, duotone: 'deep', image: '/images/courses/fish-1.webp', imagePos: 'center 22%',
    gallery: ['/images/courses/fish-1.webp', '/images/courses/fish-6.webp', '/images/courses/fish-4.webp', '/images/courses/fish-8.webp', '/images/courses/fish-2.webp', '/images/courses/fish-9.webp', '/images/courses/fish-5.webp', '/images/courses/fish-10.webp'] },
  { slug: 'yugyosen-charter', group: 'yugyosen', name: '貸切チャーターフィッシングツアー', tag: 'FISHING', tagline: '船を貸し切って、仲間と',
    summary: '仲間や家族だけで楽しむ、完全貸切の船釣りプラン。',
    detail: '船をまるごと貸し切って、気の合う仲間やご家族だけで楽しむ釣りプラン。まわりを気にせず、自分たちのペースで竿を出せます。漁師ガイドがその日いちばんのポイントへご案内。初心者から経験者まで一緒に楽しめる、特別な釣行です。',
    highlights: ['完全貸切', 'グループ向け', '漁師ガイド同行', '4時間'], duration: '4時間', price: '¥50,000 / 貸切', duotone: 'deep', image: '/images/courses/fish-6.webp',
    gallery: ['/images/courses/fish-6.webp', '/images/courses/fish-7.webp', '/images/courses/fish-9.webp', '/images/courses/okazuri-2.webp', '/images/courses/okazuri-4.webp', '/images/courses/okazuri-3.webp', '/images/courses/fish-5.webp', '/images/courses/fish-10.webp'] },
  { slug: 'okazuri', name: '気軽に楽しむ陸釣り体験ツアー', tag: 'FISHING', tagline: '気軽に、岸から一匹',
    summary: '船に乗らず、岸から手軽に。初心者やお子さま連れにも。',
    detail: '船に乗らず、岸から気軽に楽しめる釣り体験。船が苦手な方や、小さなお子さま連れのご家族にもぴったりです。難しい道具は不要、ガイドが釣り方をやさしくレクチャーします。何が釣れるかは久米島の海しだい。のんびりと「島時間」を楽しみましょう。',
    highlights: ['初心者・家族歓迎', '船が苦手でも', '2時間'], duration: '2時間', price: '¥6,000 / 1名', duotone: 'shallow', image: '/images/courses/fish-3.webp', imagePos: 'center 45%',
    gallery: ['/images/courses/fish-3.webp', '/images/courses/fish-1.webp', '/images/courses/fish-2.webp', '/images/courses/fish-8.webp', '/images/courses/fish-9.webp', '/images/courses/okazuri-4.webp', '/images/courses/okazuri-2.webp', '/images/courses/okazuri-3.webp'] },
  { slug: 'full-day', name: '1日満喫ツアー', tag: 'FULL DAY', tagline: '朝から夜まで、久米島を丸ごと',
    summary: '人気の体験を1日に凝縮。10月〜3月・1日1組限定の特別プラン。',
    detail: 'SUP・シュノーケル・はての浜など、久米島の人気の体験を1日にぎゅっと詰め込んだ、いちばん贅沢なプラン。海が穏やかな秋冬（10月〜3月）に、1日1組さま限定で催行します。専属ガイドが一日つきっきりで、あなたのペースと「やりたい」に合わせて久米島をご案内。内容はご相談のうえ組み立てる、完全オーダーメイドの特別な一日です。',
    highlights: ['10月〜3月限定', '1日1組限定', '完全オーダーメイド', '1日たっぷり'], duration: '1日', duotone: 'gold',
    image: '/images/courses/sup-taiken-1.webp',
    gallery: ['/images/courses/sup-taiken-1.webp', '/images/courses/hama-3.webp', '/images/courses/sup-sunset-1.webp'] },
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

export type Option = { name: string; body: string; price?: string };

export const options: Option[] = [
  { name: 'アクションカメラ撮影',
    body: 'ツアーの迫力ある瞬間を高画質のアクションカメラで撮影。水上で輝くあなたを、何度でも見返せる映像として残します。' },
  { name: '記念写真のプレゼント',
    body: 'ツアー中の自然な笑顔や素敵な瞬間を、プロのクオリティで撮影・編集してプレゼント。久米島の自然とともに最高の思い出を。' },
  { name: 'あなただけのオリジナルVLOG作成', price: '+¥3,000',
    body: 'ツアーの様子を、BGM付きの短編ムービー（VLOG）に編集してお渡し。スマホですぐにシェアできる、旅の思い出そのものの一本です。' },
];
