/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito"],
    },
    colors: {
      current: "currentColor",
      white: "#fff",
      blue: "#1c93dc",
      black: "#000",
    },
    extend: {
      animation: {
        typingBlink:
          "typing 2s steps(12), blink 0.5s infinite step-end alternate",
        smoothBg: "smoothBg 0.7s linear"
      },
      keyframes: {
        typing: {
          from: { width: 0 },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        smoothBg: {
          "0%": {
            backgroundColor: "#fff"
          },
          "100%": {
            backgroundColor: "current"
          }
        }
      },
    },
  },
  plugins: [],
};
