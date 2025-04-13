export default defineNuxtPlugin(() => {
  const fonts = [
    {
      href: '/fonts/playfire/playfair-display-latin-400-normal.woff2',
      weight: '400',
      family: 'Playfair Display',
    },
    {
      href: '/fonts/playfire/playfair-display-latin-700-normal.woff2',
      weight: '700',
      family: 'Playfair Display',
    },
    {
      href: '/fonts/monsterate/montserrat-latin-400-normal.woff2',
      weight: '400',
      family: 'Montserrat',
    },
    {
      href: '/fonts/monsterate/montserrat-latin-700-normal.woff2',
      weight: '700',
      family: 'Montserrat',
    },
  ];

  fonts.forEach(({ href }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  const style = document.createElement('style');
  style.innerHTML = `
    @font-face {
      font-family: 'Playfair Display';
      src: url('/fonts/playfire/playfair-display-latin-400-normal.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Playfair Display';
      src: url('/fonts/playfire/playfair-display-latin-700-normal.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/monsterate/montserrat-latin-400-normal.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/monsterate/montserrat-latin-700-normal.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
});
