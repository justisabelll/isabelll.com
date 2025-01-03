/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        // sans: ['Geist', 'sans-serif'],
        // mono: ['Geist Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {},
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
