<template>
  <section class="bg-neutral-900 text-white py-16">
    <div class="max-w-5xl mx-auto px-4">
      <!-- Header -->
      <motion.div class="text-center mb-12 space-y-4">
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
          >Pourquoi Nous Choisir</motion.h2
        >
        <p class="text-sm md:text-base text-primary-600 dark:text-primary-100">
          Nous sommes spécialisés dans la conception, la fabrication et la pose
          de cuisines, salles de bain, placards et dressings. Actifs à Agadir et
          dans la région SOUSS MASSA, nous répondons à toutes vos demandes
          d'aménagement avec qualité, rapidité et personnalisation.
        </p>
      </motion.div>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-center">
        <ClientOnly>
          <motion.div
            v-for="(item, index) in features"
            :key="item.label"
            :initial="{
              opacity: 0,
              y: isMobile ? 0 : isOdd(index) ? 40 : -40,
              x: !isMobile ? 0 : isOdd(index) ? '100%' : '-100%',
            }"
            :while-in-view="{
              opacity: 1,
              y: 0,
              x: '0%',
            }"
            :transition="{
              delay: 0.2 * index,
              duration: 0.6,
              ease: 'easeInOut',
              type: 'tween',
            }"
            :in-view-options="{ once: true }"
          >
            <Icon
              :name="item.icon"
              class="size-14 lg:size-16 text-primary-200/70"
            />
            <p class="text-lg font-bold text-primary-200/70 mt-1">
              {{ item.label }}
            </p>
            <p class="text-xs text-gray-300">{{ item.title }}</p>
          </motion.div>
        </ClientOnly>
      </div>
      <div class="w-full flex items-center justify-center mt-10">
        <CTA class="">
          <template #content>Obtenez une estimation</template>
        </CTA>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { motion } from 'motion-v';
  import { isOdd } from '#imports';
  import { useMediaQuery } from '@vueuse/core';

  const isMobile = useMediaQuery('(max-width: 768px)');

  const features = [
    {
      icon: 'mdi:ruler-square-compass',
      title: 'Besoin sur mesure',
      label: 'Sur Mesure',
    },
    {
      icon: 'mdi:target-variant',
      title: 'Qualité et Précision',
      label: 'Précision',
    },
    {
      icon: 'mdi:account-cog-outline',
      title: 'Cuisine Personnalisée',
      label: 'Personnalisée',
    },
    {
      icon: 'mdi:rocket-launch-outline',
      title: 'Rapidité et bon goût garanti',
      label: 'Rapidité',
    },
  ];
</script>
