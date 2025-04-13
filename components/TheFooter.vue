<template>
  <footer
    class="max-lg:bg-[url('/images/texture3.png')] bg-primary-100 dark:bg-primary-800 text-white relative z-10"
  >
    <div class="container mx-auto px-4 py-12">
      <!-- Grid Layout for Footer Content -->
      <div
        class="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left"
      >
        <!-- Company Info -->
        <div>
          <h3 class="font-display text-primary-100 text-xl mb-4">
            STE ELITE MDF
          </h3>
          <p class="text-sm text-primary-600 dark:text-primary-100/70">
            La plupart des idées pour l'habitat démarrent par d'innombrables
            pensées versatiles et rêves lointains. Chez ELITEMDF, nous ferons de
            notre mieux pour vous aider à organiser vos idées et réaliser
            l'habitat de vos rêves.
          </p>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold font-display text-primary-100 mb-4">
            CONTACTEZ-NOUS
          </h4>
          <ul
            class="space-y-2 text-sm text-primary-600 dark:text-primary-100/70"
          >
            <li>05 28 26 36 86</li>
            <li>06 61 51 99 50</li>
            <li>ELITEMDFsarl@gmail.com</li>
            <li>localisation</li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold font-display text-primary-100 mb-4">
            ELITEMDF
          </h4>
          <ul
            class="flex flex-wrap items-center gap-3 text-sm text-primary-600 dark:text-primary-100/70"
          >
            <li
              class="mt-0 w-[calc(100%/3-0.75rem)] capitalize"
              v-for="(service, index) in categories"
              :key="index"
            >
              <NuxtLink to="/collections">
                {{ service }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 items-center mt-12 pt-8 border-t border-primary-200 dark:border-primary-700 text-center text-sm text-primary-600 dark:text-primary-100"
      >
        <p class="lg:text-start">
          &copy; {{ new Date().getFullYear() }} Copyright: ELITEMDF.com
        </p>
        <div class="flex justify-center space-x-4 mt-4 lg:ml-auto">
          <a
            v-for="(link, index) in socialLinks.reverse()"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-white"
          >
            <Icon :name="link.icon" size="2em" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { socialLinks, collection } from '~/constants/content';

  const categories = computed(
    () => new Set(collection.map((item) => item.category)),
  );
</script>

<style lang="scss" scoped>
  footer {
    background-blend-mode: luminosity;
    -moz-background-blend-mode: luminosity;
  }
  /* Tailwind handles responsiveness, no additional styles needed */
</style>
