/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            img: {
              borderRadius: "0.375rem",
            },
            a: {
              color: "#0284c7",
              "&:hover": {
                color: "#0369a1",
              },
            },
            h1: {
              marginTop: "1.5rem",
              marginBottom: "1rem",
            },
            h2: {
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            h3: {
              marginTop: "1.25rem",
              marginBottom: "0.75rem",
            },
            p: {
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
            },
            ul: {
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
            },
            ol: {
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
            },
            blockquote: {
              borderLeftColor: "#e0f2fe",
              backgroundColor: "#f0f9ff",
              borderRadius: "0.25rem",
              padding: "1rem",
              fontStyle: "normal",
              color: "#075985",
            },
            code: {
              backgroundColor: "#f1f5f9",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            pre: {
              backgroundColor: "#0f172a",
              borderRadius: "0.375rem",
              padding: "1.25rem",
              code: {
                backgroundColor: "transparent",
                padding: "0",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
