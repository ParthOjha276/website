/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bpcc: {
          card: "#F1C18A",
          navy: {
            DEFAULT: "#0B1120",
            light: "#1E293B",
          },
          gold: {
            DEFAULT: "#D97706",
            light: "#F59E0B",
            muted: "#92400E",
          },
          // UPDATED: The exact Mac Color Meter value (R236 G232 B224)
          cream: "#ECE8E0",
          grey: "#64748B",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};