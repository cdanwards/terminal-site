import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      transitionDelay: {
        "75": "75ms",
        "150": "150ms",
        "300": "300ms",
      },
      colors: {
        "terminal-green": "var(--terminal-green)",
        "terminal-blue": "var(--terminal-blue)",
        "terminal-bg": "var(--terminal-bg)",
        "terminal-text": "var(--terminal-text)",
      },
      ringColor: {
        "terminal-green": "var(--terminal-green)",
      },
      zIndex: {
        "60": "60",
        "65": "65",
        "70": "70",
      },
    },
  },
  plugins: [],
};
export default config;
