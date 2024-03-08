import PopoverCus from '@/components/Homes/Popover/PopoverCus';
import Link from 'next/link';
import React from 'react';

// Profile Items 
const profileItems = [
    {
        name: "My Profile",
        path: "/profile",
    },
    {
        name: "Account Information",
        path: "/account-information",
    },
]

const ProfileItems = ({ name, classes }) => {
    return (
        <div>
            <PopoverCus classes={classes} name={name}>
                <div className='px-3 py-2'>
                    <div className='flex flex-col'>
                        {
                            profileItems.map(item =>
                                <Link className='block px-3 dark:text-gray-300 dark:hover:text-gray-200 rounded-md py-2 text-[1.02rem dark:hover:bg-gray-400 hover:bg-gray-200 duration-300' href={item.path} key={item.path}>{item.name}</Link>
                            )
                        }
                        <button className='block px-3 text-start dark:text-gray-300 dark:hover:text-gray-200 rounded-md py-2 text-[1.02rem dark:hover:bg-gray-400 hover:bg-gray-200 duration-300'>Logout</button>
                    </div>
                </div>
            </PopoverCus>
        </div>
    );
};

export default ProfileItems;