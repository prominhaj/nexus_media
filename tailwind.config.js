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
                'dark-bg': '#3A3B3C',
                'light-bg-hover': '#D8DADF',
                'dark-bg-hover': '#616161',
                'light-modal-bg': '#FFFFFF',
                'dark-modal-bg': '#0E1526',
                'light-header-bg': '#FFFFFF',
                'dark-header-bg': '#242526',
                'light-body-bg': '#F0F2F5',
                'dark-body-bg': '#18191A',
                'light-post-bg': '#FFFFFF',
                'dark-post-bg': '#242526',
                'light-card-bg': '#FFFFFF',
                'dark-card-bg': '#242526',
                'light-menu-bg': '#FFFFFF',
                'dark-menu-bg': '#242526'
            }
        }
    },
    plugins: [nextui()]
};
