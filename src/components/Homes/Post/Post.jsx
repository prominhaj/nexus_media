"use client"
import { Avatar, Tooltip } from '@nextui-org/react';
import React, { useState } from 'react';
import { MdVerified } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import Link from 'next/link';
import { BsThreeDots } from "react-icons/bs";
import PopoverCus from '../Popover/PopoverCus';
import { FaBookmark } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import Image from 'next/image';
import { FaRegCommentAlt } from "react-icons/fa";

// Import All Reactions
import like from '@/assets/Reactions/like.svg';
import love from '@/assets/Reactions/love.svg';
import care from '@/assets/Reactions/care.svg';
import haha from '@/assets/Reactions/haha.svg';
import sad from '@/assets/Reactions/sad.svg';
import angry from '@/assets/Reactions/angry.svg';
import wow from '@/assets/Reactions/wow.svg';

// Post Menu Button
const postMenuBtn = <>
    <div className='text-[#65676B] dark:text-[#B0B3B8] p-[0.625rem] hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] transition-all rounded-full duration-250'>
        <BsThreeDots className='text-2xl' />
    </div>
</>

const description = `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex accusantium libero maiores eveniet obcaecati ullam, incidunt quisquam, mollitia voluptatem repellendus voluptate odio optio expedita fugit facilis totam, debitis tempora illo? Omnis pariatur ullam odio eos voluptate, in, at architecto reiciendis dignissimos debitis sed explicabo ut autem. Recusandae dicta esse quisquam libero animi est laudantium fugit voluptates blanditiis sint! In a vel aperiam at eius corrupti molestiae quod sint aut porro! Saepe laudantium a quam, placeat asperiores cum, nesciunt quo, soluta enim nulla praesentium ex laborum iste cupiditate reiciendis aut ea veniam. Veritatis reprehenderit voluptates tempore, error officia ad expedita magnam.
`
// All Reactions Items
const reactions = [
    like,
    love,
    care,
    haha,
    sad,
    angry,
    wow
]

const Post = () => {
    const [showDescription, setShowDescription] = useState(false);

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
            {/* Post Body Image */}
            <div className='py-3'>
                {/* Description */}
                <div className='pb-3'>
                    <div className='text-[#050505] dark:text-[#E4E6EB] break-words'>
                        {description && description.length > 150 ? (
                            showDescription ? description : <>
                                {description.slice(0, 150)}... <button onClick={() => setShowDescription(true)} className='font-medium transition-all duration-300 hover:underline text-[#050505] dark:text-[#E4E6EB]'>See more</button>
                            </>
                        ) : (
                            description
                        )}
                    </div>
                </div>

                {/* Image */}
                <div className='flex justify-start bg-[#242526]/10'>
                    <div className='w-full min-h-full max-h-[31.25rem]'>
                        <Image width={500} height={500} className='object-cover w-full h-full' src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg" alt='Post Image' />
                    </div>
                </div>
            </div>
            {/* Post Footer */}
            <footer className='flex flex-col gap-3 px-3 md:px-5'>
                {/* Show Activity */}
                <div className='flex items-center justify-between pb-3 border-b dark:border-gray-700'>
                    {/* Show active activity */}
                    <div className='flex items-center gap-3 md:gap-5'>
                        <div className='flex items-center gap-1'>
                            {reactions.map((item, index) => (
                                <span key={index}>
                                    <Image width={18} height={18} className='w-[1.125rem] h-[1.125rem]' src={item} alt='Reaction' />
                                </span>
                            ))}
                        </div>
                        <div>
                            <Tooltip
                                placement={"bottom-start"}
                                content={<div className="px-1 py-1">
                                    <p><small>Md Minhaj</small></p>
                                    <p><small>Md Minhaj</small></p>
                                    <p><small>Md Minhaj</small></p>
                                    <p><small>Md Minhaj</small></p>
                                    <p><small>Md Minhaj</small></p>
                                </div>}
                                color="default"
                                delay={100}
                                closeDelay={50}
                                motionProps={{
                                    variants: {
                                        exit: {
                                            opacity: 0,
                                            transition: {
                                                duration: 0.1,
                                                ease: "easeIn",
                                            }
                                        },
                                        enter: {
                                            opacity: 1,
                                            transition: {
                                                duration: 0.15,
                                                ease: "easeOut",
                                            }
                                        },
                                    },
                                }}
                                classNames={{
                                    content: [
                                        "py-1 px-2 shadow-xl",
                                        "text-neutral-300 bg-[#3C3C3C]",
                                    ],
                                }}
                            >
                                <button className='text-[#65676B] hover:underline dark:text-[#B0B3B8] font-sans text-[.9375.rem] leading-3'>
                                    <span className='sm:items-center sm:gap-1 sm:flex'>45 <span className='hidden sm:block'>Reaction</span></span>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                    {/* Show Comment Count */}
                    <div>
                        <Tooltip
                            placement={"bottom-start"}
                            content={<div className="px-1 py-1">
                                <p><small>Md Minhaj</small></p>
                                <p><small>Md Minhaj</small></p>
                                <p><small>Md Minhaj</small></p>
                                <p><small>Md Minhaj</small></p>
                                <p><small>Md Minhaj</small></p>
                            </div>}
                            color="default"
                            delay={100}
                            closeDelay={50}
                            motionProps={{
                                variants: {
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeIn",
                                        }
                                    },
                                    enter: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.15,
                                            ease: "easeOut",
                                        }
                                    },
                                },
                            }}
                            classNames={{
                                content: [
                                    "py-1 px-2 shadow-xl",
                                    "text-neutral-300 bg-[#3C3C3C]",
                                ],
                            }}
                        >
                            <button className='text-[#65676B] hover:underline dark:text-[#B0B3B8] font-sans text-[.9375.rem] leading-3'>
                                <span className='flex items-center gap-[6px] sm:gap-1'>50 <span className='block sm:hidden'><FaRegCommentAlt className='text-base' /></span> <span className='hidden sm:block'>comments</span></span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
                {/* Post Actions  */}
                <div>

                </div>
                {/* Post Comment Area */}
                <div>

                </div>
            </footer >
        </div >
    );
};

export default Post;