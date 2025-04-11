<script setup>
  useLenis();
  onMounted(() => {
    const preloader = document.getElementById('preloader');

    if (preloader) {
      preloader.classList.add(
        'opacity-0',
        'transition-opacity',
        'duration-700',
      );

      setTimeout(() => preloader.remove(), 500);
      setTimeout(() => (document.body.style.overflow = 'auto'), 550);
    }
  });
  useHead({
    title: 'ELITE MDF - Mobilier Haut de Gamme sur Mesure à Agadir',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      {
        name: 'description',
        content:
          'Découvrez ELITE MDF, fabricant de mobilier sur mesure à Agadir. Cuisines, dressings, bureaux... conçus avec passion et expertise.',
      },
      {
        name: 'keywords',
        content:
          'mobilier, sur mesure, Agadir, luxe, design intérieur, cuisines, dressings, ELITE MDF',
      },
      { name: 'author', content: 'ELITE MDF' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'ELITE MDF - Mobilier Haut de Gamme' },
      {
        property: 'og:description',
        content: 'Mobilier de luxe sur mesure à Agadir.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://framer-nuxt.vercel.app/' },
      {
        property: 'og:image',
        content: 'https://framer-nuxt.vercel.app/social-card.jpg',
      },

      // 🟦 Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'ELITE MDF - Mobilier Haut de Gamme' },
      {
        name: 'twitter:description',
        content: 'Cuisines, dressings, bureaux de luxe fabriqués à Agadir.',
      },
      {
        name: 'twitter:image',
        content: 'https://framer-nuxt.vercel.app/social-card.jpg',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://framer-nuxt.vercel.app/' }],
  });
</script>
<template>
  <div
    id="preloader"
    class="fixed inset-0 z-[9999] bg-brand-black bg-primary-900 text-white flex items-center justify-center"
  >
    <NuxtImg
      src="/images/logo-light.png"
      format="webp"
      width="80"
      height="80"
      alt=""
      class="size-24 animate-pulse-logo"
    />
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
  @keyframes pulse-logo {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .animate-pulse-logo {
    animation: pulse-logo 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  /* Optional: hide scrollbar while loading */
  body {
    overflow: hidden;
  }
</style>
