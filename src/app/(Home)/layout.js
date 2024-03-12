import React from 'react';
import Header from '@/components/Shared/Header/Header';
import LeftMenu from '@/components/Shared/LeftMenu/LeftMenu';
import OffCanvas from '@/components/Homes/OffCanvas/OffCanvas';
import ScrollTop from '@/components/Homes/ScrollTop/ScrollTop';

const layout = ({ children }) => {
    return (
        <div className='bg-light-body-bg/80 dark:bg-dark-body-bg/80'>
            <Header>
                <OffCanvas />
            </Header>
            <div className='grid grid-cols-1 gap-3 py-3 sm:py-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 lg:gap-6'>
                <div className='hidden md:block'>
                    <div className='fixed left-0'>
                        <LeftMenu />
                    </div>
                </div>

                {/* Children */}
                <div className='md:col-span-2 lg:col-span-3 xl:col-span-4'>{children}</div>
            </div>
            <div>
                <ScrollTop />
            </div>
        </div>
    );
};

export default layout;
