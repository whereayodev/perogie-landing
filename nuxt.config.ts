export default defineNuxtConfig({
  ssr: true,

  // Build options

  build: {
    transpile: ['gsap']
  },

  css: ['~~/assets/styles/main.scss'],

  vite: {
    optimizeDeps: { exclude: ['fsevents'] },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '~~/assets/styles/__variables.scss'; @import '~~/assets/styles/__mixins.scss'; @import '~~/assets/styles/__fonts.scss';`
        }
      }
    }
  },

  // Modules definition

  modules: [
    ['@storyblok/nuxt', { accessToken: '' }],
    // Linters
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    // Performance
    '@nuxtjs/web-vitals',
    '@nuxtjs/fontaine',
    'nuxt-delay-hydration',
    // Images optimisers
    'nuxt-svgo',
    // SEO
    '@nuxtjs/robots',
    // Utilities
    'nuxt-viewport',
    '@vueuse/nuxt'
  ],

  // Modules settings

  delayHydration: {
    mode: 'mount',
    debug: process.env.NODE_ENV === 'development'
  },

  svgo: {
    svgoConfig: {
      plugins: ['prefixIds']
    }
  },

  webVitals: {
    debug: false,
    disabled: true
  },

  // Head attrs

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      meta: [{ name: 'theme-color', content: '#ffffff' }],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
      ]
    }
  }
})
