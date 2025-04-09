<template>
  <section id="realizations" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <motion.h2
          :variants="{
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            },
            hidden: {
              opacity: 0,
              y: 20,
              filter: 'blur(5px)',
            },
          }"
          :transition="{
            duration: 0.6,
            type: 'tween',
            ease: 'easeInOut',
          }"
          while-in-view="visible"
          initial="hidden"
          :in-view-options="{ once: true }"
          class="font-display text-3xl lg:text-4xl mb-8"
          >Nos Réalisations</motion.h2
        >
        <motion.p
          :variants="{
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            },
            hidden: {
              opacity: 0,
              y: 20,
              filter: 'blur(5px)',
            },
          }"
          :transition="{
            duration: 0.6,
            type: 'tween',
            ease: 'easeInOut',
          }"
          while-in-view="visible"
          initial="hidden"
          :in-view-options="{ once: true }"
          class="text-sm md:text-base text-primary-600 dark:text-primary-100 mx-auto max-w-5xl"
          >Nos dernières créations soigneusement réalisées.<br />Chaque projet
          reflète notre passion pour le design intemporel et l’artisanat de
          précision — où chaque détail compte. Des cuisines élégantes aux
          espaces nuit apaisants, nous donnons vie au raffinement.
        </motion.p>
      </div>
      <ClientOnly>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            v-for="(item, index) in visibleCollection"
            :key="`real_${index}`"
            :variants="{
              visible: {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              },
              hidden: {
                opacity: 0,
                filter: 'blur(5px)',
              },
            }"
            :transition="{
              duration: 0.6,
              delay: 0.2 * index,
              type: 'tween',
              stiffness: 100,
              damping: 20,
              ease: 'linear',
            }"
            while-in-view="visible"
            initial="hidden"
            :in-view-options="{ once: true }"
            class="relative h-64 group overflow-hidden rounded-lg hover:cursor-pointer hover:ring-1 transition-all ease-in-out duration-300 ring-primary-300"
          >
            <NuxtImg
              :src="item.image"
              format="avif"
              width="500"
              height="300"
              :alt="`Realization ${index + 1}`"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
            ></div>
          </motion.div>
        </div>
      </ClientOnly>
      <div class="flex justify-center mt-10">
        <NuxtLink
          to="/collections"
          class="px-5 py-3 rounded-full border-2 border-primary-700 uppercase tracking-wide transition duration-300 ease-in-out text-white hover:bg-primary-700/50 touch-none font-semibold"
        >
          Voir toutes nos réalisations
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
  import { collection } from '~/constants/content';

  const props = defineProps({
    show: {
      type: Number,
      default: 6,
    },
  });

  const show = ref(props.show);
  const visibleCollection = computed(() => collection.slice(0, show.value));
</script>
