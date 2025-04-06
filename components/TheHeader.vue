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
    class="fixed w-full bg-white/70 dark:bg-primary-800/70 backdrop-blur-lg z-50 h-16"
  >
    <nav
      class="container mx-auto px-4 h-full flex items-center justify-between"
    >
      <NuxtLink
        to="/"
        @click="isMenuOpen = false"
        class="items-center flex overflow-hidden"
      >
        <div class="w-10 h-10 overflow-hidden">
          <motion.div
            :animate="{
              scale: [0.5, 1],
              x: ['100%', 0],
            }"
            :transition="{
              delay: 0.5,
              duration: 1,
              type: 'tween',
              ease: 'easeInOut',
            }"
          >
            <NuxtImg
              src="/images/logo-light.png"
              alt="Logo"
              class=""
              format="webp"
              priority
              preload
            />
          </motion.div>
        </div>
        <div
          class="flex font-display flex-col items-start justify-between h-full ml-1 gap-0 uppercase overflow-hidden"
        >
          <AnimatePresence>
            <motion.h2
              :animate="{
                opacity: [0, 1],
                x: ['-100%', 0],
                filter: ['blur(5px)', 'blur(0px)'],
              }"
              :transition="{
                delay: 0.5,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
              }"
              class="leading-none font-semibold tracking-wider text-lg"
            >
              Elite
            </motion.h2>
            <motion.h2
              :animate="{
                opacity: [0, 1],
                x: ['-100%', 0],
                filter: ['blur(5px)', 'blur(0px)'],
              }"
              :transition="{
                delay: 0.5,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
              }"
              class="leading-none font-semibold tracking-wider text-lg"
              >MDF</motion.h2
            >
          </AnimatePresence>
        </div>
      </NuxtLink>

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
    <AnimatePresence>
      <motion.div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full h-[calc(100dvh-4rem)] left-0 right-0 translate-x-full bg-white dark:bg-primary-900 border-t border-primary-200 dark:border-primary-800"
        layout
        :initial="{ opacity: 0, filter: 'blur(10px)' }"
        :animate="{ opacity: 1, filter: 'blur(0px)', translateX: 0 }"
        :exit="{
          opacity: 0,
          filter: 'blur(10px)',
          translateX: '100%',
        }"
        :transition="{
          duration: 0.4,
          type: 'tween',
          ease: 'easeInOut',
          exit: { duration: 0.01 },
        }"
      >
        <div class="flex flex-col h-full w-full px-4 py-4 justify-between">
          <div class="">
            <motion.span
              v-for="(item, index) in menuItems"
              :key="item.path"
              :initial="{ opacity: 0, x: '-100%' }"
              :animate="{ opacity: 1, x: 0 }"
              :exit="{ opacity: 0, x: '-100%' }"
              :transition="{
                duration: 0.2,
                delay: index ? (index + 1) * 0.2 : 0.3,
                type: 'spring',
                stiffness: 150,
                damping: 20,
                mass: 0.8,
                ease: 'easeInOut',
              }"
              class="block font-display text-3xl text-center py-2 text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white transition-colors"
            >
              <NuxtLink :to="item.path" class="" @click="isMenuOpen = false">
                {{ item.label }}
              </NuxtLink>
            </motion.span>
          </div>
          <div class="flex items-center flex-col gap-3 justify-between">
            <motion.h2
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :exit="{ opacity: 0, y: 20 }"
              :transition="{
                duration: 0.3,
                delay: menuItems.length * 0.2 + 0.2,
                type: 'spring',
                stiffness: 150,
                damping: 20,
                mass: 0.8,
                ease: 'easeInOut',
              }"
              class="text-primary-700 font-display text-xl dark:text-primary-200"
              >Suivez-nous
            </motion.h2>

            <div class="flex justify-end space-x-4">
              <motion.a
                v-for="(social, index) in socials"
                :key="social.name"
                :href="social.link"
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :exit="{ opacity: 0, y: 20 }"
                :transition="{
                  duration: 0.3,
                  delay: menuItems.length * 0.2 + 0.3 + index * 0.2,
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  mass: 0.8,
                  ease: 'easeInOut',
                }"
                class="text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-white"
              >
                <Icon :name="social.icon" size="2em" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </motion.header>
</template>

<script setup>
  import { motion } from 'motion-v';
  const colorMode = useColorMode();
  const isMenuOpen = ref(false);

  const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  };

  watch(isMenuOpen, (open) => {
    if (process.client) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  });
  const socials = [
    {
      name: 'Facebook',
      link: 'https://facebook.com',
      icon: 'mdi:facebook',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com',
      icon: 'mdi:whatsapp',
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com',
      icon: 'mdi:instagram',
    },
  ];
  const menuItems = [
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];
</script>
