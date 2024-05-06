"use client";
import PopoverCus from '@/components/Homes/Popover/PopoverCus';
import Link from 'next/link';
import Logout from '../Logout/Logout';
import useAuth from '@/Hooks/useAuth';
import { Avatar } from '@radix-ui/themes';

// Profile Items 
const profileItems = [
    {
        name: "My Profile",
        path: "/profile/1/posts",
    },
    {
        name: "Account Information",
        path: "/account-information",
    },
]

const ProfileItems = ({ classes, bottom }) => {
    const { status, user } = useAuth();

    console.log(status, user);
    const name = <>
        <Avatar src="" variant="solid" radius='full' color="cyan" fallback="A" />
    </>

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
                        {
                            user ? <Logout>
                                <button className='block text-start px-3 w-full dark:text-dark-text text-light-text rounded-md py-2 text-[1.02rem dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-300'>Logout</button>
                            </Logout> : <Link className='block text-start px-3 w-full dark:text-dark-text text-light-text rounded-md py-2 text-[1.02rem dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-300' href="/login">Login</Link>
                        }

                    </div>
                </div>
            </PopoverCus>
        </div>
    );
};

export default ProfileItems;