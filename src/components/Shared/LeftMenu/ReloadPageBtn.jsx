"use client";
import { MdAutorenew } from 'react-icons/md';

const ReloadPageBtn = () => {

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <button onClick={reloadPage} className="w-full px-3 hover:bg-[#F2F2F2] dark:text-dark-text text-light-text dark:hover:bg-[#343536] rounded-md py-2 text-[1.02rem transition-all duration-300">
            <span className="flex items-center gap-2 sm:gap-3">
                <span className="p-2 rounded-full dark:bg-dark-bg bg-light-bg">
                    <MdAutorenew className="text-2xl" />
                </span>
                <span className="text-[1rem] font-medium">
                    Latest Feed
                </span>
            </span>
        </button>
    );
};

export default ReloadPageBtn;