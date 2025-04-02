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
          Our Collections
        </h1>
        <p 
          class="text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, delay: 200 }"
        >
          Discover our carefully curated collections of premium furniture pieces,
          each crafted with precision and attention to detail.
        </p>
      </section>

      <!-- Categories -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div 
          v-for="category in categories" 
          :key="category.id"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1 }"
          class="group cursor-pointer"
        >
          <div class="relative overflow-hidden rounded-lg aspect-square">
            <img 
              :src="category.image" 
              :alt="category.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 class="text-white font-display text-2xl">{{ category.name }}</h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="mb-16">
        <h2 class="font-display text-3xl mb-8 text-center">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="product in featuredProducts" 
            :key="product.id"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            class="group"
          >
            <div class="relative overflow-hidden rounded-lg">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="w-full aspect-[4/3] object-cover"
              />
              <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p class="text-white">Starting from ${{ product.price }}</p>
                </div>
              </div>
            </div>
            <h3 class="font-display text-xl mt-4">{{ product.name }}</h3>
            <p class="text-primary-600 dark:text-primary-400">{{ product.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const categories = [
  { id: 1, name: 'Living Room', image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800' },
  { id: 2, name: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800' },
  { id: 3, name: 'Bedroom', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?q=80&w=800' },
  { id: 4, name: 'Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800' },
]

const featuredProducts = [
  {
    id: 1,
    name: 'Modern Dining Table',
    description: 'Sleek design with premium MDF construction',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800'
  },
  {
    id: 2,
    name: 'Executive Desk',
    description: 'Sophisticated workspace solution',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800'
  },
  {
    id: 3,
    name: 'Lounge Chair',
    description: 'Contemporary comfort meets style',
    price: 899,
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?q=80&w=800'
  },
]
</script>