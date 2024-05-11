"use client";
import { useState } from 'react';
import { HiMiniBars3BottomRight, HiXMark } from "react-icons/hi2";
import dynamic from 'next/dynamic';

// Dynamic Import
const LeftMenu = dynamic(
    () => import('../../Shared/LeftMenu/LeftMenu'),
    {
        loading: () => <p>Loading...</p>,
    }
)

const OffCanvas = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex">
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (<>
                    <button className='duration-300 text-light-text text-2xl dark:text-dark-text bg-light-bg hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover dark:bg-dark-bg p-2.5 rounded-full'>
                        <HiXMark className='text-2xl' />
                    </button>
                </>) : <>
                    <button className='duration-300 text-light-text text-2xl dark:text-dark-text bg-light-bg hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover dark:bg-dark-bg p-2.5 rounded-full'>
                        <HiMiniBars3BottomRight className='text-2xl' />
                    </button>
                </>}
            </div>
            {/* Off-canvas menu */}
            <div className={`fixed inset-y-0 left-0 z-50 w-72 shadow-lg bg-white dark:shadow-gray-800 dark:bg-gray-900 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Your menu content here */}
                <div className='flex flex-col justify-center' onClick={() => setIsMenuOpen(false)}>
                    <LeftMenu />
                </div>
            </div>
        </div>
    );
};

export default OffCanvas;