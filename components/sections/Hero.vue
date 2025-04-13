<template>
  <section id="hero" class="relative h-[100svh]">
    <div class="absolute inset-0 h-full max-w-screen overflow-hidden">
      <Carousel :slides="heroImages" />
    </div>

    <div class="relative container mx-auto h-full flex items-center">
      <motion.div
        class="xl:max-w-3xl max-w-2xl max-sm:px-4 text text-center xl:text-start max-xl:mx-auto"
        initial="hidden"
        animate="visible"
        :variants="HeroItems"
      >
        <motion.div :variants="heroItem">
          <h1
            class="font-display font-bold text-3xl md:text-5xl xl:text-6xl mb-6 text-white"
          >
            Transformez vos espaces, créez vos rêves.
          </h1>
        </motion.div>
        <motion.div :variants="heroItem">
          <p class="text-sm lg:text-xl mb-8 text-white">
            Découvrez des cuisines sur mesure, des salles de bain élégantes et
            des dressings personnalisés conçus pour sublimer votre intérieur.
            Chez ELITEMDF, nous donnons vie à vos idées avec précision et
            savoir-faire.
          </p>
        </motion.div>
        <motion.div
          class="flex flex-col-reverse md:flex-row items-center gap-4 justify-center xl:justify-start"
          :variants="heroItem"
        >
          <button
            @click="scrollToSection('realizations')"
            class="px-10 py-3 font-sans text-base font-semibold capitalize block max-lg:w-2/3 items-center h-full bg-primary-50 text-primary-900 rounded-full hover:bg-primary-100 transition-colors"
          >
            nos réalisations
          </button>
          <CTA
            bg-class="font-sans text-base font-semibold"
            class="!mt-0 block max-lg:w-2/3"
          >
            Demandez Devis
            <div
              class="absolute inset-0 bg-primary-900/50 rounded-full -z-10"
            />
          </CTA>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
  const { scrollTo } = useLenis();
  const scrollToSection = (section: string) => {
    const el = document.getElementById(section) ?? section;
    scrollTo(el, {
      duration: 2,
      easing: (t: number) => t,
    });
  };
  defineProps({
    heroImages: {
      type: Array,
      required: true,
    },
  });
  const HeroItems: MotionProps['variants'] = {
    visible: {
      transition: {
        type: 'tween',
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    hidden: {},
  };

  const heroItem: MotionProps['variants'] = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(1px)',
      visibility: 'hidden',
    },
    visible: (index: number = 0) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      visibility: 'visible',
      transition: {
        duration: 0.2 * index + 0.3,
        delay: 0.1 * index,
        type: 'spring',
        bounce: 0.4,
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
      },
    }),
  };
</script>
