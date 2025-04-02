<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="font-display text-4xl text-center mb-8">Notre Localisation</h2>
      <motion.div
        class="relative w-full h-96 rounded-lg overflow-hidden shadow-md"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.547429448788!2d-9.225442424584962!3d30.41748747493048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6554570f79d%3A0x426f009418c850a!2sELITE%20MDF!5e0!3m2!1sfr!2sma!4v1711654244314!5m2!1sfr!2sma"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
</script>
