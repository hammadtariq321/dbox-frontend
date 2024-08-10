/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/forms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#088395",
        "primary-hover": "#0a97a6",
        secondary: "#f1f1f1",
        "secondary-hover": "#dfdfdf",
        success: "#4CAF50",
        "success-hover": "#45A049",
        danger: "#FF5252",
        "danger-hover": "#FF1744",
      },
    },
  },
  plugins: [],
};
