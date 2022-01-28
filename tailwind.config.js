const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
