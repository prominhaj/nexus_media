import Header from '@/components/Shared/Header/Header';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default layout;
