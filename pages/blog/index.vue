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
          Design Blog
        </h1>
        <p 
          class="text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, delay: 200 }"
        >
          Explore our collection of articles on interior design, furniture care,
          and the latest trends in luxury living.
        </p>
      </section>

      <!-- Featured Post -->
      <section class="mb-16">
        <div 
          class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          <div class="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img 
              :src="featuredPost.image" 
              :alt="featuredPost.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="space-y-4">
            <span class="text-sm text-primary-600 dark:text-primary-400">
              {{ featuredPost.date }}
            </span>
            <h2 class="font-display text-3xl">{{ featuredPost.title }}</h2>
            <p class="text-primary-600 dark:text-primary-400">
              {{ featuredPost.excerpt }}
            </p>
            <NuxtLink 
              :to="featuredPost.path"
              class="inline-block px-6 py-3 bg-primary-900 dark:bg-primary-100 text-white dark:text-primary-900 rounded-md hover:bg-primary-800 dark:hover:bg-primary-200 transition-colors"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Blog Posts Grid -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article 
          v-for="post in posts" 
          :key="post.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          class="group"
        >
          <div class="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span class="text-sm text-primary-600 dark:text-primary-400">{{ post.date }}</span>
          <h3 class="font-display text-xl mt-2 mb-3">{{ post.title }}</h3>
          <p class="text-primary-600 dark:text-primary-400 mb-4">{{ post.excerpt }}</p>
          <NuxtLink 
            :to="post.path"
            class="text-primary-900 dark:text-primary-100 font-semibold hover:underline"
          >
            Read More →
          </NuxtLink>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup>
const featuredPost = {
  title: 'The Art of Mixing Modern and Traditional Furniture',
  excerpt: 'Discover how to create a harmonious blend of contemporary and classic pieces in your home.',
  date: 'March 15, 2024',
  image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1000',
  path: '/blog/mixing-modern-traditional'
}

const posts = [
  {
    id: 1,
    title: 'Sustainable Furniture: A Guide to Eco-Friendly Living',
    excerpt: 'Learn about sustainable materials and practices in furniture manufacturing.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?q=80&w=800',
    path: '/blog/sustainable-furniture'
  },
  {
    id: 2,
    title: 'Creating the Perfect Home Office',
    excerpt: 'Tips for designing a productive and stylish workspace at home.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800',
    path: '/blog/perfect-home-office'
  },
  {
    id: 3,
    title: 'Color Theory in Interior Design',
    excerpt: 'Understanding how to use color to create stunning interior spaces.',
    date: 'March 1, 2024',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800',
    path: '/blog/color-theory'
  }
]
</script>