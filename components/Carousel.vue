<template>
  <motion.div
    class="relative w-screen h-[100svh] overflow-hidden will-change-transform"
    :initial="{ opacity: 0, scale: 1.05 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{ ease: 'easeInOut', duration: 0.4, type: 'tween' }"
  >
    <motion.div
      class="flex w-full h-full"
      :animate="{ x: `-${currentIndex * 100}vw` }"
      :transition="{ duration: 1, ease: 'easeInOut', type: 'tween' }"
    >
      <div
        v-for="(slide, index) in props.slides"
        :key="index"
        class="w-screen relative h-screen flex-shrink-0"
      >
        <div class="absolute inset-0 bg-black/60" />
        <img
          :src="slide"
          class="w-full h-full object-cover"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :alt="`Slide ${index + 1}`"
        />
      </div>
    </motion.div>
  </motion.div>
</template>

<script lang="ts" setup>
  import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
  import { motion } from 'motion-v';

  interface Props {
    slides: string[];
    autoplay?: boolean;
    delay?: number;
  }

  const props = withDefaults(defineProps<Props>(), {
    autoplay: true,
    delay: 4000,
  });

  const currentIndex = ref(0);
  const step = ref(1);
  let autoplayInterval: NodeJS.Timeout | null = null;

  const nextSlide = () => {
    if (currentIndex.value === props.slides.length - 1) step.value = -1;
    if (currentIndex.value === 0) step.value = 1;
    currentIndex.value = currentIndex.value + step.value;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (props.autoplay) {
      autoplayInterval = setInterval(nextSlide, props.delay);
    }
  };

  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  };

  watch(
    () => props.autoplay,
    (newVal) => {
      newVal ? startAutoplay() : stopAutoplay();
    },
  );

  onMounted(() => {
    startAutoplay();
  });

  onBeforeUnmount(() => {
    stopAutoplay();
  });
</script>
