<template>
  <div
    class="relative w-screen h-[100svh] overflow-hidden will-change-transform"
  >
    <motion.div
      class="flex w-full h-full"
      :animate="{ x: `-${currentIndex * 100}vw` }"
      :transition="{ duration: 2.5, ease: 'easeInOut', type: 'tween' }"
    >
      <div
        v-for="(slide, index) in props.slides"
        :key="index"
        class="w-screen relative h-screen flex-shrink-0"
      >
        <div class="absolute inset-0 bg-black/60" />
        <NuxtImg
          :src="slide"
          format="avif"
          sizes="sm:100vw md:100vw lg:100vw"
          class="w-full h-full object-cover"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :alt="`Slide ${index + 1}`"
        />
      </div>
    </motion.div>
  </div>
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
