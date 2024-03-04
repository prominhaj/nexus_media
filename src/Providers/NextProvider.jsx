'use client'
import { NextUIProvider } from '@nextui-org/react';

const NextProvider = ({ children }) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
};

export default NextProvider;