<template>
  <footer class="bg-primary-100 dark:bg-primary-800 mt-20 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-display text-xl mb-4">MDF Luxury</h3>
          <p class="text-sm text-primary-600 dark:text-primary-100">
            Crafting excellence in modern furniture design since 2010.
          </p>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="item in quickLinks" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="text-sm text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-white transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-2 text-sm text-primary-600 dark:text-primary-100">
            <li>123 Luxury Lane</li>
            <li>Design District</li>
            <li>contact@mdfluxury.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Newsletter</h4>
          <p class="text-sm text-primary-600 dark:text-primary-100 mb-4">
            Subscribe to receive updates about new collections and design
            insights.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="space-y-2">
            <input
              type="email"
              v-model="email"
              placeholder="Your email"
              class="w-full px-4 py-2 rounded-md bg-white dark:bg-primary-700 border border-primary-200 dark:border-primary-600"
            />
            <button
              type="submit"
              class="w-full px-4 py-2 bg-primary-800 dark:bg-primary-200 text-white dark:text-primary-900 rounded-md hover:bg-primary-700 dark:hover:bg-primary-300 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div
        class="mt-12 pt-8 border-t border-primary-200 dark:border-primary-700 text-center text-sm text-primary-600 dark:text-primary-100"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} MDF Luxury. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const email = ref('');
  const quickLinks = [
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  const subscribeNewsletter = () => {
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email.value);
    email.value = '';
  };
</script>
