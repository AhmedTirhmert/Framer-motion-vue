<template>
  <section class="py-16 bg-white dark:bg-primary-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <motion.div
          v-for="(stat, index) in statistics"
          :key="index"
          class="flex flex-col items-center"
        >
          <Counter
            :value="stat.value"
            class="text-4xl font-bold text-primary-900 dark:text-primary-100"
          />
          <span class="text-primary-600 dark:text-primary-100">{{
            stat.label
          }}</span>
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
