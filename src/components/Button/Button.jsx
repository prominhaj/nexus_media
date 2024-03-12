import React from 'react';

const Button = ({ children, className }) => {
    return (
        <button className={`px-4 py-[6px] font-semibold text-sm rounded-lg tracking-wider ${className}`}>{children}</button>
    );
};

export default Button;