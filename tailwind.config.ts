import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       background: "#F7F7F7",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter" ,"sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
