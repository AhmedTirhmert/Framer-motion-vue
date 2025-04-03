<template>
  <section class="py-16 bg-white dark:bg-primary-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div
          v-for="(stat, index) in statistics"
          :key="index"
          class="flex flex-col items-center"
          v-motion
          :initial="{ opacity: 0, x: '100%', filter: 'blur(5px)' }"
          :visible-once="{
            opacity: 1,
            x: '0%',
            filter: 'blur(0px)',
            transition: {
              duration: 600,
              type: 'spring',
              stiffness: 50,
              delay: 200 * index,
            },
          }"
        >
          <Counter
            :value="stat.value"
            class="text-4xl font-bold text-primary-900 dark:text-primary-100"
          />
          <ClientOnly>
            <span class="text-primary-600 dark:text-primary-100">{{
              stat.label
            }}</span>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  defineProps({
    statistics: {
      type: Array,
      required: true,
    },
  });
</script>
