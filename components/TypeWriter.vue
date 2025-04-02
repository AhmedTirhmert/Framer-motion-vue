<template>
  <p
    ref="typeWritter"
    class="typewriter"
    :class="{ 'animation-completed': isComplete }"
  >
    {{ displayText }}<span class="cursor">|</span>
  </p>
</template>

<script setup>
  import { useInView } from 'motion-v';
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 10,
    },
    startDelay: {
      type: Number,
      default: 100,
    },
  });
  const typeWritter = ref();
  const displayText = ref('');
  const isComplete = ref(false);
  let currentIndex = 0;
  let timeoutId = null;
  const isInView = useInView(typeWritter, { once: true });
  const typeNextChar = () => {
    if (currentIndex < props.text.length) {
      displayText.value += props.text[currentIndex];
      currentIndex++;
      timeoutId = setTimeout(typeNextChar, props.speed);
    } else {
      isComplete.value = true;
    }
  };

  watch(isInView, (inView) => {
    if (inView)
      timeoutId = setTimeout(() => {
        typeNextChar();
      }, props.startDelay);
  });

  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId);
  });
</script>

<style scoped>
  .typewriter {
    /* display: inline-block;
    white-space: pre-wrap; */
  }

  .cursor {
    display: inline-block;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .animation-completed .cursor {
    animation: none;
    opacity: 0;
  }
</style>
