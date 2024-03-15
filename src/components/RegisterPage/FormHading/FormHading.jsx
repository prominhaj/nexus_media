import React from 'react';

const FormHading = ({ children }) => {
    return (
        <>
            <h4 className='text-lg font-medium tracking-wider text-center text-gray-300 md:text-xl'>
                {children}
            </h4>
        </>
    );
};

export default FormHading;