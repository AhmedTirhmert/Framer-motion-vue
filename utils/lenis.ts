import Lenis from 'lenis';
import type { ScrollToOptions } from 'lenis';
import { ref, onMounted, onUnmounted } from 'vue';
const isScrolling = ref(false);
const isTop = ref(true);
export function useLenis() {
  const lenis = ref<Lenis | null>(null);

  onMounted(() => {
    lenis.value = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const animate = (time: number) => {
      lenis.value?.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  onUnmounted(() => {
    lenis.value?.destroy();
    lenis.value = null;
    window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    isScrolling.value = true;
    isTop.value = document.documentElement.scrollTop === 0;
    clearTimeout((window as any).scrollTimeout);
    (window as any).scrollTimeout = setTimeout(() => {
      isScrolling.value = false;
    }, 100);
  };

  const scrollTo = (
    target: string | HTMLElement,
    options: ScrollToOptions = { duration: 1.2 },
  ) => {
    lenis.value?.scrollTo(target, options);
  };

  const scrollToTop = (options: ScrollToOptions = { duration: 1.2 }) => {
    scrollTo(0, options);
  };

  return {
    lenis,
    scrollTo,
    scrollToTop,
    isScrolling,
    isTop,
  };
}
