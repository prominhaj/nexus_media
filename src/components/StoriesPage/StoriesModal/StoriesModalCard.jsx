import StoryModal from '@/components/Shared/Modal/StoryModal';
import { Avatar } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StoriesModalCard = ({ story }) => {
    const cardContent = <>
        <div className='relative w-full h-full before:absolute before:w-full before:h-full before:bg-black/30 before:rounded-md'>
            <Image src={story.image} width={200} height={200} className='object-cover w-full h-full rounded-md' alt='Stories' />
            <div className='absolute z-10 w-full bottom-[8%]'>
                <div className='flex flex-col items-center gap-3'>
                    <Link href={`/profile/1`} className='block'>
                        <Avatar color="success" isBordered src={story.image} />
                    </Link>
                    <h6 className='font-medium text-gray-200'>{story.name}</h6>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <StoryModal key={story.id} image={story.image} card={cardContent} />
        </>
    );
};

export default StoriesModalCard;