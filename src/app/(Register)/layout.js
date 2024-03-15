import RegisterBg from '@/components/RegisterPage/RegisterBg/RegisterBg';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <RegisterBg>{children}</RegisterBg>
        </div>
    );
};

export default layout;
