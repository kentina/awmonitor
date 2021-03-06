import path from 'path'

import Vue from '@vitejs/plugin-vue'
import Components from 'vite-plugin-components'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'

const importMode = path => {
  if (path === '/src/pages/index.vue') return 'sync'
  return 'async'
}

export default {
  assetsDir: 'assets',
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core'
    ],
    exclude: [
      '@iconscout/unicons',
      'vue-demi'
    ]
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    Vue(),
    Pages({ importMode }),
    Layouts(),
    Components(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      manifest: {
        name: 'AW Monitor',
        short_name: 'AW Monitor',
        background_color: '#6563FF',
        theme_color: '#6563FF',
        start_url: '/?standalone=true',
        display: 'standalone',
        lang: 'en',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/mask-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          }
        ]
      }
    })
  ]
}
