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
            :aria-label="link.name"
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
  import { socialLinks } from '~/constants/content';

  const { isScrolling } = useLenis();
</script>
