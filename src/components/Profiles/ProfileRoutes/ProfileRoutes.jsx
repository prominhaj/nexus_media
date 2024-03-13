'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


// Profile Menu Routes
const profileMenuItems = [
    {
        id: 1,
        name: 'Posts',
        path: '/posts'
    },
    {
        id: 2,
        name: 'Photos',
        path: '/photos'
    },
    {
        id: 3,
        name: 'Stories',
        path: '/stories'
    },
    {
        id: 4,
        name: 'Friends',
        path: '/friends'
    },
    {
        id: 5,
        name: 'About',
        path: '/about'
    }
];

const ProfileRoutes = () => {
    const path = usePathname();

    return (
        <div className='flex flex-wrap items-center justify-center gap-3 md:gap-5'>
            {
                profileMenuItems.map(item =>
                    <Link className={`block px-3 md:px-4 rounded-tr-lg rounded-tl-lg font-medium py-3 text-[1.02rem dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-300 ${path === `/profile/1${item.path}` ? "text-[#0866FF] dark:text-[#0866FF] border-b-2 border-[#0866FF]" : "dark:text-dark-text text-light-text"}`} href={`/profile/1${item.path}`} key={item.id}>{item.name}</Link>
                )
            }
        </div>
    );
};

export default ProfileRoutes;