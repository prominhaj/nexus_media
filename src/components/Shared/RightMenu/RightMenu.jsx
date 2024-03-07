import Link from 'next/link';
import React from 'react';

const RightMenu = () => {
    return (
        <div className='p-3 bg-white dark:bg-[#293145]'>
            <div className='flex items-center justify-between'>
                <h2 className='text-sm font-semibold opacity-80'>Friend Request</h2>
                <Link href={"/friend/request"}>See all</Link>
            </div>
        </div>
    );
};

export default RightMenu;