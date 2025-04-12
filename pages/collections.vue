<template>
  <motion.div class="pt-24 container grid gap-10 mx-auto">
    <!-- Hero Section -->
    <section class="text-center px-4">
      <h1 class="text-4xl lg:text-5xl font-display font-semibold mb-4">
        Explorez Nos Collections Signature
      </h1>
      <p class="text-lg text-neutral-400 max-w-xl mx-auto">
        Mobilier sur mesure conçu pour les espaces de vie raffinés et
        fonctionnels.
      </p>
    </section>

    <!-- Filter Buttons -->
    <div class="flex flex-wrap lg:justify-center gap-3 px-4">
      <button
        v-for="category in categories"
        :key="category"
        @click="activeCategory = category"
        :class="[
          'px-4 py-1.5 rounded-full border border-primary-600 text-xs uppercase tracking-wide transition duration-300 ease-in-out',
          activeCategory === category
            ? ' bg-primary-800  font-semibold'
            : 'text-white hover:bg-primary-700/50 touch-none',
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Collection Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-20 grid-flow-row">
      <AnimatePresence>
        <motion.div
          v-for="(item, index) in filteredCollections"
          :key="item.title + Math.random()"
          class="relative flex rounded-xl overflow-hidden shadow-md group cursor-pointer"
          @click="openModal(item)"
          :initial="{ opacity: 0, scale: 0.9 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{
            delay: index * 0.1,
            duration: 0.5,
            ease: 'easeInOut',
            type: 'tween',
          }"
        >
          <NuxtImg
            :src="item.image"
            alt="photo"
            width="400"
            height="250"
            format="avif"
            loading="lazy"
            class="w-full h-full aspect-video object-cover group-hover:scale-105"
            placeholder="/images/placeholder.webp"
          />
        </motion.div>
      </AnimatePresence>
    </div>

    <!-- Image Modal -->
    <AnimatePresence>
      <motion.div
        v-if="modalItem"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center"
        @click="modalItem = null"
        @keydown.esc="modalItem = null"
        tabindex="0"
        role="dialog"
        aria-modal="true"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{
          duration: 0.3,
          ease: 'easeInOut',
          type: 'tween',
        }"
      >
        <motion.div
          class="px-2"
          :initial="{ opacity: 0, scale: 0.5 }"
          :animate="{ opacity: 1, scale: 1 }"
          :exit="{ opacity: 0, scale: 0 }"
          :transition="{
            delay: 0.3,
            duration: 0.3,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 100,
            bounce: 100,
            mass: 0.5,
          }"
        >
          <div class="relative rounded-lg overflow-hidden bg-primary-900">
            <NuxtImg
              :src="modalItem.image"
              format="avif"
              height="1200"
              placeholder="/images/placeholder.webp"
              class="max-w-full max-h-[90dvh] h-auto w-auto object-cover"
            />
            <div
              class="flex justify-between px-2 py-1 items-center modal-content bg-[url('/images/texture3.png')]"
            >
              <h2 class="font-semibold">{{ modalItem.title }}</h2>
              <button @click="modalItem = null" class="text-white text-2xl">
                <Icon name="mdi:close" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </motion.div>
</template>

<script setup>
  import { motion } from 'motion-v';
  import { collection } from '~/constants/content';
  const categories = computed(() => {
    const uniqueCategories = new Set(collection.map((item) => item.category));
    return ['Tous', ...Array.from(uniqueCategories)];
  });
  const activeCategory = ref('Tous');
  const modalItem = ref(null);

  function openModal(item) {
    modalItem.value = item;
  }

  const filteredCollections = computed(() =>
    activeCategory.value === 'Tous'
      ? collection
      : collection.filter((item) => item.category === activeCategory.value),
  );
</script>

<style lang="scss" scoped>
  .modal-content {
    background-blend-mode: luminosity;
    -moz-background-blend-mode: luminosity;
  }
</style>
