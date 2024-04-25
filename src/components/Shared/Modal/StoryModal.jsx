"use client";
import { getSingleStory } from '@/server/story';
import { Avatar } from '@nextui-org/react';
import moment from 'moment';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const StoryModal = ({ card, item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [story, setStory] = useState({})

    const handleStoryModal = async (item) => {
        setIsOpen(true)

        // Find Single Story
        const data = await getSingleStory(item._id);
        setStory(data)
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target === event.currentTarget) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {/* Story Modal Button */}
            <div onClick={() => handleStoryModal(item)} className='w-full h-full transition-all duration-300 cursor-pointer max-h-58 md:max-h-62'>
                {card}
            </div>

            {/* Story Modal */}
            {
                isOpen && ReactDOM.createPortal(
                    <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-all duration-500 bg-black/60" onClick={closeModal}>
                        <div className="relative rounded-lg shadow-2xl w-[25rem] md:w-[35rem] h-[30rem] md:h-[40rem]" onClick={(e) => e.stopPropagation()}>
                            <div className='relative flex items-center justify-center w-full h-full'>
                                <div className='absolute top-0 left-0 flex items-center justify-between w-full p-3 rounded-md text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg'>
                                    <div className='flex items-center gap-3'>
                                        <Avatar isBordered src={story?.profilePhoto} />
                                        <div>
                                            <h2>{story?.name}</h2>
                                            <p>{moment(story?.Date).format('MMM DD, YYYY h:mm A')}</p>
                                        </div>
                                    </div>

                                    {/* Close Button */}
                                    <button onClick={closeModal} className="p-1 rounded-full text-light-text dark:text-dark-text dark:bg-dark-bg hover:text-gray-400 bg-light-bg focus:outline-none">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <Image src={item?.storyPhoto} width={600} loading='lazy' height={600} className='object-cover w-full h-full transition-all duration-300 rounded-md ' alt='Image' />
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default StoryModal;