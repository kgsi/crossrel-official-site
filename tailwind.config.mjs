/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    borderRadius: {
      medium: '8px',
      full: '99999px',
    },
    fontFamily: {
      'sans': ['system-ui', 'sans-serif'],
    },
    fontSize: {
      'medium': [
        '1rem', // 16px
        {
          lineHeight: '2', // 32px
          letterSpacing: '0.01em',
          fontWeight: '500',
        },
      ],
      'large': [
        '1.5rem', // 24px
        {
          lineHeight: '2', // 48px
          letterSpacing: '0.01em',
          fontWeight: '500',
        },
      ],
      'huge': [
        '2rem', // 32px
        {
          lineHeight: '2', // 64px
          letterSpacing: '0.01em',
          fontWeight: '500',
        },
      ],
    },
    maxWidth: {
      content: '800px'
    },
	},
	plugins: [],
}
