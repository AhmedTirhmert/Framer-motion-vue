<template>
  <main class="pt-24 container max-w-4xl 2xl:max-w-6xl grid gap-5 mx-auto">
    <!-- Hero Section -->
    <motion.section
      class="text-center"
      :variants="variant"
      :transition="transition"
      while-in-view="visible"
      initial="hidden"
      :in-view-options="{ once: true }"
    >
      <h1
        class="font-display text-4xl md:text-5xl mb-6 text-primary-800 dark:text-primary-100"
      >
        ELITE MDF
      </h1>
      <p
        class="text-lg text-primary-600 text-balance dark:text-primary-200 max-w-2xl mx-auto"
      >
        Chez ELITEMDF, nous sommes bien plus que des menuisiers — nous sommes
        des créateurs d’intérieurs sur mesure. De la conception à la
        fabrication, jusqu’à la pose complète, nous réalisons des cuisines,
        salles de bain, placards, dressings et tous types de rangements pour les
        espaces résidentiels et professionnels.
      </p>
    </motion.section>

    <!-- Presence Section -->
    <motion.section
      :variants="variant"
      :transition="transition"
      while-in-view="visible"
      initial="hidden"
      :in-view-options="{ once: true }"
      class="text-center"
    >
      <h2
        class="font-display text-3xl mb-6 text-primary-800 dark:text-primary-100"
      >
        Une présence forte à Agadir et dans toute la région SOUSS MASSA
      </h2>
      <p
        class="text-primary-600 text-balance dark:text-primary-200 max-w-2xl mx-auto"
      >
        Basés à Agadir, nous intervenons dans toute la région Souss Massa et
        étendons notre activité sur l’ensemble du territoire national. Notre
        objectif : répondre à chaque besoin, où que vous soyez, avec la même
        exigence de qualité et d’accompagnement.
      </p>
    </motion.section>

    <!-- Commitments Section -->
    <motion.section
      :variants="variant"
      :transition="transition"
      while-in-view="visible"
      initial="hidden"
      :in-view-options="{ once: true }"
      class=""
    >
      <h2
        class="font-display text-3xl text-center mb-12 text-primary-800 dark:text-primary-100"
      >
        Nos engagements
      </h2>

      <ul class="space-y-2 ml-6 list-disc text-primary-200">
        <li>
          <Icon
            size="20"
            name="mdi:check-circle-outline"
            class="inline-block mr-1 text-base"
          />
          Une qualité irréprochable
        </li>
        <li>
          <Icon
            size="20"
            name="mdi:scale-balance"
            class="inline-block mr-1 text-base"
          />
          Des prix transparents et justes
        </li>
        <li>
          <Icon
            size="20"
            name="mdi:clock-check-outline"
            class="inline-block mr-1 text-base"
          />
          Le respect strict des délais annoncés
        </li>
        <li>
          <Icon
            size="20"
            name="mdi:handshake-outline"
            class="inline-block mr-1 text-base"
          />
          Un accompagnement sur mesure et durable
        </li>
      </ul>
      <p class="text-primary-600 dark:text-primary-200 text-center mt-6">
        Nous construisons des relations de confiance avec nos clients, en
        plaçant leur style de vie, leurs critères et leur budget au cœur de
        notre processus de création.
      </p>
    </motion.section>

    <motion.section
      :variants="variant"
      :transition="transition"
      while-in-view="visible"
      initial="hidden"
      :in-view-options="{ once: true }"
      class="bg-neutral-950 text-white mx-auto"
    >
      <!-- Title -->
      <div class="text-center mb-8">
        <h2
          class="font-display text-3xl text-center mb-12 text-primary-800 dark:text-primary-100"
        >
          Notre Procédure
        </h2>
        <p class="text-primary-200 mt-2">
          Une approche claire en 4 étapes pour donner vie à vos projets
        </p>
      </div>

      <!-- Steps Grid -->
      <div
        class="flex flex-col sm:flex-row items-center gap-8 justify-center flex-wrap"
      >
        <motion.div
          v-for="(step, index) in steps"
          :key="step.title"
          :initial="{ opacity: 0, y: 40 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{
            delay: index * 0.2,
            duration: 0.6,
            ease: 'easeInOut',
          }"
          class="flex items-start gap-4 md:basis-[calc(100%/2-2rem)] bg-neutral-900 rounded-xl p-5 border border-primary-800"
        >
          <Icon
            :name="step.icon"
            class="text-primary-200 text-3xl shrink-0 mt-1"
          />
          <div>
            <h3 class="text-lg font-semibold mb-1 text-primary-100">
              {{ step.title }}
            </h3>
            <p class="text-primary-200 text-sm">{{ step.description }}</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
    <!-- Priority Section -->
    <motion.section
      :variants="variant"
      :transition="transition"
      while-in-view="visible"
      initial="hidden"
      :in-view-options="{ once: true }"
      class="text-center"
    >
      <h2
        class="font-display text-3xl mb-6 text-primary-800 dark:text-primary-100"
      >
        Votre projet, notre priorité
      </h2>
      <p class="text-primary-600 dark:text-primary-200 max-w-2xl mx-auto">
        De la première idée jusqu’à l’installation finale, nous vous
        accompagnons pas à pas pour transformer vos idées en réalisations
        concrètes, élégantes et durables.
      </p>

      <NuxtLink to="/contact">
        <CTA bg-class="bg-primary-700">
          <template #content> Demandez votre devis gratuit </template>
        </CTA>
      </NuxtLink>
    </motion.section>
    <!--
    <img
      src="/images/logo.png"
      alt="Logo"
      class="fixed max-lg:hidden left-0 top-[2rem] bottom-0 h-2/3 -translate-x-1/2 object-contain mix-blend-soft-light opacity-30 z-0"
    />
    <img
      src="/images/logo.png"
      alt="Logo"
      class="fixed max-lg:hidden right-0 bottom-0 h-2/3 translate-x-1/2 object-contain mix-blend-soft-light opacity-30 z-0"
    />
-->
  </main>
</template>

<script setup>
  import { motion } from 'motion-v';

  const variant = {
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
  };

  const transition = {
    duration: 0.6,
    type: 'tween',
    ease: 'easeInOut',
  };

  const steps = [
    {
      icon: 'mdi:account-voice',
      title: '1. Prise de contact',
      description:
        'Nous écoutons vos besoins, vos idées et vos inspirations afin de mieux comprendre votre vision.',
    },
    {
      icon: 'mdi:floor-plan',
      title: '2. Conception sur mesure',
      description:
        'Nos designers vous proposent un plan personnalisé, adapté à votre style et à votre espace.',
    },
    {
      icon: 'mdi:hammer-wrench',
      title: '3. Fabrication & Finitions',
      description:
        'Nous fabriquons vos meubles avec soin et précision dans notre atelier local.',
    },
    {
      icon: 'mdi:truck-delivery-outline',
      title: '4. Livraison & Installation',
      description:
        'Nous assurons la livraison et l’installation complète dans les délais convenus.',
    },
    {
      icon: 'mdi:check-circle',
      title: '5. Suivi & Support',
      description:
        'Nous restons à votre disposition pour toute question ou besoin d’assistance après l’installation.',
    },
  ];
</script>

<style lang="scss" scoped>
  main {
    & > section {
      @apply py-8 px-4 text-black dark:text-white max-sm:py-10 max-sm:px-4 relative;
    }

    & > section:nth-of-type(even) {
      @apply bg-primary-800/30;
    }

    & > section:nth-of-type(odd) {
      @apply bg-primary-900;
    }
  }
</style>
