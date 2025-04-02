<script lang="ts" setup>
  import Lenis from 'lenis';
  onMounted(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  });
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
