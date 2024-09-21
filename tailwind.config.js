/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      colors: {
        "white-bg": "hsl(var(--main-bg))",
        "very-pale-blue-top-bg": "hsl(var(--top-bg))",
        "light-grayish-blue-card-bg": "hsl(var(--card-bg))",
        "dark-grayish-blue-text": "hsl(var(--secondary-txt))",
        "very-dark-blue-text": "hsl(var(--primary-txt))",

        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        "instagram-gradient-start": "hsl(37, 97%, 70%)",
        "instagram-gradient-end": "hsl(329, 70%, 58%)",
      },
    },
  },
  plugins: [],
};
