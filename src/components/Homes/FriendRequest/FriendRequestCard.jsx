import Link from 'next/link';
import React from 'react';
import Button from '../../Global/cookies/Button/Button';
import { Avatar } from '@nextui-org/react';

const FriendRequestCard = () => {
    return (
        <div className='lg:px-1'>
            <Link href={`/`} className='block'>
                <div className='flex flex-wrap items-center gap-1 lg:gap-3'>
                    <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-gray-800 dark:text-gray-200'>Jone Leo</h2>
                        <span className='text-sm font-medium text-gray-500'>12 mutual friends</span>
                    </div>
                </div>
            </Link>
            <div className='flex flex-wrap items-center gap-1 pt-3 lg:gap-3'>
                <Button className={`bg-gradient-to-r from-blue-600 to-blue-500 text-white`}>Confirm</Button>
                <Button className={`bg-gradient-to-r from-zinc-600 to-slate-500 text-white`}>Cancel</Button>
            </div>
        </div>
    );
};

export default FriendRequestCard;