import React from 'react';
import Header from '@/components/Shared/Header/Header';
import LeftMenu from '@/components/Shared/LeftMenu/LeftMenu';
import RightMenu from '@/components/Shared/RightMenu/RightMenu';
import OffCanvas from '@/components/Homes/OffCanvas/OffCanvas';
import ScrollTop from '@/components/Homes/ScrollTop/ScrollTop';

const layout = ({ children }) => {
    return (
        <div className='bg-[#F2F3F5] dark:bg-[#1A2236]'>
            <Header>
                <OffCanvas />
            </Header>
            <div className='grid grid-cols-1 gap-3 py-3 sm:py-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 lg:gap-6'>
                <div className='hidden md:block'>
                    <div className='fixed left-0'>
                        <LeftMenu />
                    </div>
                </div>

                <div className='md:col-span-2 lg:col-span-3 xl:col-span-3'>{children}</div>
                <div className='hidden xl:block'>
                    <div className='fixed right-0'>
                        <RightMenu />
                    </div>
                </div>
            </div>
            <div>
                <ScrollTop />
            </div>
        </div>
    );
};

export default layout;
