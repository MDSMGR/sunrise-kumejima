/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // A案：ロゴ由来の暖色一本（明朝×クリーム）
        paper: '#F7EFDB',   // 背景・紙のクリーム
        cream: '#FBF6E9',   // セクション面
        card: '#FFFDF7',    // カード
        ink: '#2F2419',     // 本文の墨
        inksoft: '#796550', // やわらかい墨
        sun: '#E8821C',     // サンライズ橙（主役・CTA）
        gold: '#F3B83A',    // モーニング金（差し色）
        ember: '#BF5018',   // 夕陽のテラコッタ（締め）
        line: 'rgba(47,36,25,0.12)',
      },
      fontFamily: {
        mincho: ['"Noto Serif JP"', '"Hiragino Mincho ProN"', '"Yu Mincho"', 'serif'],
        fraunces: ['Fraunces', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', '"Yu Gothic"', '"Noto Sans JP"', 'sans-serif'],
      },
      maxWidth: { content: '1080px' },
      letterSpacing: { wide2: '0.1em', wide3: '0.18em' },
      boxShadow: {
        soft: '0 18px 40px -26px rgba(47,36,25,0.4)',
        lift: '0 26px 54px -28px rgba(191,80,24,0.5)',
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        rise: { from: { opacity: '0', transform: 'translateY(22px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        rise: 'rise 0.9s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
};
