module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    backgroundImage: {
      ExtremeGreed: "url('../src/svg/ExtremeGreed.svg')",
      Greed: "url('../src/svg/Greed.svg')",
      Neutral: "url('../src/svg/Neutral.svg')",
      Fear: "url('../src/svg/Fear.svg')",
      ExtremeFear: "url('../src/svg/ExtremeFear.svg')",
    },
    screens: {
      mobile: '460px',
      // => @media (min-width: 640px) { ... }
      sm: '640px',
      // @media (min-width: 640px) { ... }
      md: '768px',
      // @media (min-width: 768px) { ... }
      lg: '1024px',
      //	@media (min-width: 1024px) { ... }
      xl: '1280px',
      //	@media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
