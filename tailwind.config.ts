import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#78DD82",
        "background": "#282C33",
        "gray":"#ABB2BF",
        "navbar":"#202227",
      },
    },
  },
  plugins: [],
};
export default config;
