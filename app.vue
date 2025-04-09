<script setup>
  useLenis();
  onMounted(() => {
    const preloader = document.getElementById('preloader');

    if (preloader) {
      // Fade out preloader
      preloader.classList.add(
        'opacity-0',
        'transition-opacity',
        'duration-700',
      );

      // Remove it from DOM after fade
      setTimeout(() => preloader.remove(), 1000);
      setTimeout(() => (document.body.style.overflow = 'auto'), 1050);

      // Re-enable scroll (if previously disabled via CSS)
    }
  });
</script>
<template>
  <div
    id="preloader"
    class="fixed inset-0 z-[9999] bg-brand-black bg-primary-900 text-white flex items-center justify-center"
  >
    <img
      src="/images/logo-light.png"
      alt=""
      class="size-24 animate-pulse-logo"
    />
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
  @keyframes pulse-logo {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .animate-pulse-logo {
    animation: pulse-logo 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  /* Optional: hide scrollbar while loading */
  body {
    overflow: hidden;
  }
</style>
