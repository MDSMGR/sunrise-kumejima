// src/i18n/company.ts
import type { Lang } from './index';

export const company: Record<Lang, any> = {
  ja: {
    metaTitle: '会社概要｜探偵法人トラストリサーチ',
    metaDesc: 'Trust Researchの会社概要をご紹介します。創業者兼共同代表からのメッセージ、秘密厳守・法令遵守・明確な料金体系という3つの約束、ならびに探偵業届出情報をご覧いただけます。',
    eyebrow: 'About Us', title: '会社概要',
    lead: '私たちは、依頼者の「知りたい」に誠実に向き合う探偵法人です。法令を遵守し、秘密を厳守し、確かな証拠でお力になります。',
    msgTitle: '代表挨拶',
    profileTitle: '略歴',
    signPrefix: '探偵法人トラストリサーチ　',
    directors: [
      {
        role: '代表', name: '山本 宗宜', photo: '/images/rep.jpg',
        msg: [
          '代表の山本宗宜と申します。私は今日まで、様々な社会模様、人間模様を目の当たりにして参りました。',
          '人を信ずる事は、普遍的に大事なことであります。しかしながら人間の欲望や行動とは、時に理屈を越えて、想像し得ない結果を体現するものであります。',
          '最後に自分を守れるのは、自分でしかありません。疑心暗鬼になり行動を見誤る事態は、幾多の困難を生みます。真実こそが、何よりも自身を守るのです。',
          '“真実は小説よりも奇なり”',
          '我々は、そんな皆さまへ真実を提供し、未来を明るく照らす為の最後の砦です。我々は覚悟をもって、その職務に邁進して参ります。',
        ],
        career: [
          '1986年5月11日 埼玉県浦和市生まれ',
          '高校卒業後、六本木のナイトクラブでVIPマネージャーとして勤務',
          '27歳で通信業・調査業の会社を起業',
          '35歳で大手芸能事務所「イエローキャブ」社長に就任。芸能界初のフランチャイズ化による全国展開を手掛ける',
          '広告代理店を起業後、探偵法人トラストリサーチを設立',
        ],
      },
      {
        role: '共同代表', name: '中井 裕一', photo: '/images/rep2.jpg',
        msg: [
          '共同代表の中井裕一と申します。探偵業とは、依頼者様の人生や企業様の行く末に関わる、重大な事実を取り扱う仕事です。',
          'だからこそ我々に求められるのは、推測や憶測ではなく、確かな証拠と事実です。真実は時として厳しいものです。しかし、事実を知らないまま判断を誤ることは、さらに大きな後悔を生む可能性があります。',
          '我々の使命は、依頼者様の代わりに事実を収集し、正確にお伝えすることです。感情に流されず、事実に向き合う。その積み重ねこそが、依頼者様の未来を守ると信じています。',
          '“答えを探すな。事実を集めろ。”',
          'その理念のもと、一件一件の調査に誠実に向き合ってまいります。',
        ],
        career: [
          '1990年7月20日 愛知県名古屋市生まれ',
          '高校中退後、大手百貨店をはじめとするアパレル業界で接客・販売業務に従事',
          'その後独立し、フリーランス営業として多業種に携わり、マーケティング・顧客対応の実務経験を積む',
          '2026年、探偵法人トラストリサーチに参画。共同代表に就任',
        ],
      },
    ],
    promiseTitle: '私たちの3つのお約束',
    promises: [
      { t: '秘密厳守', d: 'ご相談・調査内容が外部に漏れることは決してありません。守秘義務を徹底します。' },
      { t: '法令遵守', d: '探偵業法をはじめとする法令を遵守し、適法な範囲で調査を行います。' },
      { t: '明朗会計', d: '調査前に費用を書面で明示。事前の合意なく追加請求することはありません。' },
    ],
    ovTitle: '会社概要',
    needfix: '要差し替え',
    overview: [
      { k: '事務所名', v: '探偵法人トラストリサーチ', fix: false },
      { k: '運営元', v: '株式会社東洋トラスト', fix: false },
      { k: '代表者', v: '山本 宗宜（代表）／中井 裕一（共同代表）', fix: false },
      { k: '探偵業届出証明書番号', v: '東京都公安委員会 第30260134号', fix: false },
      { k: '設立', v: '令和5年6月9日', fix: false },
      { k: '所在地', v: '〒103-0016 東京都中央区日本橋小網町8-2 BIZMARKSビル8階', fix: false },
      { k: '電話番号', v: '03-6555-3414', fix: false },
      { k: 'メール', v: 'info@trust-research.jp', fix: false },
      { k: '営業時間', v: '24時間受付（年中無休）', fix: false },
      { k: '事業内容', v: '各種調査業務（浮気・人探し・身元・企業・資産・嫌がらせ対策など）', fix: false },
    ],
    legalNote: '※ 探偵業法に基づき、探偵業届出証明書番号の表示が義務付けられています。',
    links: { privacy: 'プライバシーポリシー', terms: '利用規約', law: '特定商取引法に基づく表記' },
    ctaTitle: 'まずは、お気軽にご相談ください',
    ctaText: 'どんな小さなことでも構いません。相談は無料・秘密厳守、24時間受付です。',
    ctaBtn: '無料で相談する',
  },
  en: {
    "metaTitle": "About Us | Trust Research",
    "metaDesc": "About Trust Research. Read a message from our Founder and Co-Representative, learn about our three commitments—confidentiality, legal compliance, and transparent pricing—and view our detective-business registration details.",
    "eyebrow": "About Us",
    "title": "About Us",
    "lead": "We are a licensed detective agency committed to sincerely addressing our clients' need for answers. We operate in full compliance with applicable laws, maintain strict confidentiality, and provide reliable evidence to support our clients' needs.",
    "msgTitle": "Message from the Founder and Co-Representative",
    "profileTitle": "Career Summary",
    "signPrefix": "Trust Research　",
    "directors": [
      {
        "role": "Representative Director",
        "name": "Muneyoshi Yamamoto",
        "photo": "/images/rep.jpg",
        "msg": [
          "My name is Muneyoshi Yamamoto, Representative of Trust Research.",
          "Over the years, I have witnessed a wide range of human relationships and social realities. These experiences have reaffirmed a simple yet profound truth: while trust in others is fundamentally important, human desires and actions can sometimes lead to outcomes beyond logic and expectation.",
          "Ultimately, the only person who can truly protect you is yourself. When doubt turns into confusion, it can lead to misjudgment and further complications. In many cases, it is the truth that becomes the most reliable form of protection.",
          "“Truth is stranger than fiction.”",
          "At Trust Research, we are committed to providing that truth to those who seek it, helping to illuminate a clearer and more certain path forward. We see ourselves as a final line of support for our clients, and we approach our responsibilities with full dedication and resolve.",
          "With sincerity and determination, we will continue to fulfill our mission."
        ],
        "career": [
          "Born on May 11, 1986, in Urawa, Saitama, Japan.",
          "After graduating from high school, he worked in Roppongi as a VIP manager at a nightclub, gaining extensive experience in client relations and service management.",
          "At the age of 27, he founded companies in the telecommunications and investigative services industries.",
          "At 35, he was appointed President of the major entertainment agency “Yellow Cab,” where he led the industry’s first nationwide franchise expansion in the entertainment sector.",
          "He later founded an advertising agency before establishing Trust Research, a licensed detective agency."
        ]
      },
      {
        "role": "Co-Representative",
        "name": "Yuichi Nakai",
        "photo": "/images/rep2.jpg",
        "msg": [
          "My name is Yuichi Nakai, Co-Representative of Trust Research.",
          "Detective work is a profession that deals with critical facts that can significantly impact the lives of individuals and the future of businesses. For this reason, what is required of us is not speculation or assumption, but accurate and reliable evidence.",
          "The truth can sometimes be difficult to face. However, making decisions without knowing the facts can lead to even greater regret.",
          "Our mission is to gather facts on behalf of our clients and present them with clarity and precision. By remaining objective and not being swayed by emotions, we believe we can help protect our clients’ future through a steady commitment to truth and accuracy.",
          "“Do not search for answers. Gather the facts.”",
          "Guided by this philosophy, we approach every investigation with sincerity, responsibility, and unwavering dedication."
        ],
        "career": [
          "Born on July 20, 1990, in Nagoya, Aichi, Japan.",
          "After leaving high school, he began his career in the retail and apparel industry, working in customer service and sales at major department stores.",
          "He later became independent as a freelance sales professional, working across multiple industries and gaining practical experience in marketing and client relations.",
          "In 2026, he joined Trust Research and was appointed Co-Representative."
        ]
      }
    ],
    "promiseTitle": "Our Three Commitments",
    "promises": [
      {
        "t": "Strict Confidentiality",
        "d": "We ensure that all consultations and investigation details are never disclosed to any third party. We strictly uphold confidentiality obligations at all times."
      },
      {
        "t": "Legal Compliance",
        "d": "We comply with the Detective Business Act and all applicable laws and regulations, and conduct all investigations strictly within legal boundaries."
      },
      {
        "t": "Transparent Pricing",
        "d": "We clearly present all costs in writing before the investigation begins. We never issue any additional charges without prior agreement."
      }
    ],
    "ovTitle": "Company Profile",
    "needfix": "to be updated",
    "overview": [
      {
        "k": "Office Name",
        "v": "Trust Research Detective Agency",
        "fix": false
      },
      {
        "k": "Operating Company",
        "v": "Toyo Trust Co., Ltd.",
        "fix": false
      },
      {
        "k": "Representative",
        "v": "Muneyoshi Yamamoto",
        "fix": false
      },
      {
        "k": "Co-Representative",
        "v": "Yuichi Nakai",
        "fix": false
      },
      {
        "k": "Detective Business License No.",
        "v": "Tokyo Metropolitan Public Safety Commission No. 30260134",
        "fix": false
      },
      {
        "k": "Established",
        "v": "June 9, 2023",
        "fix": false
      },
      {
        "k": "Location",
        "v": "8F BIZMARKS Building, 8-2 Nihonbashi Koamicho, Chuo-ku, Tokyo 103-0016, Japan",
        "fix": false
      },
      {
        "k": "Phone",
        "v": "+81-3-6555-3414",
        "fix": false
      },
      {
        "k": "Email",
        "v": "info@trust-research.jp",
        "fix": false
      },
      {
        "k": "Hours",
        "v": "24/7 (Open year-round)",
        "fix": false
      },
      {
        "k": "Services",
        "v": "Investigation Services (Infidelity, Missing Persons, Background Checks, Corporate Investigations, Asset Tracing, and Harassment Cases)",
        "fix": false
      }
    ],
    "legalNote": "Note: In accordance with the Detective Business Act, display of the Detective Business Registration Number is legally required.",
    "links": {
      "privacy": "Privacy Policy",
      "terms": "Terms of Service",
      "law": "Commercial Transaction Act Notice"
    },
    "ctaTitle": "Feel Free to Contact Us First",
    "ctaText": "No matter how small your concern may be, you are welcome to reach out. Consultations are free of charge, strictly confidential, and available 24/7.",
    "ctaBtn": "Contact Us for Free Consultation"
  },
  zh: {
    metaTitle: '公司简介｜Trust Research',
    metaDesc: 'Trust Research 公司概要：代表与共同代表致辞，严格保密、遵守法律、明码实价的方针，以及侦探业申报信息。',
    eyebrow: 'About Us', title: '公司简介',
    lead: '我们是一家以真诚回应委托人「想要知道」之需求的侦探法人。遵守法律、严守秘密，以确凿的证据为您提供帮助。',
    msgTitle: '代表致辞',
    profileTitle: '简历',
    signPrefix: 'Trust Research　',
    directors: [
      {
        role: '代表', name: '山本 宗宜', photo: '/images/rep.jpg',
        msg: [
          '我是代表山本宗宜。时至今日，我目睹了形形色色的社会百态与人间百态。',
          '信任他人，是普世而重要的事。然而人的欲望与行为，有时会超越常理，呈现出难以想象的结果。',
          '最终能保护自己的，唯有自己。一旦疑神疑鬼、行动失据，便会招致重重困难。唯有真相，才能最好地守护您自身。',
          '“真实比小说更离奇”',
          '我们正是为这样的各位提供真相、照亮未来的最后堡垒。我们将以觉悟之心，全力以赴履行职责。',
        ],
        career: [
          '1986年5月11日 生于埼玉县浦和市',
          '高中毕业后，于六本木夜店担任VIP经理',
          '27岁创办通信业、调查业公司',
          '35岁就任大型艺人经纪公司「Yellow Cab」社长，开创演艺界首次以加盟方式的全国扩展',
          '创办广告代理公司后，设立侦探法人 Trust Research',
        ],
      },
      {
        role: '共同代表', name: '中井 裕一', photo: '/images/rep2.jpg',
        msg: [
          '我是共同代表中井裕一。侦探业，是处理关乎委托人人生、关乎企业前途之重大事实的工作。',
          '正因如此，我们所被要求的，不是推测与臆断，而是确凿的证据与事实。真相有时是严酷的。然而，在不知事实的情况下判断失误，可能带来更大的悔恨。',
          '我们的使命，是代替委托人收集事实并准确传达。不为情绪所左右，直面事实。我们相信，正是这样的日积月累，守护着委托人的未来。',
          '“不要寻找答案，去收集事实。”',
          '在这一理念之下，我们将诚实地面对每一件调查。',
        ],
        career: [
          '1990年7月20日 生于爱知县名古屋市',
          '高中退学后，于大型百货公司等服装行业从事接待与销售',
          '其后独立，作为自由职业销售涉足多个行业，积累市场营销与客户对应的实务经验',
          '2026年加入侦探法人 Trust Research，就任共同代表',
        ],
      },
    ],
    promiseTitle: '我们的三项承诺',
    promises: [
      { t: '严格保密', d: '您的咨询与调查内容绝不会外泄。我们彻底履行保密义务。' },
      { t: '遵守法律', d: '遵守《侦探业法》等法律法规，仅在合法范围内开展调查。' },
      { t: '明码实价', d: '调查前以书面明示费用。绝不会在未经事先同意的情况下追加收费。' },
    ],
    ovTitle: '公司概要',
    needfix: '待替换',
    overview: [
      { k: '事务所名称', v: 'Trust Research', fix: false },
      { k: '运营方', v: '株式会社东洋信托', fix: false },
      { k: '代表人', v: '山本宗宜（代表）／中井裕一（共同代表）', fix: false },
      { k: '侦探业申报证明编号', v: '东京都公安委员会 第30260134号', fix: false },
      { k: '成立', v: '2023年6月9日', fix: false },
      { k: '所在地', v: '〒103-0016 东京都中央区日本桥小网町8-2 BIZMARKS大厦8层', fix: false },
      { k: '电话', v: '+81-3-6555-3414', fix: false },
      { k: '邮箱', v: 'info@trust-research.jp', fix: false },
      { k: '营业时间', v: '24小时受理（全年无休）', fix: false },
      { k: '业务内容', v: '各类调查业务（婚外情、寻人、背景、企业、资产、反骚扰等）', fix: false },
    ],
    legalNote: '※ 根据《侦探业法》，必须显示侦探业申报证明编号。',
    links: { privacy: '隐私政策', terms: '使用条款', law: '特定商业交易法标示' },
    ctaTitle: '欢迎随时咨询',
    ctaText: '无论多小的事都可以。咨询免费、严格保密，24小时受理。',
    ctaBtn: '免费咨询',
  },
};
