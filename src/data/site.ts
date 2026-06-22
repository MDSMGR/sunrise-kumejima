export const site = {
  name: 'SUNRISE 久米島',
  nameEn: 'SUNRISE',
  tagline: '人生で最高の冒険へ飛び込もう',
  description:
    '沖縄・久米島の海を舞台に、SUP・シュノーケル・はての浜ツアーなど心に残るマリン体験をお届けする体験ショップ SUNRISE（サンライズ）の公式サイト。',
  address: '沖縄県島尻郡久米島町比嘉160-71',
  tel: '050-8882-5769',
  email: 'sunrise.sup.kumejima@gmail.com',
  line: 'https://lin.ee/dUgQeMz',
  instagram: 'https://www.instagram.com/sunrise_kumejima/',
  tiktok: 'https://www.tiktok.com/@kumejima_sunrise',
};

export const nav = [
  { label: 'ホーム', href: '/' },
  { label: 'コース', href: '/courses' },
  { label: 'スポット紹介', href: '/spots' },
  { label: 'スタッフ紹介', href: '/staff' },
  { label: 'Cafe & Bar', href: '/cafe' },
  { label: 'FAQ', href: '/faq' },
  { label: 'お問い合わせ', href: '/contact' },
];

// 系列店 Cafe & Bar SUNRISE
export const cafe = {
  name: 'Cafe & Bar SUNRISE',
  tagline: '海の余韻を、もう一杯。',
  hours: '12:00〜24:00',
  closed: '日曜日',
  payments: ['現金', 'クレジットカード', 'PayPay'],
  terrace: true,
  instagram: 'https://www.instagram.com/cafebar_sunrise_kumejima/',
  instagramHandle: '@cafebar_sunrise_kumejima',
  menu: [
    {
      name: 'タコライス',
      price: '¥1,500',
      body: '沖縄定番のタコライス。スパイスの効いたミート、シャキシャキ野菜、とろけるチーズを一皿に。',
      image: '/images/cafe-tacorice.jpg',
    },
    {
      name: '紅芋ブリュレ',
      price: '¥1,300',
      body: '沖縄産・紅芋のブリュレ。香ばしく焦がした表面と、ねっとり甘い紅芋の余韻。締めの一品に。',
      image: '/images/cafe-beniimo.jpg',
    },
    {
      name: '車海老の塩焼き',
      price: '¥1,200',
      body: 'ぷりっと甘い車海老をシンプルに塩焼きで。素材の旨みを、レモンをきゅっと搾って。',
      image: '/images/cafe-ebi.jpg',
    },
  ],
};

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: '泳げなくても参加できますか？',
    a: 'はい。SUPやシュノーケルはライフジャケットを着用し、ガイドが常に同行します。泳ぎに自信がない方も多数ご参加いただいているので、安心してお申し込みください。',
  },
  {
    q: '子どもや家族でも参加できますか？',
    a: 'お子さま連れのご家族も歓迎です。年齢やプランによって参加条件が異なる場合があるため、ご予約時にお子さまの年齢をお知らせください。最適なプランをご案内します。',
  },
  {
    q: '何を持っていけばいいですか？',
    a: '水着・タオル・日焼け止め・着替えがあれば基本的にOKです。SUPボードやシュノーケル器材などのアクティビティ用具はこちらでご用意します。',
  },
  {
    q: '雨でも開催しますか？',
    a: '小雨程度であれば開催することが多いですが、海況や天候によっては安全のため中止・日程変更をお願いする場合があります。判断は当日の状況を見てガイドよりご連絡します。',
  },
  {
    q: '予約はどうすればいいですか？',
    a: '公式LINEまたはお問い合わせフォームから、ご希望の日程・プラン・人数をお送りください。折り返し空き状況と詳細をご案内します。',
  },
  {
    q: '集合場所はどこですか？',
    a: 'プランによって集合場所が異なります。ご予約確定後に、集合場所・時間・当日の流れを個別にご案内します。久米島空港や港からのアクセスもご相談ください。',
  },
];

export type Spot = {
  name: string;
  kind: 'SUP' | 'シュノーケル';
  body: string;
};

export const spots: Spot[] = [
  {
    name: 'はての浜',
    kind: 'SUP',
    body: '360度を海に囲まれた純白の砂州。鏡のような遠浅の海面は、SUPで漕ぎ出すのにこれ以上ない舞台です。久米島を代表する絶景。',
  },
  {
    name: 'イーフビーチ周辺',
    kind: 'SUP',
    body: '日本の渚百選にも選ばれた白砂のロングビーチ。穏やかな内海で、SUPデビューや夕暮れのサンセットSUPにぴったりです。',
  },
  {
    name: '奥武島・畳石エリア',
    kind: 'シュノーケル',
    body: '亀の甲羅のような畳石が並ぶ独特の海岸。岩場まわりは生き物が豊富で、のんびり生態観察を楽しめる人気ポイントです。',
  },
  {
    name: 'その日のベストポイント',
    kind: 'シュノーケル',
    body: '潮・風・透明度を見て、ガイドがその日いちばん美しい海へ船でご案内。固定ポイントにこだわらないからこそ出会える景色があります。',
  },
];

export const staff = [
  {
    name: '越智 康平',
    role: '代表ガイド',
    comment: '久米島の魅力を知り尽くしたガイドがご案内します！\n何でもお気軽にお話しください！',
    body: 'SUP・シュノーケルから、はての浜ツアー、フィッシング、トレッキング、星空まで。久米島の海と自然を誰よりも知り尽くした代表ガイドが、安全第一であなたの一日をご案内します。初めての方も、お子さま連れのご家族も、その日のベストな体験を一緒に見つけましょう。',
    image: '/images/staff-guide.jpg',
  },
];
