import React from 'react';
import Header from '@/components/Shared/Header/Header';
import LeftMenu from '@/components/Shared/LeftMenu/LeftMenu';
import RightMenu from '@/components/Shared/RightMenu/RightMenu';
import OffCanvas from '@/components/OffCanvas/OffCanvas';
import ScrollTop from '@/components/ScrollTop/ScrollTop';

const layout = ({ children }) => {
    return (
        <div className='bg-[#F2F3F5] dark:bg-[#1A2236]'>
            <Header>
                <OffCanvas></OffCanvas>
            </Header>
            <div className='grid gap-3 pt-5 md:grid-cols-3 lg:grid-cols-5 md:gap-5 lg:gap-6'>
                <div className='hidden md:block'>
                    <LeftMenu />
                </div>

                <div className='md:col-span-2 lg:col-span-3'>{children}</div>
                <div className='hidden lg:block'>
                    <RightMenu />
                </div>
            </div>
            <div>
                <ScrollTop />
            </div>
        </div>
    );
};

export default layout;
