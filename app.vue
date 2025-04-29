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
    title: 'ACME MDF - Mobilier Haut de Gamme sur Mesure à {Lacation}',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      {
        name: 'description',
        content:
          'Découvrez ACME MDF, fabricant de mobilier sur mesure à {Lacation}. Cuisines, dressings, bureaux... conçus avec passion et expertise.',
      },
      {
        name: 'keywords',
        content:
          'mobilier, sur mesure, {Lacation}, luxe, design intérieur, cuisines, dressings, ACME MDF',
      },
      { name: 'author', content: 'ACME MDF' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'ACME MDF - Mobilier Haut de Gamme' },
      {
        property: 'og:description',
        content: 'Mobilier de luxe sur mesure à {Lacation}.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://framer-nuxt.vercel.app/' },
      {
        property: 'og:image',
        content: 'https://framer-nuxt.vercel.app/social-card.jpg',
      },

      // 🟦 Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'ACME MDF - Mobilier Haut de Gamme' },
      {
        name: 'twitter:description',
        content: 'Cuisines, dressings, bureaux de luxe fabriqués à {Lacation}.',
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
    class="fixed flex flex-col gap-4 inset-0 z-[9999] bg-brand-black bg-primary-900 text-primary-200 items-center justify-center"
  >
    <NuxtImg
      src="/images/logo-light.webp"
      format="webp"
      width="80"
      height="80"
      alt=""
      class="size-24 reveal"
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

  @keyframes reveal {
    0% {
      -webkit-clip-path: polygon(0 0, 0 0, 0 0);
      clip-path: polygon(0 0, 0 0, 0 0);
      transition: all 0.8s cubic-bezier(0.55, 0.06, 0.33, 1.85);
      transform: skew(30deg);
    }
    100% {
      -webkit-clip-path: polygon(0 0, 200% 0, 0 200%);
      clip-path: polygon(0 0, 200% 0, 0 200%);
      transform: skew(0);
    }
  }

  .reveal {
    animation: reveal 0.6s cubic-bezier(0.4, 0, 0.6, 1) forwards;
  }

  .animate-pulse-logo {
    animation: pulse-logo 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  /* Optional: hide scrollbar while loading */
  body {
    overflow: hidden;
  }
</style>
