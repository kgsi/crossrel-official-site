/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    borderRadius: {
      medium: '8px',
      full: '99999px',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
    },
    lineHeight: {
      default: '1,8',
      tight: '1.5',
      tighter: '1.2',
      none: '1',
    },
    fontSize: {
      s: [
        'var(--font-size-s)',
        {
          lineHeight: '1.5',
          letterSpacing: '0',
        },
      ],
      m: [
        'var(--font-size-m)',
        {
          lineHeight: '1.6',
          letterSpacing: '0',
        },
      ],
      l: [
        'var(--font-size-l)',
        {
          lineHeight: '1.8',
          letterSpacing: '0',
        },
      ],
      xl: [
        'var(--font-size-xl)',
        {
          lineHeight: '1.8',
          letterSpacing: '0',
        },
      ],
      xxl: [
        'var(--font-size-xxl)',
        {
          lineHeight: '1.8',
          letterSpacing: '0',
        },
      ],
    },
  },
  plugins: [],
};
