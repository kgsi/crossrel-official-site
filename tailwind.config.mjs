/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    borderRadius: {
      medium: '8px',
      full: '99999px',
    },
    fontFamily: {
      'sans': ['Open Sans', 'Noto Sans JP', 'sans-serif'],
    },
    fontSize: {
      'medium': [
        '1.0rem', // 16px
        {
          lineHeight: '2.25rem', // 32px
          letterSpacing: '0.02em',
          fontWeight: '450',
        },
      ],
      'large': [
        '1.25rem', // 24px
        {
          lineHeight: '2.5', // 48px
          letterSpacing: '0.1em',
          fontWeight: '500',
        },
      ],
      'xlarge': [
        '1.5rem', // 24px
        {
          lineHeight: '2.5', // 48px
          letterSpacing: '0.05em',
          fontWeight: '500',
        },
      ],
      'huge': [
        '2.5rem', // 32px
        {
          lineHeight: '4.5rem',
          letterSpacing: '0.11em',
          fontWeight: '450',
        },
      ],
    },
    maxWidth: {
      content: '50rem'
    },
	},
	plugins: [],
}
