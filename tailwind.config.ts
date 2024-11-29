import { tree } from "next/dist/build/templates/app-page";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container : {
          center : true ,
          padding : "15px"
      },
      colors: {
        Accent : "#00FFFF",
      },
    },
  },
  plugins: [],
};
export default config;
