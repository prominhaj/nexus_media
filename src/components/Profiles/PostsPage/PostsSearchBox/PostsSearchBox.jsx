import { Avatar } from '@nextui-org/react';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

const PostsSearchBox = () => {
    return (
        <div>
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
    );
};

export default PostsSearchBox;