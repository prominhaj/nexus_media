import React from 'react';
import './TypingLoading.css'

const TypingLoading = () => {
    return (
        <div class='flex space-x-2 justify-center rounded-2xl py-[10px] ms-auto w-16 bg-gray-400 dark:bg-black items-center'>
            <div class='h-2 w-2 bg-gray-200 dark:bg-gray-200 rounded-full animate-bounce [animation-delay:-0.3s] animation-duration-200'></div>
            <div class='h-2 w-2 bg-gray-300 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]  animation-duration-300'></div>
            <div class='h-2 w-2 bg-gray-600 dark:bg-gray-600 rounded-full animate-bounce animation-duration-500'></div>
        </div>
    );
};

export default TypingLoading;