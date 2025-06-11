/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'romana': ['Romana', 'serif'],
        'noto-serif': ['Noto Serif Display', 'serif'],
        'emitha': ['Emitha', 'cursive'],
      },
    },
  },
  plugins: [],
} 