"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const StoryModal = ({ card, image }) => {
    const [isOpen, setIsOpen] = useState(false);

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
            <div onClick={() => setIsOpen(true)} className='w-full h-full transition-all duration-300 cursor-pointer max-h-58 md:max-h-62'>
                {card}
            </div>

            {/* Story Modal */}
            {
                isOpen && ReactDOM.createPortal(
                    <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-all duration-300 bg-black/60" onClick={closeModal}>
                        <div className="relative rounded-lg shadow-2xl w-[25rem] md:w-[35rem] h-[30rem] md:h-[40rem]" onClick={(e) => e.stopPropagation()}>
                            <div className='flex items-center justify-center w-full h-full'>
                                <Image src={image} width={500} height={500} className='object-cover w-full h-full transition-all duration-300 rounded-md ' alt='Image' />
                            </div>
                            {/* Close Button */}
                            <div className='absolute top-0 right-0 p-2'>
                                <button onClick={closeModal} className="p-1 rounded-full text-light-text dark:text-dark-text dark:bg-dark-bg hover:text-gray-400 bg-light-bg focus:outline-none">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default StoryModal;