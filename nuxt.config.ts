// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  routeRules: {
    '/about': { prerender: true },
    '/collections': { prerender: true },
    '/': { prerender: true },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    'motion-v/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
  image: {
    provider: 'ipx',
    domains: ['images.unsplash.com'],
    screens: {
      sm: 40,
      md: 80,
      lg: 400,
    },
  },
  css: ['@/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/'],
    },
    compressPublicAssets: true,
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'in-out',
      appear: true,
    },
    head: {
      title: 'Luxury MDF Furniture',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Discover our exclusive collection of luxury MDF furniture. Handcrafted excellence meets modern design.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
});
