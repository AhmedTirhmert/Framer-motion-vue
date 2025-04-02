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
          Our Story
        </h1>
        <p 
          class="text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, delay: 200 }"
        >
          Since 2010, we've been dedicated to creating exceptional furniture that combines
          innovative design with traditional craftsmanship.
        </p>
      </section>

      <!-- Vision Section -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div 
          class="relative aspect-square rounded-lg overflow-hidden"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
        >
          <img 
            src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000"
            alt="Craftsman at work"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
        >
          <h2 class="font-display text-3xl mb-6">Our Vision</h2>
          <p class="text-primary-600 dark:text-primary-400 mb-4">
            At MDF Luxury, we believe that furniture is more than just functional pieces - 
            it's an expression of style, comfort, and sophistication that transforms living spaces 
            into extraordinary environments.
          </p>
          <p class="text-primary-600 dark:text-primary-400">
            Our commitment to quality craftsmanship and innovative design has made us a leader 
            in luxury furniture manufacturing, creating pieces that stand the test of time.
          </p>
        </div>
      </section>

      <!-- Values Section -->
      <section class="mb-20">
        <h2 
          class="font-display text-3xl text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          Our Values
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="value in values" 
            :key="value.title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            class="text-center p-6"
          >
            <Icon :name="value.icon" class="w-12 h-12 mb-4 mx-auto text-primary-800 dark:text-primary-200" />
            <h3 class="font-display text-xl mb-4">{{ value.title }}</h3>
            <p class="text-primary-600 dark:text-primary-400">{{ value.description }}</p>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="mb-20">
        <h2 
          class="font-display text-3xl text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          Our Team
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            v-for="member in team" 
            :key="member.name"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1 }"
            class="text-center"
          >
            <div class="relative aspect-square rounded-full overflow-hidden mb-4">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover" />
            </div>
            <h3 class="font-display text-xl mb-2">{{ member.name }}</h3>
            <p class="text-primary-600 dark:text-primary-400">{{ member.role }}</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const values = [
  {
    icon: 'ph:diamond-fill',
    title: 'Quality',
    description: 'We use only the finest materials and craftsmanship in every piece we create.'
  },
  {
    icon: 'ph:leaf-fill',
    title: 'Sustainability',
    description: 'Our commitment to environmental responsibility guides every decision we make.'
  },
  {
    icon: 'ph:paint-brush-fill',
    title: 'Innovation',
    description: 'We continuously push the boundaries of design and functionality.'
  }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400'
  },
  {
    name: 'Emma Williams',
    role: 'Production Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400'
  },
  {
    name: 'David Miller',
    role: 'Quality Control',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400'
  }
]
</script>