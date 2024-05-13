"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <button onClick={handleBack} className='tracking-wider px-4 py-2 text-sm font-medium transition-colors rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-[#323236] bg-[#eaeaed] hover:bg-[#F6F6F7] text-[#18181B] dark:text-[#FAFAFA] dark:hover:bg-[#212124]'>
            Back
        </button>
    );
};

export default BackButton;