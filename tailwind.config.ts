import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '2.5rem',
      center: true
      
      
    },
    extend: {
      fontFamily: {
        sans: ['Rotonda', ...defaultTheme.fontFamily.sans],
        flame: ['Flame', ...defaultTheme.fontFamily.sans],
        druk: ['DrukTextWide', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
} satisfies Config;
