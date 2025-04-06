<template>
  <section class="py-20 bg-primary-50 dark:bg-primary-800/50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto mb-12 text-center">
        <motion.h2
          :variants="{
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            },
            hidden: {
              opacity: 0,
              y: 20,
              filter: 'blur(5px)',
            },
          }"
          :transition="{
            duration: 0.6,
            type: 'tween',
            ease: 'easeInOut',
          }"
          while-in-view="visible"
          initial="hidden"
          :in-view-options="{ once: true }"
          class="font-display text-3xl lg:text-4xl mb-8"
          >Notre Expertise</motion.h2
        >
      </div>
      <ClientOnly>
        <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-5 mt-12">
          <div
            v-for="(item, index) in expertiseItems"
            :key="`expertise_${index}`"
            class="p-4 lg:p-6 bg-white h-auto dark:bg-transparent grid items-center gap-2 rounded-lg shadow-sm ring-1 ease-in-out duration-300 ring-primary-300/30"
            v-motion
            :initial="{
              opacity: 0,
              x: !isMobile ? '0%' : index % 2 ? '100%' : '-100%',
              filter: 'blur(15px)',
              scale: !isMobile ? 0.8 : 1,
            }"
            :visible-once="{
              opacity: 1,
              x: '0%',
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 600,
                type: 'tween',
                delay: 100 * index,
                ease: 'easeInOut',
              },
            }"
          >
            <div class="flex text-start items-center gap-4">
              <Icon
                :name="item?.icon"
                size="24"
                class="inline-block text-primary-200/70"
              />
              <h3 class="font-display text-xl font-semibold">
                {{ item?.title }}
              </h3>
            </div>
            <p
              class="text-primary-600 text-sm lg:text-base dark:text-primary-100"
            >
              {{ item?.description }}
            </p>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
  import { useMediaQuery } from '@vueuse/core';

  const isMobile = useMediaQuery('(max-width: 768px)');
  defineProps({
    expertiseItems: {
      type: Array,
      required: true,
    },
  });
</script>
