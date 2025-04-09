<template>
  <main class="max-w-screen overflow-x-hidden">
    <LazySectionsHero :heroImages="heroImages" />
    <LazySectionsBrandStory />
    <LazySectionsWhyUs />
    <LazySectionsStatistics :statistics="statistics" />
    <LazySectionsExpertise :expertiseItems="expertiseItems" />
    <LazySectionsRealizations />
    <LazySectionsDevis />
    <LazySectionsMap />
    <!-- <SectionsContact /> -->
  </main>
</template>

<script setup lang="ts">
  import { heroImages, expertiseItems, statistics } from '~/constants/content';
</script>

<style lang="scss" scoped>
  main {
    & > section:not(:first-of-type) {
      @apply py-16 text-black dark:text-white max-sm:py-10 max-sm:px-2;
    }

    & > section:nth-of-type(odd):not(:first-of-type) {
      @apply bg-primary-50 dark:bg-primary-800/50;
      // background-image: url('/images/texture1.png');
      // background-attachment: fixed;
      // background-blend-mode: exclusion;
      // -moz-background-blend-mode: exclusion;
    }

    & > section:nth-of-type(even):not(:first-of-type) {
      @apply bg-white dark:bg-primary-900;
      background-image: url('/images/texture2.png');
      background-attachment: fixed;
      background-blend-mode: lighten;
      -moz-background-blend-mode: lighten;
    }
  }
</style>
