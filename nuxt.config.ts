// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    'motion-v/nuxt',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
  content: {
    highlight: {
      theme: 'github-light',
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
  googleFonts: {
    families: {
      'Playfair+Display': [400, 500, 600, 700],
      'Montserrat': [300, 400, 500, 600],
    },
    display: 'swap',
    preload: true,
    useStylesheet: true,
  },
  css: ['@/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/'],
    },
    compressPublicAssets: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
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
