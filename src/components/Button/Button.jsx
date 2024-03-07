import React from 'react';

const Button = ({ children, className }) => {
    return (
        <button className={`px-4 py-[6px] rounded-2xl font-semibold text-sm tracking-wider ${className}`}>{children}</button>
    );
};

export default Button;