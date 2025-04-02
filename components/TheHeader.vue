<template>
  <motion.header
    layout
    :initial="{
      y: '-150%',
      filter: 'blur(10px)',
    }"
    :animate="{
      y: 0,
      filter: 'blur(0px)',
    }"
    :transition="{
      ease: 'easeInOut',
      type: 'tween',
      duration: 0.4,
      delay: 0.3,
    }"
    class="fixed w-full bg-white/70 dark:bg-primary-800/70 backdrop-blur-lg z-50"
  >
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="font-display text-2xl"> MDF Luxury </NuxtLink>

      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="text-primary-700 dark:text-primary-100 hover:text-primary-900 dark:hover:text-white transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center space-x-4 md:hidden">
        <!-- <button @click="toggleColorMode" class="p-2">
          <Icon
            :name="colorMode.value === 'dark' ? 'ph:sun' : 'ph:moon'"
            class="w-5 h-5"
          />
        </button> -->
        <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
          <Icon name="ph:list" class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-primary-900 border-t border-primary-200 dark:border-primary-800"
    >
      <div class="container mx-auto px-4 py-4">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="block py-2 text-primary-700 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </motion.header>
</template>

<script setup>
  import { motion } from 'motion-v';
  const colorMode = useColorMode();
  const isMenuOpen = ref(false);

  const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  };

  const menuItems = [
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];
</script>
