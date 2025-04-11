<template>
  <main class="bg-white dark:bg-primary-900 transition-colors duration-300">
    <!-- Floating CTA -->
    <AnimatePresence>
      <motion.div
        class="fixed bottom-4 right-2 z-10 flex flex-col gap-2"
        :variants="{
          shrinked: { scale: 0.7 },
          expanded: { scale: 1 },
        }"
        :transition="{
          duration: 0.3,
          ease: 'easeInOut',
          type: 'tween',
        }"
      >
        <motion.div
          v-for="(link, index) in socialLinks"
          :key="index"
          style="perspective: 100px; transform-style: preserve-3d"
          class="bg-primary-50 origin-bottom-right text-primary-800 px-1.5 py-1 md:p-2 rounded-full rounded-br-none shadow-lg ring-primary-100 ring-[0.2px] ring-inset"
          :initial="{ opacity: 0, scale: 0.5, x: '100%' }"
          :variants="{
            shrinked: {
              opacity: 1,
              scale: 0.7,
              x: '0%',
              y: (socialLinks.length - 1 - index) * 40,
              transition: {
                duration: 0.2,
                ease: 'easeInOut',
              },
            },
            expanded: { opacity: 1, scale: 1, x: '0%', y: 0 },
          }"
          :animate="isScrolling ? 'shrinked' : 'expanded'"
          :while-hover="{
            scale: 1.2,
          }"
          :transition="{
            duration: 0.4,
            delay:
              (socialLinks.length - index) *
              (index == socialLinks.length ? 0.8 : 0.4),
            ease: 'easeInOut',
            type: 'tween',
          }"
        >
          <NuxtLink
            :to="link.url"
            target="_blank"
            external
            rel="noopener noreferrer"
            class="h-fit w-fit"
          >
            <Icon :name="link.icon" class="size-[20px] mb-0.5 md:size-[25px]" />
          </NuxtLink>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    <TheHeader />
    <section class="min-h-screen">
      <slot />
    </section>
    <TheFooter />
  </main>
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
      url: 'https://www.facebook.com/elitemdf',
    },
    {
      icon: 'mdi:instagram',
      url: 'https://www.instagram.com/elite_mdf1',
    },
    {
      icon: 'mdi:whatsapp',
      url: "https://wa.me/212661519950?text=Bonjour%20ELITE%20MDF%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20vos%20services%20de%20mobilier%20sur%20mesure.%20Pouvez-vous%20me%20fournir%20plus%20d'informations%20s'il%20vous%20pla%C3%AEt%20%3F",
    },
    {
      icon: 'mdi:phone',
      url: 'tel:+212661519950',
    },
  ];
</script>
