import React from 'react';
import Header from '@/components/Shared/Header/Header';
import LeftMenu from '@/components/Shared/LeftMenu/LeftMenu';
import RightMenu from '@/components/Shared/RightMenu/RightMenu';

const layout = ({ children }) => {
    return (
        <div className='bg-[#F2F3F5]'>
            <Header />
            <div className='grid gap-3 pt-5 md:grid-cols-5 md:gap-5 lg:gap-6'>
                <div>
                    <LeftMenu />
                </div>
                <div className='md:col-span-3'>{children}</div>
                <div>
                    <RightMenu />
                </div>
            </div>
        </div>
    );
};

export default layout;
