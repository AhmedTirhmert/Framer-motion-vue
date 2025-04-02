<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="font-display text-4xl text-center mb-8">
        Suivez-nous sur Instagram
      </h2>
      <div class="relative">
        <div class="carousel-container">
          <div
            class="carousel-wrapper"
            :style="{ transform: `translateX(${translateX}px)` }"
          >
            <div
              v-for="(post, index) in instagramPosts"
              :key="index"
              class="carousel-item"
            >
              <a
                :href="post.permalink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="post.media_url"
                  :alt="post.caption"
                  class="rounded-lg shadow-md"
                />
              </a>
            </div>
          </div>
        </div>
        <button @click="prevSlide" class="carousel-button prev">
          <Icon name="mdi:chevron-left" size="36" />
        </button>
        <button @click="nextSlide" class="carousel-button next">
          <Icon name="mdi:chevron-right" size="36" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
  const instagramPosts = ref([]);
  const translateX = ref(0);
  const postWidth = ref(300); // Adjust as needed
  const gap = ref(16); // Adjust as needed
  const visiblePosts = ref(3); // Adjust as needed
  const instagramToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Replace with your actual token
  const instagramUserId = 'YOUR_INSTAGRAM_USER_ID'; // Replace with your actual user ID

  onMounted(async () => {
    await fetchInstagramPosts();
    calculatePostWidth();
    window.addEventListener('resize', calculatePostWidth);
  });

  const fetchInstagramPosts = async () => {
    try {
      const response = await fetch(
        `https://graph.instagram.com/v12.0/${instagramUserId}/media?fields=id,caption,media_url,permalink&access_token=${instagramToken}`,
      );
      const data = await response.json();
      instagramPosts.value = data.data;
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
    }
  };

  const calculatePostWidth = () => {
    postWidth.value = 300; // Set a default value
    const containerWidth = document.querySelector(
      '.carousel-container',
    )?.offsetWidth;
    if (containerWidth) {
      postWidth.value =
        (containerWidth - (visiblePosts.value - 1) * gap.value) /
        visiblePosts.value;
    }
  };

  const totalWidth = computed(() => {
    return (
      (postWidth.value + gap.value) * instagramPosts.value.length - gap.value
    );
  });

  const maxTranslateX = computed(() => {
    return -(
      totalWidth.value -
      (postWidth.value + gap.value) * visiblePosts.value
    );
  });

  const prevSlide = () => {
    translateX.value = Math.min(
      translateX.value + postWidth.value + gap.value,
      0,
    );
  };

  const nextSlide = () => {
    translateX.value = Math.max(
      translateX.value - postWidth.value - gap.value,
      maxTranslateX.value,
    );
  };
</script>

<style scoped>
  .carousel-container {
    overflow: hidden;
  }

  .carousel-wrapper {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .carousel-item {
    flex: 0 0 auto;
    width: v-bind(postWidth + 'px');
    margin-right: v-bind(gap + 'px');
  }

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 50%;
  }

  .carousel-button.prev {
    left: 0;
  }

  .carousel-button.next {
    right: 0;
  }
</style>
