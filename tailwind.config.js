/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Oswald", "sans-serif"],
        body: ["Raleway", "sans-serif"], // Use 'body' for regular text

        // Add more custom font families if needed
      },
    },
  },
  plugins: [],
};
