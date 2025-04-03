<template>
  <motion.button
    :transition="{
      type: 'speing',
      duration: 0.4,
      ease: 'easeInOut',
    }"
    class="p-[2px] rounded-full overflow-hidden relative bg-transparent cta mt-7"
  >
    <span
      class="px-10 py-3 font-display text-neutral-100 font-light h-full w-full block text-xl rounded-full relative bg-primary-700 text-primary-50"
    >
      <slot name="content" />
    </span>
  </motion.button>
</template>

<script setup>
  import { motion } from 'motion-v';
</script>

<style scoped>
  .cta::before {
    background: linear-gradient(
      theme(backgroundColor.primary.500),
      theme(colors.secondary)
    );

    clip-path: polygon(0 1%, 100% 38%, 100% 66%, 0 100%);

    @apply absolute left-[-0%] top-[5px] h-[30px] w-[50%] rounded-full animate-border-spin origin-bottom-right content-[''];
  }
</style>
