"use client";
import { useState, useEffect } from 'react';
import { HiMiniChevronDoubleUp } from "react-icons/hi2";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button when user scrolls down 200px
        const toggleVisibility = () => {
            if (window.pageYOffset > 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && (
                <div className="fixed z-40 bottom-20 md:bottom-8 right-8">
                    <button onClick={scrollToTop} className="px-3 py-2 text-white bg-gray-500 rounded-lg shadow-lg dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-400">
                        <HiMiniChevronDoubleUp className='text-2xl' />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ScrollTop;