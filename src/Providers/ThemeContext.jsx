"use client"
// Import Dependencies
import React, { createContext, useEffect, useState } from 'react';

// Create Context
export const ThemeContext = createContext(null);

// Define Component
const ThemeProvider = ({ children }) => {
    // State Variables
    const [theme, setTheme] = useState("light");

    // Effects
    useEffect(() => {
        // Effect to set loading state and initialize theme
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "dark");
        }
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
    const value = [theme, toggleButton];

    // Return JSX
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Export Component
export default ThemeProvider;
