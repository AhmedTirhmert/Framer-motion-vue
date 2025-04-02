<template>
  <span :class="className" ref="counterRef"></span>
</template>

<script setup>
  import { useInView, useMotionValue, useSpring } from 'motion-v';

  const props = defineProps({
    value: {
      type: Number,
      required: true,
    },
    direction: {
      type: String,
      default: 'up',
    },
    className: {
      type: String,
      default: '',
    },
  });

  const counterRef = ref(null);
  const motionValue = useMotionValue(
    props.direction === 'down' ? props.value : 0,
  );
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
    duration: 1,
  });
  const isInView = useInView(counterRef, { once: true, margin: '-100px' });

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M+';
    if (!(num % 1000)) return (num / 1000).toFixed(0) + 'K+';

    return num.toFixed(0) + '+';
  };

  watch(isInView, (newVal) => {
    if (newVal) {
      motionValue.set(props.direction === 'down' ? 0 : props.value);
    }
  });

  onMounted(() => {
    springValue.on('change', (latest) => {
      if (counterRef.value) {
        counterRef.value.textContent = formatNumber(latest);
      }
    });
  });
</script>

<style scoped>
  /* Add any necessary styles here */
</style>
