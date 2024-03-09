import ContactId from '@/components/Homes/ContactId/ContactId';
import FriendRequestCard from '@/components/Homes/FriendRequest/FriendRequestCard';
import Link from 'next/link';
import React from 'react';

const RightMenu = () => {
    return (
        <div className='sticky top-0 p-5 bg-white dark:bg-[#0F172A] rounded-lg'>
            <div>
                <div className='flex flex-wrap items-center justify-between gap-2 pb-2'>
                    <h2 className='text-sm font-semibold opacity-80'>Friend Request</h2>
                    <Link className='text-blue-600 dark:text-blue-400' href={"/friend/request"}>See all</Link>
                </div>
                <div className='flex flex-col gap-5 py-5'>
                    <FriendRequestCard />
                    <FriendRequestCard />
                    <FriendRequestCard />
                </div>
                <div className='py-5'>
                    <h2 className='pb-2 text-sm font-semibold opacity-80'>Contacts</h2>
                    <div className='overflow-y-auto h-[600px] flex flex-col gap-5 py-5'>
                        <ContactId />
                        <ContactId />
                        <ContactId />
                        <ContactId />
                        <ContactId />
                        <ContactId />
                        <ContactId />
                        <ContactId />
                        <ContactId />
                        <ContactId />
                        <ContactId />
                        <ContactId />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightMenu;