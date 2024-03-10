import { Avatar, Tooltip } from '@nextui-org/react';
import React from 'react';
import { MdVerified } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import Link from 'next/link';
import { BsThreeDots } from "react-icons/bs";
import PopoverCus from '../Popover/PopoverCus';
import { FaBookmark } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";


// Post Menu Button
const postMenuBtn = <>
    <div className='text-[#65676B] dark:text-[#B0B3B8] p-[0.625rem] hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] transition-all rounded-full duration-250'>
        <BsThreeDots className='text-2xl' />
    </div>
</>

const Post = () => {
    return (
        <div className='p-3 md:p-5 bg-white dark:bg-[#0F172A] shadow dark:shadow-2xl rounded-lg'>
            {/* Post Header */}
            <header className='flex items-center justify-between'>
                <div className='flex flex-wrap items-start gap-3'>
                    <Link href={"/"}>
                        <Avatar isBordered radius="full" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    </Link>
                    <div className='flex flex-col'>
                        <div className='flex items-center flex-wrap gap-[6px]'>
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
                <div>
                    <PopoverCus name={postMenuBtn}>
                        <div className='flex flex-col gap-2 p-2'>
                            <button className='flex p-1 rounded-md w-full items-center gap-3 duration-250 transition-all dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] text-[#050505] font-sans font-medium'>
                                <span><FaBookmark className='text-[1.25rem] dark:text-[#E7E9EC]' /></span>
                                <div className='flex flex-col items-start'>
                                    <span className='dark:text-[#E4E6EB]'>Save Post</span>
                                    <span className='text-[#65676B] dark:text-[#B0B3B8] text-[.75rem] block'>Add this to your saved items.</span>
                                </div>
                            </button>
                            <button className='flex p-1 rounded-md w-full items-center gap-3 duration-250 transition-all dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] text-[#050505] font-sans font-medium'>
                                <span><AiFillCloseSquare className='text-[1.25rem] dark:text-[#E7E9EC]' /></span>
                                <div className='flex flex-col items-start'>
                                    <span className='dark:text-[#E4E6EB]'>Hide Post</span>
                                    <span className='text-[#65676B] dark:text-[#B0B3B8] text-[.75rem] block'>See fewer posts like this.</span>
                                </div>
                            </button>
                            <button className='flex p-1 rounded-md w-full items-center gap-3 duration-250 transition-all dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] text-[#050505] font-sans font-medium'>
                                <span><IoMdPersonAdd className='text-[1.25rem] dark:text-[#E7E9EC]' /></span>
                                <div className='flex flex-col items-start'>
                                    <span className='dark:text-[#E4E6EB]'>Add Friend</span>
                                    <span className='text-[#65676B] dark:text-[#B0B3B8] text-[.75rem] block'>Add Friend Request</span>
                                </div>
                            </button>
                        </div>
                    </PopoverCus>
                </div>
            </header>
        </div>
    );
};

export default Post;