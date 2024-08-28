/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        chathai: "#FFAF75",
        intania: "#651616",
        user: "#FF8B74",
        beaver: "#D7925A",
        bull: "#95BDEC",
      },
    },
  },
  plugins: [],
};
