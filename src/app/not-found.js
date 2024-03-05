import Link from 'next/link';
import React from 'react';
import notFoundImg from '@/assets/404-Page.png';
import Image from 'next/image';

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <Image src={notFoundImg} width={600} height={600} alt='Not Found Image' />
                <h2 className='text-xl font-semibold md:text-3xl'>Page Not Found</h2>
                <Link
                    className='block px-3 py-1 mt-4 text-white bg-blue-500 rounded md:py-3 md:px-5'
                    href='/'
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
