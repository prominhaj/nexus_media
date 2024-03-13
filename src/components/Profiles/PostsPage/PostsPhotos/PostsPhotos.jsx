import Link from 'next/link';
import React from 'react';

const PostsPhotos = () => {
    return (
        <div className='bg-white dark:bg-[#293145] rounded-md shadow-lg p-3'>
            <Link href={`/profile/1/photos`} className='block text-xl font-medium text-light-text dark:text-dark-text'>Photos</Link>
        </div>
    );
};

export default PostsPhotos;