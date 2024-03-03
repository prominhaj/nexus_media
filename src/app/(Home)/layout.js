import React from 'react';
import Header from '@/components/Shared/Header/Header';
import LeftMenu from '@/components/Shared/LeftMenu/LeftMenu';
import RightMenu from '@/components/Shared/RightMenu/RightMenu';

const layout = ({ children }) => {
    return (
        <div className='flex w-full gap-3 sm:gap-4 md:gap-6'>
            <div className='w-[3.75rem] md:w-[6.25rem] lg:w-[17.5rem] xl:w-[21.875rem] 2xl:w-[25rem]'>
                <LeftMenu />
            </div>
            <div className='flex flex-col flex-1 gap-3 sm:gap-4 md:gap-6'>
                <Header />
                <div className='flex justify-end gap-3 sm:gap-4 md:gap-6'>
                    <div className='flex-1'>{children}</div>
                    <div className='w-[2.5rem] md:w-[5rem] lg:w-[16.25rem] xl:w-[20rem] 2xl:w-[23.75rem]'>
                        <RightMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layout;
