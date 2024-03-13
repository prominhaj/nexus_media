import React from 'react';
import { Poppins } from 'next/font/google';
import { FaInfoCircle } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa6';
import { IoTime } from 'react-icons/io5';
import InfoItem from '@/components/Profiles/PostsPage/InfoItem/InfoItem';

const poppins = Poppins({
    weight: ['200', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap'
});

const PostsPage = ({ params }) => {
    return (
        <div className='grid gap-3 py-5 md:gap-5 md:grid-cols-3'>
            <div
                className={`bg-white dark:bg-[#293145] rounded-md shadow-lg p-3 ${poppins.className}`}
            >
                <h2 className='text-xl font-medium text-light-text dark:text-dark-text'>Info</h2>
                <div className='flex flex-col gap-3 pt-3 md:gap-5'>
                    <InfoItem
                        icon={<FaInfoCircle className='text-xl' />}
                        name='Work From'
                        value='Web Developer'
                    />
                    <InfoItem
                        icon={<MdHome className='text-xl' />}
                        name='Home'
                        value='Bogura,Bangladesh'
                    />
                    <InfoItem icon={<FaHeart className='text-xl' />} name='Single' value='Single' />
                    <InfoItem
                        icon={<IoTime className='text-xl' />}
                        name='Join on'
                        value='December 2018'
                    />
                </div>
            </div>
            <div className='md:col-span-2'>Posts Section</div>
        </div>
    );
};

export default PostsPage;
