import { Tooltip } from '@nextui-org/react';
import React from 'react';
import { MdVerified } from 'react-icons/md';

const VerifiedBadges = () => {
    return (
        <>
            {/* Verified By Admin */}
            <Tooltip
                showArrow
                placement={"top-start"}
                content={"Verified by Admin"}
                className='shadow-xl'
                classNames={{
                    base: [
                        // arrow color
                        "before:bg-gray-200 dark:before:bg-[#18181B]",
                    ],
                    content: [
                        "py-2 px-4",
                        "text-black dark:text-neutral-300 font-sans",
                    ],
                }}
            >
                <button>
                    <MdVerified className='text-blue-600 dark:text-blue-500' />
                </button>
            </Tooltip>
        </>
    );
};

export default VerifiedBadges;