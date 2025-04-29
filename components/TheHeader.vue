<template>
  <motion.header
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
      duration: 0.3,
    }"
    class="fixed w-full z-50 h-16 transition-all duration-400 ease-in-out"
    :class="[
      isMenuOpen
        ? 'bg-primary-900'
        : isTop
        ? 'bg-transparent '
        : 'bg-primary-800/70 backdrop-blur-lg',
    ]"
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
              delay: 0.4,
              duration: 1,
              type: 'tween',
              ease: [0.22, 1, 0.36, 1],
            }"
          >
            <NuxtImg
              src="/images/logo-light.webp"
              alt="Logo"
              class=""
              width="40"
              height="40"
              format="webp"
              priority
              preload
            />
          </motion.div>
        </div>
        <div
          class="flex font-display flex-col items-start justify-between h-full ml-1 gap-0 uppercase overflow-hidden"
        >
          <motion.h2
            :animate="{
              opacity: [0, 1],
              x: ['-100%', 0],
              filter: ['blur(5px)', 'blur(0px)'],
            }"
            :transition="{
              delay: 0.3,
              duration: 1,
              type: 'tween',
              ease: [0.22, 1, 0.36, 1],
            }"
            class="leading-none font-semibold tracking-wider text-lg"
          >
            Acme
          </motion.h2>
          <motion.h2
            :animate="{
              opacity: [0, 1],
              x: ['-100%', 0],
              filter: ['blur(5px)', 'blur(0px)'],
            }"
            :transition="{
              delay: 0.3,
              duration: 1,
              type: 'tween',
              ease: [0.22, 1, 0.36, 1],
            }"
            class="leading-none font-semibold tracking-wider text-lg"
            >MDF</motion.h2
          >
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
        <button
          aria-label="Toggle menu"
          class="md:hidden"
          @click="isMenuOpen = !isMenuOpen"
        >
          <motion.svg
            :animate="isMenuOpen ? 'open' : 'closed'"
            width="30"
            height="25"
            viewBox="0 0 30 23"
            class="outline-none"
          >
            <motion.path
              class="stroke-primary-100 outline-none"
              stroke-width="3"
              stroke-linecap="round"
              :variants="{
                closed: { d: 'M 2 2.5 L 25 2.5' },
                open: { d: 'M 3 16.5 L 20 2.5' },
              }"
            />
            <motion.path
              class="stroke-primary-100 outline-none"
              stroke-width="3"
              stroke-linecap="round"
              d="M 2 9.423 L 25 9.423"
              :variants="{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }"
              :transition="{ duration: 0.1 }"
            />
            <motion.path
              class="stroke-primary-100 outline-none"
              stroke-width="3"
              stroke-linecap="round"
              :variants="{
                closed: { d: 'M 2 16.346 L 25 16.346' },
                open: { d: 'M 3 2.5 L 20 16.346' },
              }"
            />
          </motion.svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <AnimatePresence>
      <motion.div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full h-[calc(100dvh-4rem)] left-0 right-0 translate-x-full border-t border-primary-800 bg-white dark:bg-primary-900 dark:border-primary-800"
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
          <div class="grid grid-cols-1 gap-2">
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
              class="block font-display text-4xl text-center py-2 text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white transition-colors"
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
                delay: 0.4,
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
                v-for="(social, index) in selectedSocialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :exit="{ opacity: 0, y: 20 }"
                :transition="{
                  duration: 0.3,
                  delay: 0.5 + index * 0.2,
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
  import { socialLinks } from '~/constants/content';
  const { isTop } = useLenis();
  const isMenuOpen = ref(false);
  // const appRef = inject('appRef');
  watch(isMenuOpen, (open) => {
    if (process.client) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  });
  const selectedSocials = ref(['facebook', 'instagram']);
  const selectedSocialLinks = computed(() => {
    return socialLinks.filter((social) =>
      selectedSocials.value.includes(social.name),
    );
  });

  const menuItems = [
    { label: 'Collection', path: '/collections' },
    { label: 'À propos', path: '/about' },
    // { label: 'Contact', path: '/contact' },
  ];
</script>
