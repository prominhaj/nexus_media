"use client"
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null)

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "dark");
        }
    }, []);

    useEffect(() => {
        const html = document.querySelector("html");
        if (localStorage.getItem("theme") === "dark") {
            html.classList.add("dark");
            setTheme("dark");
        } else {
            html.classList.remove("dark");
            setTheme("light");
        }
    }, [theme]);

    const toggleButton = () => {
        if (localStorage.getItem("theme") === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };

    const value = [theme, toggleButton];

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;