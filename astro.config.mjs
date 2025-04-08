// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://crossrel.jp/', // ここにデプロイ先のドメインを設定
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(),
  },
});
