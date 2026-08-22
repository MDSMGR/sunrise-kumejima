import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// ドメイン確定後に site を本番URLへ差し替えてください。
export default defineConfig({
  site: 'https://kumejima-sunrise.netlify.app',
  integrations: [tailwind(), sitemap()],
});
