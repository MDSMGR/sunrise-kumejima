# SUNRISE 久米島 — 公式サイト

沖縄・久米島のマリン体験ショップ「SUNRISE」のWebサイト。
Astro 4 + Tailwind CSS + Netlify 構成の静的サイトです。

## 技術構成

- **Astro 4**（静的サイト生成）
- **Tailwind CSS 3**（`@astrojs/tailwind`）
- **@astrojs/sitemap**（sitemap自動生成）
- **Netlify Forms**（お問い合わせフォーム）
- ホスティング：**Netlify**

## ローカル開発

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ に本番ビルド
npm run preview    # ビルド結果をローカル確認
```

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | トップ（ヒーロー・About・コース・オプション・CTA） |
| `/courses` | コースのご案内（全6コース＋オプション詳細） |
| `/spots` | スポット紹介（SUP・シュノーケル） |
| `/staff` | スタッフ紹介 |
| `/faq` | よくある質問 |
| `/contact` | お問い合わせフォーム（Netlify Forms） |
| `/thanks` | 送信完了ページ |
| `/legal/tokushoho` | 特定商取引法に基づく表記 |
| `/legal/privacy` | プライバシーポリシー |
| `/legal/cookie` | Cookieポリシー |

## コンテンツの編集場所

文章・コース・FAQ・店舗情報はすべてデータファイルに集約しています。
ここを編集すれば各ページに反映されます。

- `src/data/site.ts` … 店舗情報・ナビ・FAQ・スポット・スタッフ
- `src/data/courses.ts` … コース内容・オプション
- 配色（ブランドカラー）… `tailwind.config.mjs` の `colors`

## 写真の差し替え

現在、メインビジュアルとコース画像はブランドカラーのデュオトーン（CSSグラデーション）で
仮表示しています。実写を入れる場合：

1. `public/images/` に写真を配置（例：`hero.jpg`, `course-sup.jpg`）
2. 該当箇所の `.media` ブロックを `<img>` に置き換え、`src="/images/..."` を指定

写真を入れると一気に質感が上がります。はての浜・SUP・シュノーケルの高画質横写真を優先で。

## Netlify へのデプロイ

1. このフォルダを Git リポジトリにして push（GitHub等）
2. Netlify で「Add new site → Import from Git」
3. ビルド設定は `netlify.toml` を自動認識
   - Build command: `npm run build`
   - Publish directory: `dist`
4. デプロイ後、**Forms** タブにフォーム送信が届きます

### フォーム通知の宛先設定

Netlify 管理画面 → Site settings → **Forms → Form notifications** で
`sunrise.sup.kumejima@gmail.com` への Email 通知を追加してください。

## ドメイン（後から追加）

独自ドメイン取得後：

1. Netlify → Domain management でドメインを追加
2. `astro.config.mjs` の `site` を本番URLに変更
3. `public/robots.txt` の Sitemap URL も合わせて更新

## 外部リンク

- LINE 予約：`https://lin.ee/dUgQeMz`
- Instagram：`https://www.instagram.com/sunrise_kumejima/`
- TikTok：`https://www.tiktok.com/@kumejima_sunrise`

リンク先は `src/data/site.ts` で一括管理しています。
