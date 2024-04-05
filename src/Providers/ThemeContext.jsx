"use client"
// Import Dependencies
import React, { createContext, useEffect, useState } from 'react';
import HomePageLoading from '@/components/Loading/HomePageLoading/HomePageLoading';

// Create Context
export const ThemeContext = createContext(null);

// Define Component
const ThemeProvider = ({ children }) => {
    // State Variables
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(true);
    const getTheme = localStorage.getItem("theme");

    // Effects
    useEffect(() => {
        // Effect to set loading state and initialize theme
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "dark");
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        // Effect to toggle theme and update localStorage
        const html = document.querySelector("html");
        if (localStorage.getItem("theme") === "dark") {
            html.classList.add("dark");
            setTheme("dark");
        } else {
            html.classList.remove("dark");
            setTheme("light");
        }
        setLoading(false);
    }, [theme]);

    // Helper Function
    const toggleButton = () => {
        if (localStorage.getItem("theme") === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };

    // Context Value
    const value = [theme, toggleButton, loading];

    // Return JSX
    return (
        <ThemeContext.Provider value={value}>
            {loading ? <HomePageLoading theme={getTheme} /> : children}
        </ThemeContext.Provider>
    );
};

// Export Component
export default ThemeProvider;
