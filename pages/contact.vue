<template>
  <main class="pt-24">
    <div class="container mx-auto px-4">
      <!-- Hero Section -->
      <section class="text-center mb-16">
        <h1 
          class="font-display text-4xl md:text-5xl mb-6"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          Contact Us
        </h1>
        <p 
          class="text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, delay: 200 }"
        >
          Get in touch with our team to discuss your furniture needs or visit our showroom.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <section
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
        >
          <h2 class="font-display text-2xl mb-6">Send us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                v-model="form.name"
                class="w-full px-4 py-2 rounded-md bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                v-model="form.email"
                class="w-full px-4 py-2 rounded-md bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                v-model="form.subject"
                class="w-full px-4 py-2 rounded-md bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-2 rounded-md bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              class="w-full px-6 py-3 bg-primary-900 dark:bg-primary-100 text-white dark:text-primary-900 rounded-md hover:bg-primary-800 dark:hover:bg-primary-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

        <!-- Contact Information -->
        <section
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
        >
          <h2 class="font-display text-2xl mb-6">Visit Our Showroom</h2>
          <div class="space-y-6">
            <div>
              <h3 class="font-semibold mb-2">Address</h3>
              <p class="text-primary-600 dark:text-primary-400">
                123 Luxury Lane<br>
                Design District<br>
                New York, NY 10001
              </p>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Hours</h3>
              <p class="text-primary-600 dark:text-primary-400">
                Monday - Friday: 10:00 AM - 7:00 PM<br>
                Saturday: 11:00 AM - 6:00 PM<br>
                Sunday: Closed
              </p>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Contact</h3>
              <p class="text-primary-600 dark:text-primary-400">
                Phone: +1 (555) 123-4567<br>
                Email: contact@mdfluxury.com
              </p>
            </div>
          </div>

          <!-- Map -->
          <div class="mt-8 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000"
              alt="Location map"
              class="w-full h-64 object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // TODO: Implement form submission
  console.log('Form submitted:', form)
}
</script>