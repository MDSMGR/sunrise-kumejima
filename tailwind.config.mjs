/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 朝焼け × オーシャン のブランドパレット
        abyss: '#06303a',   // 深い海・テキスト
        lagoon: '#0e7c86',  // 久米島のエメラルド
        shallow: '#5fc9c4', // 浅瀬のアクア
        dawn: '#ff7a45',    // 朝焼けコーラル（主役のアクセント / CTA）
        gold: '#ffc24b',    // モーニングゴールド
        sand: '#fbf6ec',    // 砂浜のオフホワイト
      },
      fontFamily: {
        display: ['Outfit', 'Zen Kaku Gothic New', 'sans-serif'],
        sans: ['"Zen Kaku Gothic New"', 'Outfit', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(6, 48, 58, 0.45)',
        lift: '0 28px 60px -28px rgba(6, 48, 58, 0.55)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 5s ease-in-out infinite',
        rise: 'rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
