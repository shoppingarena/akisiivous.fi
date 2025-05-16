// 1. First, let's update tailwind.config.js to enable dark mode
// tailwind.config.js
export default {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/app/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // This enables class-based dark mode instead of media queries
    theme: {
        extend: {},
    },
    plugins: [],
}