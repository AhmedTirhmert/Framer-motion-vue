<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="font-display text-4xl text-center mb-8">Notre Localisation</h2>
      <div
        ref="target"
        class="relative min-h-[300px] bg-primary-900 ring-[1px] flex items-center justify-center ring-primary-300 rounded-lg overflow-hidden"
      >
        <AnimatePresence>
          <iframe
            v-if="isVisible"
            src="https://www.google.com/maps/embed"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="absolute inset-0 w-full h-full rounded-lg"
            @load="mapLoaded = true"
          ></iframe>
          <motion.div
            v-if="!mapLoaded"
            class="text-center text-primary-300 flex items-center justify-center"
          >
            <p>Chargement de la carte...</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useIntersectionObserver } from '@vueuse/core';
  import { AnimatePresence, motion } from 'motion-v';

  const isVisible = shallowRef(false);
  const mapLoaded = shallowRef(false);
  const target = useTemplateRef('target');

  useIntersectionObserver(target, ([entry], observerElement) => {
    if (entry?.isIntersecting) {
      isVisible.value = true;
    }
  });
</script>
