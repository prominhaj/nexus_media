"use client";
import useColor from '@/Hooks/useColor';
import { MdAutorenew } from 'react-icons/md';

const ReloadPageBtn = () => {
    const { color } = useColor();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <button onClick={reloadPage} className="w-full px-3 hover:bg-[#F2F2F2] dark:text-gray-300 dark:hover:bg-[#3A3B3C] rounded-md py-2 text-[1.02rem transition-all duration-300">
            <span className="flex items-center gap-2 sm:gap-3">
                <span className={`bg-gray-300 dark:bg-gray-600 rounded-full p-2 ${color}`}>
                    <MdAutorenew className="text-2xl" />
                </span>
                <span className="text-lg font-medium">
                    Latest Feed
                </span>
            </span>
        </button>
    );
};

export default ReloadPageBtn;