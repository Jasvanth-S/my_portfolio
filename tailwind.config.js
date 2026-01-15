/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#00F0FF", // Neon Blue
                secondary: "#1E1E1E", // Gunmetal Grey (for cards in dark mode)
                background: {
                    DEFAULT: "#050505", // Dark mode background
                    light: "#F5F5F5", // Light mode background
                },
                text: {
                    DEFAULT: "#E0E0E0", // Dark mode text
                    light: "#1a1a1a", // Light mode text
                },
            },
            fontFamily: {
                // Add fonts if needed, e.g. Inter or Roboto
            }
        },
    },
    plugins: [],
}
