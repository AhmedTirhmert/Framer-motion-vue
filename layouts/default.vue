<template>
  <div
    class="min-h-screen bg-white dark:bg-primary-900 transition-colors duration-300"
  >
    <!-- Floating CTA -->
    <AnimatePresence>
      <motion.div
        v-if="!isScrolling"
        class="fixed bottom-4 right-4 z-10 flex flex-col gap-2"
        :initial="{ opacity: 0, scale: 0.5, x: '150%' }"
        :animate="{ opacity: 1, scale: 1, x: '0%' }"
        :exit="{ opacity: 0, scale: 0.5, x: '150%' }"
        :transition="{
          duration: 0.4,
          delay: 0.3,
          ease: 'easeInOut',
          type: 'tween',
        }"
      >
        <motion.div
          v-for="(link, index) in socialLinks"
          :key="index"
          style="perspective: 100px; transform-style: preserve-3d"
          class="bg-primary-50 text-primary-800 p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out ring-primary-100 ring-[0.2px] ring-inset"
          :initial="{ opacity: 0, scale: 0.5, x: '150%' }"
          :animate="{ opacity: 1, scale: 1, x: '0%' }"
          :exit="{ opacity: 0, scale: 0.5, x: '150%' }"
          :transition="{
            duration: 0.4,
            delay:
              (socialLinks.length - index) *
              (index == socialLinks.length ? 0.8 : 0.4),
            ease: 'easeInOut',
            type: 'tween',
          }"
        >
          <NuxtLink :to="link.url" target="_blank" rel="noopener noreferrer">
            <Icon :name="link.icon" size="25" />
          </NuxtLink>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';

  const isScrolling = ref(false);

  const handleScroll = () => {
    isScrolling.value = true;
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      isScrolling.value = false;
    }, 100);
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const socialLinks = [
    {
      icon: 'mdi:facebook',
      url: 'https://facebook.com',
    },
    {
      icon: 'mdi:instagram',
      url: 'https://instagram.com',
    },
    {
      icon: 'mdi:whatsapp',
      url: 'https://wa.me//',
    },
    {
      icon: 'mdi:phone',
      url: 'tel:+1234567890',
    },
  ];
</script>
