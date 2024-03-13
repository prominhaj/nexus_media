import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Feck Photos
const photos = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/16691759/pexels-photo-16691759/free-photo-of-boat-with-tent-tied-to-wooden-posts-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/16691757/pexels-photo-16691757/free-photo-of-gondolas-on-sea-shore-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/16321682/pexels-photo-16321682/free-photo-of-pond-in-botanical-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/9799708/pexels-photo-9799708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/2273580/pexels-photo-2273580.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 6,
        image: 'https://images.pexels.com/photos/16753341/pexels-photo-16753341/free-photo-of-toy-car-and-slides-on-beach.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
]

const PostsPhotos = () => {
    return (
        <div className='bg-white dark:bg-[#293145] rounded-md shadow-lg p-3'>
            <div className='flex flex-wrap items-center justify-between'>
                <h2 className='text-xl font-medium text-light-text dark:text-dark-text'>Photos</h2>
                <Link href={`/profile/1/photos`} className='block py-1 rounded-md hover:bg-light-bg-hover duration-250 transition-all px-2 dark:hover:bg-dark-bg-hover text-[#0064D1] dark:text-[#5AA7FF]'>See All Photos</Link>
            </div>
            <div className='grid grid-cols-3 gap-2 pt-3'>
                {
                    photos.map((photo, index) => <Link href={`/posts/1`} className='block' key={photo.id}>
                        <Image src={photo.image} width={100} height={100} className='object-cover w-full h-full rounded' alt={`Photo ${index}`} />
                    </Link>)
                }
            </div>
        </div>
    );
};

export default PostsPhotos;