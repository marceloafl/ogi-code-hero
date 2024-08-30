import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        smoke: "#8E8E8E",
        "dark-smoke": "#555555",
        snow: "#F5F5F5",
        "dark-snow": "#E5E5E5",
        "dark-blue": "#167ABC",
        shadow: "#00000033",
      },
      boxShadow: {
        "custom-light": "0px 0px 5px rgba(0, 0, 0, 0.2)",
        "custom-dark": "0px 0px 10px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
