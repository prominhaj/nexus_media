"use client"
import { Avatar, Tooltip } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoMdPersonAdd } from "react-icons/io";
import Link from 'next/link';
import { BsThreeDots } from "react-icons/bs";
import PopoverCus from '../../Homes/Popover/PopoverCus';
import { FaBookmark } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import Image from 'next/image';
import VerifiedBadges from '@/components/Posts/VerifiedBadges/VerifiedBadges';
import TooltipFromPost from '@/components/Posts/Tooltip/TooltipFromPost';
import PostAction from '../PostAction/PostAction';
import PostReactionTooltip from '../Tooltip/PostReactionTooltip';
import PostReactionShow from '../PostReactionShow/PostReactionShow';
import { GoComment } from 'react-icons/go';
import CommentAction from '../CommentAction/CommentAction';
import ShareAction from '../ShareAction/ShareAction';
import CommentBox from '../CommentAction/CommentBox';
import SingleComment from '../SingleComment/SingleComment';

// Post Menu Button
const postMenuBtn = <>
    <div className='text-light-text dark:text-dark-text p-[0.625rem] hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover transition-all rounded-full duration-250'>
        <BsThreeDots className='text-2xl' />
    </div>
</>

const description = `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex accusantium libero maiores eveniet obcaecati ullam, incidunt quisquam, mollitia voluptatem repellendus voluptate odio optio expedita fugit facilis totam, debitis tempora illo? Omnis pariatur ullam odio eos voluptate, in, at architecto reiciendis dignissimos debitis sed explicabo ut autem. Recusandae dicta esse quisquam libero animi est laudantium fugit voluptates blanditiis sint! In a vel aperiam at eius corrupti molestiae quod sint aut porro! Saepe laudantium a quam, placeat asperiores cum, nesciunt quo, soluta enim nulla praesentium ex laborum iste cupiditate reiciendis aut ea veniam. Veritatis reprehenderit voluptates tempore, error officia ad expedita magnam.
`
const Post = ({ video }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [reactions, setReactions] = useState("");

    return (
        <div className='p-3 rounded-lg shadow-md md:p-5 bg-light-post-bg dark:bg-dark-post-bg'>
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

                            <VerifiedBadges />
                        </div>
                        <div className='flex items-center gap-[0.625rem] text-light-text dark:text-dark-text font-sans'>
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
                            <PostAction icon={<FaBookmark />} title={"Save Post"} text={"Add this to your saved items."} />
                            <PostAction icon={<AiFillCloseSquare />} title={"Hide Post"} text={"See fewer posts like this."} />
                            <PostAction icon={<IoMdPersonAdd />} title={"Add Friend"} text={"Add Friend Request"} />
                        </div>
                    </PopoverCus>
                </div>
            </header>
            {/* Post Body Image */}
            <div className='py-3'>
                {/* Description */}
                <div className='pb-3'>
                    <div className='text-[#050505] dark:text-[#E4E6EB] break-words selection:bg-blue-200 dark:selection:bg-blue-600'>
                        {description && description.length > 150 ? (
                            showDescription ? description : <>
                                {description.slice(0, 150)}... <button onClick={() => setShowDescription(true)} className='font-medium transition-all duration-300 hover:underline text-[#050505] dark:text-[#E4E6EB]'>See more</button>
                            </>
                        ) : (
                            description
                        )}
                    </div>
                </div>

                {
                    video ? <>
                        <div className='flex justify-center bg-[#242526]/10 backdrop-blur-sm dark:bg-white/30'>
                            <div className='max-w-full min-w-full sm:min-w-96 min-h-[10rem] md:min-h-[18rem] max-h-[31.25rem]'>
                                <video width="320" height="240" className='w-full h-full' aria-label="Video player" autoPlay loop controls preload={true}>
                                    <source src={video} type="video/mp4" />
                                    <track
                                        src="/path/to/captions.vtt"
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                    />
                                </video>
                            </div>
                        </div>
                    </> : <>
                        {/* Image */}
                        <div className='flex justify-center bg-[#242526]/10 backdrop-blur-sm dark:bg-white/30'>
                            <div className='max-w-full min-w-full sm:min-w-96 min-h-[10rem] md:min-h-[18rem] max-h-[31.25rem]'>
                                <Image width={500} height={500} className='object-cover w-full h-full border dark:border-gray-700' src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Post Image' />
                            </div>
                        </div>
                    </>
                }

            </div>

            {/* Post Footer */}
            <footer className='px-3 md:px-5'>
                {/* Show Activity */}
                <div className='flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700'>
                    {/* Show active activity */}
                    <div className='flex items-center gap-3 md:gap-5'>
                        {/* Post Reaction Show */}
                        <PostReactionShow />
                        {/* Tooltip From Post Components */}
                        <TooltipFromPost button={<span className='sm:items-center sm:gap-1 sm:flex'>45 <span className='hidden sm:block'>Reaction</span></span>} />
                    </div>
                    {/* Show Comment Count */}
                    <div>
                        <TooltipFromPost button={<span className='flex items-center gap-[6px] sm:gap-1'>50 <span className='block sm:hidden'><GoComment className='text-base' /></span> <span className='hidden sm:block'>comments</span></span>} />
                    </div>
                </div>
                {/* Post Actions  */}
                <div className='grid items-center grid-cols-3 gap-[0.625rem] py-[0.3125rem] border-b border-gray-200 dark:border-gray-700'>
                    <PostReactionTooltip state={reactions} setState={setReactions} />
                    <CommentAction />
                    <ShareAction />
                </div>
                {/* Show All Comments */}
                <div className='py-3'>
                    <button className='text-[#65676B] dark:text-[#B0B3B8] text-[.875rem] tracking-wider break-words font-medium hover:underline duration-200 block'>View more comments</button>
                    <div className='grid grid-cols-1 gap-3 pt-3'>
                        <SingleComment />
                        {/* <SingleComment />
                        <SingleComment />
                        <SingleComment /> */}
                    </div>
                </div>
                {/* Post Comment Area */}
                <div className='pt-3'>
                    <CommentBox />
                </div>
            </footer >
        </div >
    );
};

export default Post;