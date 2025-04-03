<template>
  <main class="max-w-screen overflow-x-hidden">
    <SectionsHero :heroImages="heroImages" />
    <SectionsBrandStory />
    <SectionsWhyUs />
    <SectionsStatistics :statistics="statistics" />
    <SectionsExpertise :expertiseItems="expertiseItems" />
    <SectionsRealizations :realizationImages="realizationImages" />
    <SectionsDevis />
    <SectionsMap />
    <!-- <SectionsContact /> -->
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
      @apply py-16 text-black dark:text-white max-sm:py-10 max-sm:px-2;
    }

    & > section:nth-of-type(odd):not(:first-of-type) {
      @apply bg-primary-50 dark:bg-primary-800/50;
    }

    & > section:nth-of-type(even):not(:first-of-type) {
      @apply bg-white dark:bg-primary-900;
    }
  }
</style>
