import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate" // <-- Diubah di sini

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        stix: ['var(--font-stix)'],
      },
      colors: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [tailwindcssAnimate], // <-- Dan diubah di sini
}

export default config