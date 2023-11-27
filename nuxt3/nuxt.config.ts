// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  ssr: false,
  css: ['@/app.scss'],

  app: {
    baseURL: '/calculadora-bar/',
    buildAssetsDir: 'nuxt-assets',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - Jeferson Silva',
      htmlAttrs: {
        lang: 'pt-BR',
      },
    },
  },

  devtools: {
    enabled: false,
    timeline: { enabled: true },
  },

  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        appId: process.env.FIREBASE_APP_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      },
    },
  },

  build: { transpile: ['vuetify'] },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },

    // https://nuxt.com/modules/security
    ["nuxt-security", {}],

    // https://nuxt.com/modules/pinia
    ["@pinia/nuxt", {}],

    // https://nuxt.com/modules/vite-pwa-nuxt
    ["@vite-pwa/nuxt", {
      registerType: 'autoUpdate',
      manifest: {
        name: 'Nuxt Vite PWA',
        short_name: 'NuxtVitePWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/favicon.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      },
      client: {
        installPrompt: true,
        periodicSyncForUpdates: 20,
      },
      devOptions: {
        enabled: true,
        suppressWarnings: true,
        navigateFallbackAllowlist: [/^\/$/],
        type: 'module',
      },
    }],
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});