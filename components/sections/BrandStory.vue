<template>
  <section class="py-20 bg-primary-50 dark:bg-primary-800/50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
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
          :while-in-view-options="{ once: true }"
          class="font-display text-4xl mb-8"
        >
          L'excellence au service de vos intérieurs
        </motion.h2>
        <div class="">
          <p
            ref="paragraphRef"
            class="text-lg relative text-primary-600 dark:text-primary-100 text-center mb-6 leading-relaxed"
          >
            <span
              v-for="(word, index) in words"
              :key="index"
              class="inline-block relative overflow-hidden"
              style="margin-right: 5px"
            >
              <motion.span class="inline-block relative">
                {{ word }}
                <motion.div
                  v-if="isInView"
                  :variants="wordVariants"
                  :transition="{
                    duration: 0.8,
                    type: 'tween',
                    ease: 'easeInOut',
                  }"
                  while-in-view="visible"
                  initial="hidden"
                  :while-in-view-options="{ once: true }"
                  class="absolute bottom-0 left-0 w-full h-full bg-primary-50 dark:bg-primary-800"
                ></motion.div>
              </motion.span>
            </span>
          </p>
        </div>
      </div>

      <motion.div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <motion.div
          v-for="item in [
            {
              icon: 'mdi:tools',
              title: 'Précision et Perfection',
              description: 'Nous visons l\'excellence dans chaque détail.',
            },
            {
              icon: 'mdi:design',
              title: 'Design Personnalisé',
              description: 'Des créations uniques adaptées à votre style.',
            },
            {
              icon: 'mdi:timer-outline',
              title: 'Exécution Rapide',
              description: 'Des délais optimisés sans compromettre la qualité.',
            },
          ]"
          :key="item.title"
          class="p-6 bg-white dark:bg-primary-900 rounded-lg shadow-sm text-center ring-1 ease-in-out duration-300 ring-primary-300/30"
        >
          <Icon
            :name="item.icon"
            size="50"
            class="inline-block text-primary-200/70"
          />
          <h3 class="text-xl font-semibold">
            <span class="font-display text-xl font-semibold">{{
              item.title
            }}</span>
          </h3>
          <p class="text-primary-600 dark:text-primary-100">
            {{ item.description }}
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion, useInView } from 'motion-v';

  const paragraph = ref(
    'Chez ELITEMDF, nous concevons et fabriquons des cuisines, salles de bain et dressings sur mesure pour répondre à vos exigences en matière de qualité et d’esthétique. Chaque projet est réalisé avec un souci du détail et une expertise inégalée pour refléter votre style de vie."',
  );
  const paragraphRef = ref();
  const words = computed(() => paragraph.value.split(' '));
  const isInView = useInView(paragraphRef, { once: true });

  const wordVariants = {
    visible: {
      opacity: 0,
      height: '0px',
    },
    hidden: {
      opacity: 1,
      height: '100%',
    },
  };
</script>
