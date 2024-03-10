import { Avatar, Tooltip } from '@nextui-org/react';
import React from 'react';
import { MdVerified } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import Link from 'next/link';

const Post = () => {
    return (
        <div className='p-3 md:p-5 bg-white dark:bg-[#0F172A] shadow dark:shadow-2xl rounded-lg'>
            <div className='flex items-start gap-3'>
                <Link href={"/"}>
                    <Avatar isBordered radius="full" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                </Link>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-[6px]'>
                        <Link href={"/"} className='block text-[#050505] dark:text-[#E4E6EB] font-medium font-sans'>
                            <span>Shakib Al Hasan</span>
                        </Link>

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
                    </div>
                    <div className='flex items-center gap-[0.625rem] text-[#65676B] dark:text-[#B0B3B8] font-sans'>
                        <Tooltip
                            placement={"bottom"}
                            content={"10 March 2024"}
                        >

                            <button className='text-[.75rem] font-medium'>1 h</button>
                        </Tooltip>
                        <span className='text-[.75rem] font-medium'>
                            <IoMdPersonAdd />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;