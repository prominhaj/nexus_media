"use client"
import React, { createContext, useState } from 'react';

export const ColorContext = createContext(null)

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState("");
    const [bgColor, setBgColor] = useState("");

    const value = { color, setColor, bgColor, setBgColor };

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;