import { plugin } from "postcss";
import { config } from "process";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container : {
      center : true,
      padding : {
        DEFAULT : '1rem',
        md : '1.5rem',
        lg : '2rem'
      }
    }
  },
  plugin : []
}
