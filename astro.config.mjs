import robotsTxt from 'astro-robots-txt'
import cloudflare from '@astrojs/cloudflare'
import { defineConfig } from 'astro/config'
import { SITE_URL } from './src/data/config'
import { unified } from '@astrojs/markdown-remark'
import rehypeSlug from 'rehype-slug'
import { rehypeImageOptimize } from './src/utils/rehype-image'
import mdx from '@astrojs/mdx'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    robotsTxt({
      sitemap: `${SITE_URL}/sitemap.xml`,
    }),
    mdx(),
  ],

  site: SITE_URL,

  markdown: {
    processor: unified({
      rehypePlugins: [rehypeSlug, rehypeImageOptimize],
    }),
    syntaxHighlight: {
      type: 'shiki',
    },
    shikiConfig: {
      themes: {
        dark: 'nord',
        light: 'github-light',
      },
      wrap: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 3000,
    },
  },
})
