<template>
  <motion.button class="rounded-full relative bg-transparent cta mt-7">
    <span
      :class="
        twMerge(
          'px-10 py-3 font-display text-neutral-100 font-light h-full w-full block text-xl rounded-full relative text-primary-100 bg-primary-transparent',
          bgClass,
        )
      "
    >
      <slot />
    </span>
    <motion.div
      class="absolute inset-0 rounded-full border-2 border-primary-200"
      :animate="{
        boxShadow: ['0 0 5px #F5D0A4', '0 0 10px #F5D0A4', '0 0 5px #F5D0A4'],
      }"
      :transition="{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }"
    />
  </motion.button>
</template>

<script setup>
  import { motion } from 'motion-v';
  import { twMerge } from 'tailwind-merge';
  defineProps({
    bgClass: {
      type: String,
      required: false,
    },
  });
</script>

<style scoped>
  /* .cta::before {
    background: linear-gradient(
      theme(backgroundColor.primary.500),
      theme(colors.secondary)
    );

    clip-path: polygon(0 1%, 100% 38%, 100% 66%, 0 100%);

    @apply absolute left-[-0%] top-[5px] h-[30px] w-[50%] rounded-full animate-border-spin origin-bottom-right content-[''];
  } */
</style>
