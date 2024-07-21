import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./organisms/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A61E24',
        'secondary': '#DF2831',
      },
      fontFamily: {
        'urbanist': ['"Urbanist"', 'sans-serif'],
        'lexend': ['"Lexend"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
