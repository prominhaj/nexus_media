import FriendRequestCard from '@/components/FriendRequest/FriendRequestCard';
import Link from 'next/link';
import React from 'react';

const RightMenu = () => {
    return (
        <div className='sticky top-0 p-5 bg-white dark:bg-[#293145]'>
            <div>
                <div className='flex flex-wrap items-center justify-between gap-2'>
                    <h2 className='text-sm font-semibold opacity-80'>Friend Request</h2>
                    <Link className='text-blue-600 dark:text-blue-400' href={"/friend/request"}>See all</Link>
                </div>
                <div className='py-5'>
                    <FriendRequestCard />
                </div>
            </div>
        </div>
    );
};

export default RightMenu;