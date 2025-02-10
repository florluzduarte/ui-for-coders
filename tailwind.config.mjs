import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#F5F5F5",
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.purple,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.neutral,
      },
    },
  },
  plugins: [starlightPlugin()],
};
