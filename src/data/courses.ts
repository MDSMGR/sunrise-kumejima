export type Course = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  summary: string;
  detail: string;
  highlights: string[];
  duotone: 'dawn' | 'lagoon' | 'gold' | 'deep' | 'shallow';
  image?: string;
};

// 既存サイト（SUNRISE 久米島）のコース内容をベースに再構成
export const courses: Course[] = [
  {
    slug: 'sup',
    image: '/images/courses/course-sup.jpg',
    name: '体験SUP',
    tag: 'SUP',
    tagline: '海の上を、ただ静かに歩く',
    summary: 'SUP初心者やのんびり過ごしたい方に最適な、癒し系の定番プラン。',
    detail:
      'ボードの上に立って水面を進むSUP（スタンドアップパドル）。久米島の透明度抜群のエメラルドブルーを、自分のペースで散歩するように楽しめます。インストラクターが基礎から丁寧にレクチャーするので、初めての方でも数分で海の上に立てます。',
    highlights: ['初心者歓迎', '少人数制', '所要 約2時間'],
    duotone: 'shallow',
  },
  {
    slug: 'snorkel',
    image: '/images/courses/course-snorkel.jpg',
    name: 'シュノーケル体験',
    tag: 'SNORKEL',
    tagline: 'その日いちばん美しい海へ',
    summary: '船で移動して、その日のベストなシュノーケルポイントへご案内。',
    detail:
      'ガイドが海況を見極め、その日もっとも美しいポイントへ船でお連れします。カラフルな珊瑚と熱帯魚の群れ、運が良ければウミガメに出会えることも。ガイドが常に同行するので、泳ぎに自信がない方も安心して楽しめます。',
    highlights: ['ガイド同行', 'ウミガメ遭遇のチャンス', '器材レンタル込み'],
    duotone: 'lagoon',
  },
  {
    slug: 'hatenohama',
    image: '/images/courses/course-hatenohama.jpg',
    name: 'はての浜ツアー',
    tag: 'BEST VIEW',
    tagline: '360度、海に囲まれて',
    summary: '久米島を代表する絶景スポット。白い砂浜の上で楽しむ非日常。',
    detail:
      'どこまでも続く真っ白な砂浜と、360度を海に囲まれた久米島屈指の絶景スポット「はての浜」。船で渡り、透明度抜群の海の上でSUPや海水浴を満喫できます。写真も映像も、まさに非日常そのもの。久米島に来たら一度は訪れたい場所です。',
    highlights: ['久米島の象徴', '船で渡る', 'SUP・海水浴OK'],
    duotone: 'gold',
  },
  {
    slug: 'fishing',
    image: '/images/courses/course-fishing.jpg',
    name: 'フィッシングツアー',
    tag: 'FISHING',
    tagline: '冬こそ釣れる、初めての海釣り',
    summary: '冬は魚が寄りやすく釣れやすい。初心者向けの海釣り体験。',
    detail:
      '水温が下がる冬は魚が浅場に寄りやすく、初心者でも釣果を上げやすいシーズン。道具の使い方からポイント選びまでガイドがサポートします。釣り上げた魚の感動は格別。家族連れにも人気のプランです。',
    highlights: ['初心者向け', '道具レンタル込み', '冬がベストシーズン'],
    duotone: 'deep',
  },
  {
    slug: 'trekking',
    image: '/images/courses/course-trekking.jpg',
    name: 'トレッキングツアー',
    tag: 'ADVENTURE',
    tagline: 'ガイドとしか行けない秘境へ',
    summary: 'ガイド同行でしか辿り着けない、冒険感MAXのトレッキング。',
    detail:
      '地元を知り尽くしたガイドと一緒でなければ辿り着けない、久米島の秘境へ。手つかずの自然のなかを歩き、島の本当の表情に出会う冒険系プラン。海だけじゃない久米島を体感したい方におすすめです。',
    highlights: ['ガイド同行必須', '冒険感MAX', '歩きやすい服装で'],
    duotone: 'lagoon',
  },
  {
    slug: 'stargazing',
    image: '/images/courses/course-stargazing.jpg',
    name: '星空ツアー',
    tag: 'NIGHT',
    tagline: '冬の夜空に、天の川',
    summary: '冬は星が最も綺麗。一眼レフで天の川を撮影、データもプレゼント。',
    detail:
      '街明かりの少ない久米島は、星空観賞にうってつけ。空気の澄む冬は天の川までくっきりと見えます。一眼レフであなたと星空を撮影し、データはそのままプレゼント。一生の思い出になる一枚を持ち帰れます。',
    highlights: ['天の川撮影', '撮影データ進呈', '冬がベストシーズン'],
    duotone: 'deep',
  },
];

export type Option = {
  name: string;
  body: string;
  note?: string;
};

export const options: Option[] = [
  {
    name: 'アクションカメラ撮影',
    body: 'ツアーの迫力ある瞬間を高画質のアクションカメラで撮影。水上で輝くあなたを、何度でも見返せる映像として残します。',
  },
  {
    name: '記念写真のプレゼント',
    body: 'ツアー中の自然な笑顔や素敵な瞬間を、プロのクオリティで撮影・編集してプレゼント。久米島の自然とともに最高の思い出を。',
  },
  {
    name: 'ドローン撮影',
    body: '空から眺める久米島の海をダイナミックに撮影。SNS映え抜群の映像に仕上げ、あなたの冒険を特別な一枚に。',
    note: '※追加料金がかかります。天候により撮影できない場合があります。',
  },
];
