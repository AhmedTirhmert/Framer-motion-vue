<template>
  <section class="py-20 bg-primary-50 dark:bg-primary-800/50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-display text-4xl mb-6">
          Échangeons sur Votre Projet de Rêve !
        </h2>
        <p class="text-lg text-primary-600 dark:text-primary-100 mb-8">
          Contactez-nous pour discuter de vos besoins et de vos idées.
        </p>
        <motion.div class="space-y-4">
          <p class="text-primary-600 dark:text-primary-100">
            <Icon name="mdi:email" size="24" class="mr-2 inline-block" />
            ACMEMDF@gmail.com
          </p>
          <p class="text-primary-600 dark:text-primary-100">
            <Icon name="mdi:phone" size="24" class="mr-2 inline-block" />
            05 28 36 66 / 06 61 11 59 90
          </p>
          <p class="text-primary-600 dark:text-primary-100">
            <Icon name="mdi:map-marker" size="24" class="mr-2 inline-block" />
            [Adresse à préciser]
          </p>
        </motion.div>
        <div class="mt-8">
          <h3 class="text-xl font-semibold mb-4">Suivez-nous</h3>
          <div class="flex justify-center space-x-4">
            <a
              href="#"
              class="text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-primary-50 transition-colors"
            >
              <Icon name="mdi:facebook" size="24" />
            </a>
            <a
              href="#"
              class="text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-primary-50 transition-colors"
            >
              <Icon name="mdi:instagram" size="24" />
            </a>
            <a
              href="#"
              class="text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-primary-50 transition-colors"
            >
              <Icon name="mdi:linkedin" size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
</script>
