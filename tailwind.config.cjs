/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showItem: {
          "0%": { transform: "scale(0) translateY(-50%)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        showModal: {
          "0%": { scale: 0, opacity: 0},
          "50%": { scale: 1.3, opacity: 1 },
          "100%": { scale: 1, opacity: 1 },
        },
      },
      animation: {
        "show-text": "showItem .2s ease-in-out forwards",
        "show-modal": "showModal .3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
