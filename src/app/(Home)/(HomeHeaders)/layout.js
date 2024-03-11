import RightMenu from '@/components/Shared/RightMenu/RightMenu';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-4'>
            <div className='xl:col-span-3'>{children}</div>

            {/* Right Menu */}
            <div className='hidden xl:block'>
                <div className='fixed right-0'>
                    <RightMenu />
                </div>
            </div>
        </div>
    );
};

export default layout;
