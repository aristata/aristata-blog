import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      english: ["IAMAPLAYER"],
      korean: ["omyu_pretty"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
export default config
