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
        code: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-subtitle':
          'linear-gradient(101deg, #2563EB -19.84%, #4338CA 117.57%)',
      },
      height: {
        '90h': '90vh',
        '35h': '35vh',
        '30h': '30vh',
      },
    },
  },
  plugins: [],
}
