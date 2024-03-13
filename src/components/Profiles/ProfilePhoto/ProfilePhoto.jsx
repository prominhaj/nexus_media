import Image from 'next/image';
import React from 'react';
import { FaCamera } from 'react-icons/fa';

const ProfilePhoto = () => {
    return (
        <>
            <div className='relative w-32 h-32 overflow-hidden rounded-full shadow-2xl cursor-pointer md:w-40 md:h-40 group ring-4 ring-blue-500 dark:ring-pink-500 -top-20 lg:-top-10'>
                <Image
                    width={100}
                    height={100}
                    className='z-20 object-cover w-full h-full border-2 rounded-full'
                    src={
                        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }
                    alt='Profile Photo'
                />
                <div className='absolute top-0 bottom-0 left-0 right-0 z-40 hidden w-full h-full transition-all group-hover:duration-500 bg-gray-800/50 dark:bg-gray-200/50 group-hover:block'>
                    <span className='flex items-center justify-center w-full h-full text-gray-300 dark:text-gray-900'>
                        <FaCamera className='text-2xl' />
                    </span>
                </div>
            </div>
        </>
    );
};

export default ProfilePhoto;