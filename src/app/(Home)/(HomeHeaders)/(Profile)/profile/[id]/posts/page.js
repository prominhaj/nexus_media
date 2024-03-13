import React from 'react';
import { Poppins } from 'next/font/google';
import { FaInfoCircle } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa6';
import { IoTime } from 'react-icons/io5';
import InfoItem from '@/components/Profiles/PostsPage/InfoItem/InfoItem';
import { Avatar } from '@nextui-org/react';
import { IoSearch } from 'react-icons/io5';

const poppins = Poppins({
    weight: ['200', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap'
});

const PostsPage = ({ params }) => {
    return (
        <div className='grid grid-cols-1 gap-3 py-5 md:gap-5 lg:grid-cols-3'>
            <div
                className={`bg-white dark:bg-[#293145] rounded-md shadow-lg p-3 ${poppins.className}`}
            >
                <h2 className='text-xl font-medium text-light-text dark:text-dark-text'>Info</h2>
                {/* Bio */}
                <div></div>

                <div></div>
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
            <div className='lg:col-span-2'>
                <div className='bg-white dark:bg-[#293145] rounded-md shadow-lg p-3 flex items-center gap-3 md:gap-5'>
                    <Avatar
                        className='hidden sm:block'
                        isBordered
                        color='primary'
                        src='http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F771742%2Fpexels-photo-771742.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1&w=128&q=75'
                    />
                    <div className='flex items-center w-full rounded shadow dark:bg-dark-bg'>
                        <span className='px-2'>
                            <IoSearch className='text-xl' />
                        </span>
                        <input
                            className=' px-3 py-[0.375rem] text-base outline-none flex-1 dark:bg-transparent text-light-text dark:text-dark-text bg-light-bg'
                            type='search'
                            placeholder='Search your posts...'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostsPage;
