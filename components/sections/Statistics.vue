<template>
  <section class="py-16 bg-white dark:bg-primary-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <motion.div
          v-for="(stat, index) in statistics"
          :key="index"
          class="flex flex-col items-center"
          :initial="{ opacity: 0, x: '100%', filter: 'blur(5px)' }"
          :while-in-view="{
            opacity: 1,
            x: '0%',
            filter: 'blur(0px)',
            transition: {
              duration: 0.6,
              type: 'spring',
              stiffness: 50,
              delay: 0.2 * index,
            },
          }"
          :in-view-options="{ once: true }"
        >
          <Counter
            :value="stat.value"
            class="text-4xl font-bold text-primary-900 dark:text-primary-100"
          />
          <ClientOnly>
            <span class="text-primary-600 dark:text-primary-100">{{
              stat.label
            }}</span>
          </ClientOnly>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
  defineProps({
    statistics: {
      type: Array,
      required: true,
    },
  });
</script>
