<template>
  <section class="py-20 bg-primary-50 dark:bg-primary-800/50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto mb-12 text-center">
        <h2 class="font-display text-4xl mb-6">Notre Expertise</h2>
      </div>
      <motion.div class="flex flex-col md:flex-row gap-8 mt-12">
        <motion.div
          v-for="(item, index) in expertiseItems"
          :key="`expertise_${index}`"
          class="p-6 bg-white h-full dark:bg-primary-900 grid items-center gap-2 rounded-lg shadow-sm ring-1 ease-in-out duration-300 ring-primary-300/30"
          initial="hidden"
          while-in-view="visible"
          :custom="index"
          :while-in-view-options="{ once: false }"
          :viewport="{ amount: 0.3 }"
        >
          <div class="flex text-start gap-4">
            <Icon
              :name="item?.icon"
              size="24"
              class="inline-block text-primary-200/70"
            />
            <h3 class="font-display text-xl font-semibold">
              {{ item?.title }}
            </h3>
          </div>
          <p class="text-primary-600 text-sm dark:text-primary-100">
            {{ item?.description }}
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';

  defineProps({
    expertiseItems: {
      type: Array,
      required: true,
    },
  });
</script>
