/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          green: {
            main: "#699636",
            dark: "#386641",
            light: "#A7C957",
          },
          white: "#F5F5F5",
          black: "#333333",
          beige: "#F2E8CF",
          orange: "#E36C33",
          red: "#E36C33",
        },
        fontFamily: {
          'sans': ['Poppins', 'system-ui', 'sans-serif'],
        },
      },
    },
    
    plugins: [],
  }