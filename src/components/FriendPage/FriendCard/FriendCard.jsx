import Button from '@/components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = () => {
    return (
        <div className='hover:scale-[1.02] duration-300 transition-all border rounded-lg shadow-lg bg-light-post-bg dark:bg-dark-card-bg dark:border-[#3E4042]'>
            {/* Image */}
            <Link href={"/"} className='block max-h-[12rem]'>
                <Image src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={150} height={150} className='object-cover w-full h-full rounded-tl-lg rounded-tr-lg' alt='Friend Image' />
            </Link>

            {/* Card body */}
            <div className='p-3'>
                <div>
                    <h2 className='font-[500] text-base text-light-text dark:text-dark-text block'>Jahid Hasan</h2>
                    <span className='dark:text-[#B0B3B8] text-sm text-[#65676B]'>24 mutual friends</span>
                </div>

                {/* Card Actions */}
                <div className='flex flex-col gap-3 pt-3'>
                    <Button className="w-full text-white bg-primary-400">Confirm</Button>
                    <Button className="w-full text-light-text dark:bg-dark-bg dark:text-dark-text bg-light-bg">Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default FriendCard;