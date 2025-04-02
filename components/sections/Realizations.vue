<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="font-display text-4xl mb-6">Nos Réalisations</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          v-for="(image, index) in realizationImages"
          :key="`real_${index}`"
          class="relative h-64 group overflow-hidden rounded-lg hover:cursor-pointer hover:ring-1 transition-all ease-in-out duration-300 ring-primary-300"
        >
          <img
            :src="image"
            :alt="`Realization ${index + 1}`"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
          ></div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';

  defineProps({
    realizationImages: {
      type: Array,
      required: true,
    },
  });
</script>
