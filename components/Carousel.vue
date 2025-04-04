<template>
  <motion.div
    class="relative min-w-screen h-[100svh] overflow-hidden"
    :initial="{ filter: 'blur(15px)', scale: 1.5 }"
    :animate="{ filter: 'blur(0px)', scale: 1 }"
    :transition="{
      ease: 'easeInOut',
      duration: 0.6,
      type: 'tween',
    }"
  >
    <motion.div
      class="flex w-full h-full"
      :initial="{ x: 0 }"
      :animate="{ x: `-${currentIndex * 100}vw` }"
      :transition="{ duration: 1, ease: 'easeInOut', type: 'tween' }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-screen h-screen flex-shrink-0"
      >
        <div
          class="w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide})` }"
        />
      </div>
    </motion.div>
  </motion.div>
</template>

<script lang="ts" setup>
  import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
  import { motion } from 'motion-v';

  interface Props {
    slides: string[] | any[];
    autoplay?: boolean;
    delay?: number;
  }

  const props = withDefaults(defineProps<Props>(), {
    autoplay: true,
    delay: 6000,
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
    if (props.autoplay && !autoplayInterval) {
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
    (newValue) => {
      if (newValue) {
        startAutoplay();
      } else {
        stopAutoplay();
      }
    },
  );

  onMounted(() => {
    if (props.autoplay) {
      startAutoplay();
    }
  });

  onBeforeUnmount(() => {
    stopAutoplay();
  });
</script>
