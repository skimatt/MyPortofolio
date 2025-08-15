// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Pastikan properti content ini ada dan benar
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-slate': '#1E293B',
        'soft-blue': '#38BDF8',
        'white-soft': '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};