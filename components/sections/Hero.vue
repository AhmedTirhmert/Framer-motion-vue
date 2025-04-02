<template>
  <section class="relative h-screen">
    <div class="absolute inset-0 h-screen max-w-screen overflow-hidden">
      <Carousel :slides="heroImages" />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <div class="relative container mx-auto h-full flex items-center">
      <motion.div
        class="xl:max-w-3xl max-w-2xl max-sm:px-8 text text-center xl:text-start max-xl:mx-auto"
        initial="hidden"
        animate="visible"
        :variants="HeroItems"
      >
        <motion.div :variants="heroItem">
          <h1
            class="font-display font-bold text-4xl md:text-6xl mb-6 text-white"
          >
            Transformez vos espaces, créez vos rêves.
          </h1>
        </motion.div>
        <motion.div :variants="heroItem">
          <p class="text-base lg:text-xl mb-8 text-white">
            Découvrez des cuisines sur mesure, des salles de bain élégantes et
            des dressings personnalisés conçus pour sublimer votre intérieur.
            Chez ELITEMDF, nous donnons vie à vos idées avec précision et
            savoir-faire.
          </p>
        </motion.div>
        <motion.div :variants="heroItem">
          <NuxtLink
            to="/products"
            class="inline-flex items-center px-6 py-3 text-sm bg-white text-primary-900 font-semibold rounded-full hover:bg-primary-100 transition-colors group"
          >
            Explorez Nos Collections
            <Icon
              name="material-symbols:arrow-forward"
              size="20"
              class="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </NuxtLink>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
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
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
        duration: 0.1 * index + 0.3,
        delay: 0.1 * index,
        type: 'tween',
        ease: 'easeInOut',
      },
    }),
  };
</script>
