const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: ['class'],
    theme: {
        extend: {
            colors: {
                'light-text': '#050505',
                'dark-text': '#E4E6EB',
                'light-bg': '#E4E6EB',
                'dark-bg': '#4B4C4F',
                'light-bg-hover': '#D8DADF',
                'dark-bg-hover': '#616161',
                'light-modal-bg': '#FFFFFF',
                'dark-modal-bg': '#0E1526'
            }
        }
    },
    plugins: [nextui()]
};
