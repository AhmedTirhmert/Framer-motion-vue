<template>
  <section class="bg-primary-900 text-white py-16 px-6 text-center">
    <motion.div class="max-w-xl mx-auto space-y-6">
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
      >
        Demandez un devis sur mesure
      </motion.h2>
      <motion.p
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
          delay: 0.2,
          duration: 0.6,
          type: 'tween',
          ease: 'easeInOut',
        }"
        while-in-view="visible"
        initial="hidden"
        :in-view-options="{ once: true }"
        class="text-primary-100"
      >
        Parlez-nous de votre projet et recevez une estimation personnalisée sous
        24h. Nos experts sont à votre écoute pour vous accompagner à chaque
        étape.
      </motion.p>
      <NuxtLink to="/contact">
        <CTA> Demandez votre devis gratuit </CTA>
      </NuxtLink>
    </motion.div>
  </section>
</template>

<script setup>
  import { motion } from 'motion-v';
</script>
