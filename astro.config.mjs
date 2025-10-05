// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import partytown from '@astrojs/partytown';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://crossrel.jp/', // ここにデプロイ先のドメインを設定
  // Tailwind v4 は Vite プラグインで適用
  vite: {
    plugins: [tailwind()],
  },
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
});
