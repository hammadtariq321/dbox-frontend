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
        primary: "#00B4D3",
        "primary-hover": "#26c7e3",
        secondary: "#1C3D5A",
        "secondary-hover": "#365F81",
        success: "#4CAF50",
        "success-hover": "#45A049",
        danger: "#FF5252",
        "danger-hover": "#FF1744",
      },
    },
  },
  plugins: [],
};
