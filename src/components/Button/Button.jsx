import React from 'react';

const Button = ({ children, className }) => {
    return (
        <button className={`px-4 py-2 duration-250 transition-all font-medium text-sm rounded-lg tracking-wider ${className ? className : ""}  `}>{children}</button>
    );
};

export default Button;