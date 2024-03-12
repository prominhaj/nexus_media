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

const ProfileItems = ({ name, classes, bottom }) => {
    return (
        <div>
            <PopoverCus classes={classes} name={name} bottom={bottom}>
                <div className='px-3 py-2'>
                    <div className='flex flex-col'>
                        {
                            profileItems.map(item =>
                                <Link className='block px-3 dark:text-dark-text text-light-text rounded-md py-2 text-[1.02rem dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-300' href={item.path} key={item.path}>{item.name}</Link>
                            )
                        }
                        <button className='block text-start px-3 dark:text-dark-text text-light-text rounded-md py-2 text-[1.02rem dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-300'>Logout</button>
                    </div>
                </div>
            </PopoverCus>
        </div>
    );
};

export default ProfileItems;