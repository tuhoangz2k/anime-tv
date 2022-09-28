/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#b71c1c',
                greensSecondary: '#b5e745',
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
