<template>
  <main class="">
    <SectionsHero :heroImages="heroImages" />
    <SectionsBrandStory />
    <SectionsStatistics :statistics="statistics" />
    <SectionsExpertise :expertiseItems="expertiseItems" />
    <SectionsRealizations :realizationImages="realizationImages" />
    <SectionsMap />
    <SectionsContact />
  </main>
</template>

<script setup lang="ts">
  import {
    heroImages,
    expertiseItems,
    realizationImages,
    statistics,
  } from '~/constants/content';
</script>

<style lang="scss">
  main {
    & > section:not(:first-of-type) {
      @apply py-20 text-black dark:text-white;
    }

    & > section:nth-of-type(odd):not(:first-of-type) {
      @apply bg-primary-50 dark:bg-primary-800/50;
    }

    & > section:nth-of-type(even):not(:first-of-type) {
      @apply bg-white dark:bg-primary-900;
    }
  }
</style>
