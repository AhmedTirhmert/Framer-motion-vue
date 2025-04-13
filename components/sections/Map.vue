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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.3496891353425!2d-9.49574884241951!3d30.379890495590715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c961e6335e61%3A0xb6058eb6f926c6a6!2sELITE%20MDF!5e0!3m2!1sen!2sma!4v1715171969808!5m2!1sen!2sma"
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
