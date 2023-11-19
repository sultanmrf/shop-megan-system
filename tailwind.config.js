/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'YekanBakh-Light': ['YekanBakh-Light'],
        'YekanBakh-Regular': ['YekanBakh-Regular'],
        'YekanBakh-SemiBold': ['YekanBakh-SemiBold'],
        'YekanBakh-Bold': ['YekanBakh-Bold'],
        'YekanBakh-ExtraBold': ['YekanBakh-ExtraBold'],
        'YekanBakh-ExtraBlack': ['YekanBakh-ExtraBlack'],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}

