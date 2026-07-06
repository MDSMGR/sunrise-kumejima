// Cafe & Bar SUNRISE 全メニュー（カテゴリ別・タブ表示用）
export type CafeItem = {
  name: string;
  en?: string;
  price: string;
  body?: string;
  image?: string;
};
export type CafeExtras = {
  title: string;
  list: { name: string; en?: string; price: string }[];
};
export type CafeCategory = {
  id: string;
  label: string;
  note?: string;
  items: CafeItem[];
  extras?: CafeExtras;
};

export const cafeMenuNote = '価格はすべて税込表示です。メニューは季節により変わる場合があります。';

const IMG = '/images/cafe/menu';

export const cafeMenu: CafeCategory[] = [
  {
    id: 'rice',
    label: 'ご飯もの',
    note: '全種たまごスープ付き',
    items: [
      { name: 'タコライス', en: 'Taco Rice', price: '¥1,500', image: `${IMG}/taco-rice.webp`,
        body: 'スパイス香る特製ミートに特製ソース、新鮮な野菜とたっぷりチーズをのせた、サンライズおすすめの1皿。' },
      { name: 'ガパオライス', en: 'Gapao Rice', price: '¥1,500', image: `${IMG}/gapao-rice.webp`,
        body: '島野菜の甘みを特製ソースで炒めたガパオ。黄身をからめれば、食欲をそそる1皿です。' },
      { name: 'キムトマトそうめん', en: 'Kimchi Tomato Somen', price: '¥1,500',
        body: '久米島産もずくと、キムチ・トマトの旨みがやみつきに。海遊びの後にぴったりの、さっぱり冷たいそうめん。' },
    ],
  },
  {
    id: 'snack',
    label: 'おつまみ',
    items: [
      { name: '島豆腐サラダ', en: 'Shima Tofu Salad', price: '¥1,000', image: `${IMG}/shima-tofu-salad.webp`,
        body: '久米島の島豆腐とシャキシャキ野菜を、シークワーサーの爽やかな酸味で。さっぱりヘルシーで、暑い日にもぴったり。' },
      { name: 'フライドポテト', en: 'Fried Potatoes', price: '¥800', image: `${IMG}/fried-potatoes.webp`,
        body: '外はカリッと中はホクホクの定番ポテト。シンプルな塩味で、おやつにもおつまみにも。' },
      { name: 'ナチョスチップ', en: 'Nachos Chips', price: '¥800', image: `${IMG}/nachos-chips.webp`,
        body: 'サクサクのチップに特製ミートとソースをのせた、ピリ辛おつまみ。' },
    ],
  },
  {
    id: 'special',
    label: '特別メニュー',
    note: '久米島の海が育んだ、上質な旨みをご堪能ください。',
    items: [
      { name: 'ガーリックシュリンプ', en: 'Garlic Shrimp (Salt-Grilled)', price: '¥1,600', image: `${IMG}/garlic-shrimp.webp`,
        body: '香ばしいバターの香りと、食べ応えのあるガーリックの味わい。お酒のお供にぴったりの1品です。' },
      { name: '車エビの塩焼き', en: 'Salt-Grilled Kuruma Prawn', price: '¥1,200', image: `${IMG}/kuruma-prawn.webp`,
        body: '久米島「球美の塩」を使用。ふっくら焼き上げ、車海老本来の旨みを楽しめる1品です。' },
    ],
  },
  {
    id: 'crepe',
    label: 'クレープ',
    items: [
      { name: '星空クレープ', en: 'Hoshizora Crepe', price: '¥1,000', image: `${IMG}/crepe-hoshizora.webp`,
        body: '夜空をイメージしたブルーのホイップに、カラフルな星をちりばめた幻想的なクレープ。' },
      { name: 'ウミガメクレープ', en: 'Umigame Crepe', price: '¥1,000', image: `${IMG}/crepe-umigame.webp`,
        body: 'ふんわりホイップにカラースプレーとウミガメクッキー。見た目もかわいい人気クレープ。' },
      { name: 'ウミガメ甲羅クレープ', en: 'Umigame Kora Crepe', price: '¥1,000', image: `${IMG}/crepe-umigame-kora.webp`,
        body: 'パリッと香ばしいブリュレ仕立て。ウミガメの甲羅のような食感が楽しめます。' },
      { name: '紅芋ブリュレクレープ', en: 'Beniimo Brulee Crepe', price: '¥1,000', image: `${IMG}/crepe-beniimo-brulee.webp`,
        body: '久米島の紅芋を使った、パリッと香ばしいブリュレ仕立ての和スイーツ風クレープ。' },
      { name: 'チョコバナナクレープ', en: 'Choco Banana Crepe', price: '¥1,000', image: `${IMG}/crepe-choco-banana.webp` },
      { name: 'マンゴークレープ', en: 'Mango Crepe', price: '¥1,000', image: `${IMG}/crepe-mango.webp` },
      { name: 'ブルーベリークレープ', en: 'Blueberry Crepe', price: '¥1,000', image: `${IMG}/crepe-blueberry.webp` },
      { name: 'オレオクレープ', en: 'Oreo Crepe', price: '¥1,000', image: `${IMG}/crepe-oreo.webp` },
      { name: '塩キャラメルナッツクレープ', en: 'Salted Caramel Nut Crepe', price: '¥1,000', image: `${IMG}/crepe-salted-caramel-nut.webp` },
    ],
    extras: {
      title: 'トッピング',
      list: [
        { name: 'ブルーシールバニラアイス', en: 'Blue Seal Vanilla Ice Cream', price: '¥300' },
        { name: 'みそクッキー', en: 'Miso Cookie', price: '¥300' },
        { name: 'バナナ', en: 'Banana', price: '¥200' },
        { name: 'ブルーベリー', en: 'Blueberry', price: '¥200' },
        { name: 'マンゴー', en: 'Mango', price: '¥200' },
        { name: 'ウミガメクッキー', en: 'Sea Turtle Cookie', price: '¥200' },
        { name: 'カスタードクリーム', en: 'Custard Cream', price: '¥200' },
        { name: 'チョコ生地変更', en: 'Chocolate Crepe Batter', price: '¥200' },
        { name: 'フレーク', en: 'Flakes', price: '¥100' },
        { name: 'ナッツ', en: 'Nuts', price: '¥100' },
        { name: 'オレオ', en: 'Oreo', price: '¥100' },
        { name: '各種ソース（マンゴー・ブルーベリー・コーヒー・キャラメル）', en: 'Sauces', price: '¥100' },
      ],
    },
  },
  {
    id: 'sweets',
    label: 'スイーツ',
    items: [
      { name: '極上マンゴー', en: 'Premium Mango', price: '¥1,300', image: `${IMG}/sweets-premium-mango.webp`,
        body: 'ブルーシールのバニラアイスを贅沢に使用。とろける完熟マンゴーの、濃厚で香り豊かな極上スイーツ。' },
      { name: 'かき氷', en: 'Shaved Ice', price: '¥600',
        body: 'イチゴ・メロン・ハワイアンブルー・マンゴーからお選びいただけます。' },
    ],
  },
  {
    id: 'drink',
    label: 'ドリンク',
    note: 'フロートはブルーシールのバニラアイスを使用しています。',
    items: [
      { name: 'マンゴーラッシー', en: 'Mango Lassi', price: '¥900', image: `${IMG}/lassi-mango.webp` },
      { name: 'ブルーベリーラッシー', en: 'Blueberry Lassi', price: '¥900', image: `${IMG}/lassi-blueberry.webp` },
      { name: '久米ブルーフロート', en: 'Kume Blue Float', price: '¥900', image: `${IMG}/float-kume-blue.webp` },
      { name: 'メロンフロート', en: 'Melon Float', price: '¥900', image: `${IMG}/float-melon.webp` },
      { name: 'コーヒーフロート', en: 'Coffee Float', price: '¥900', image: `${IMG}/float-cola.webp` },
      { name: 'コーラフロート', en: 'Cola Float', price: '¥900', image: `${IMG}/float-cola.webp` },
    ],
  },
  {
    id: 'mocktail',
    label: 'モクテル',
    note: 'ノンアルコールカクテル。お酒が飲めない方やお子さまにも。',
    items: [
      { name: 'サンライズモクテル', en: 'Sunrise Mocktail', price: '¥900', image: `${IMG}/mocktail-sunrise.webp`,
        body: '朝焼けのようなオレンジ〜レッドのグラデーションが美しい、爽やかなノンアルカクテル。' },
      { name: 'シークワーサーモクテル', en: 'Shikuwasa Mocktail', price: '¥900', image: `${IMG}/mocktail-shikwasa.webp`,
        body: '久米島の恵み、シークワーサーの爽やかな酸味がすっきり広がる一杯。' },
      { name: '久米島ブルーモクテル', en: 'Kumejima Blue Mocktail', price: '¥900', image: `${IMG}/mocktail-kume-blue.webp`,
        body: '久米島の海を映したような、透明感あふれるブルーの爽快ノンアル。' },
      { name: 'トロピカルマンゴーモクテル', en: 'Tropical Mango Mocktail', price: '¥900', image: `${IMG}/mocktail-tropical-mango.webp`,
        body: '完熟マンゴーの甘さで南国気分に浸れる、トロピカルなノンアルカクテル。' },
    ],
  },
];
