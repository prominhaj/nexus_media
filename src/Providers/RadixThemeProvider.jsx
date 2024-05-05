"use client";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const RadixThemeProvider = ({ children }) => {
    return (
        <Theme>
            {children}
        </Theme>
    );
};

export default RadixThemeProvider;