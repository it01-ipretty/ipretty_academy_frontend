const defaultTheme = require("tailwindcss/defaultTheme");
const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '1rem',
        base: '1.125rem',
        xl: '1.25rem',
        '2xl': '2rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        sans: ["Exo", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bgColor: "#147B65",
        primaryColor: "#147B65",
        secondaryColor: "#555",
        thirdColor: "#000",
        whiteColor: "#fff",
        subColor: "#555",
        borderButtonColor: "#9D9D9D",
        bgLigthGrey: "#EAEAEA",
        bgGray: "#F5F5F5",
        bgFooter: '#DFF6F0',
        borderGray:"#555555",
        redColor: "#F51A1A",
        yellowColor: "#F6B40A",
        textSubFooter: "#00593C",
        textTitleFooter: '#00593C'
      },
      inset: {
        'auto': 'auto'
      },
      minHeight: {
        'min-height-modal': 'calc(100% - 1.75rem * 2)',
      },
      height: {
        'min-height-modal': 'calc(100% - 1.75rem * 2)',
      },
      width: {
        'width-tab-course' : 'calc(100% - 25.625rem)',
      },
      padding: {
        elementPadding : "5.62rem"
      },
      boxShadow: {
        customShadow: "0 15px 30px 0 rgba(0, 0, 0, 0.1)"
      },
      maxHeight: {
        heightVideo : "calc(100vh - 29rem)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp')
  ],
}

