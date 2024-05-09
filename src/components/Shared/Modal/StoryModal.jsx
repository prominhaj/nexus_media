"use client";
import ModalCus from '@/components/Homes/ModalCus/ModalCus';
import { getSingleStory } from '@/server/story';
import { Avatar, Skeleton } from '@radix-ui/themes';
import moment from 'moment';
import Image from 'next/image';
import { useState } from 'react';

const StoryModal = ({ item }) => {
    const [story, setStory] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSingleStory = async (id) => {
        setLoading(true);
        const singleStory = await getSingleStory(id);
        setStory(singleStory);
        setLoading(false);
    }

    const storyButton = <>
        <div onClick={() => handleSingleStory(item._id)}>
            <Image
                src={item?.storyImage?.photoUrl}
                width={50}
                height={50}
                className='rounded-full transition-all duration-300 w-[3.125rem] h-[3.125rem] border-[3px] border-blue-400 dark:border-blue-500'
                alt="Image"
            />
        </div>
    </>

    const modalTitle = <>
        {
            loading ? (
                <div className='flex items-start gap-3'>
                    <Skeleton className='!rounded-full' width="40px" height="40px" />
                    <div className='flex flex-col gap-2'>
                        <Skeleton width="200px" height="18px" />
                        <Skeleton width="150px" height="12px" />
                    </div>
                </div>
            ) : (
                <div className='flex items-center gap-3'>
                    <Avatar
                        className='object-cover border-2 border-gray-500'
                        radius='full'
                        src={story?.image?.profileURL}
                        fallback={story?.name?.slice(0, 1)}
                    />
                    <div className='text-sm font-normal'>
                        <h2 className='font-medium'>{story?.name}</h2>
                        <p>
                            <small>
                                {moment(story?.createdAt).format('MMM DD, YYYY h:mm A')}
                            </small>
                        </p>
                    </div>
                </div>
            )
        }
    </>

    return (
        <>
            <ModalCus buttonClass="w-full" name={storyButton} modalTitle={modalTitle} closeHidden={true}>
                {
                    loading ? (
                        <div>
                            <Skeleton width="450px" height="200px" />
                        </div>
                    ) : (
                        <Image src={story?.storyImage?.photoUrl} width={400} loading='lazy' height={400} className='object-cover w-full min-h-[18rem] md:min-h-[20rem] max-h-[20rem] md:max-h-[25rem] transition-all duration-300 rounded-md' alt='Image' />
                    )
                }
            </ModalCus>
        </>
    );
};

export default StoryModal;