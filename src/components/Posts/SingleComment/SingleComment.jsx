"use client"
import { Avatar, Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';

// Face Comment
const comment = `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor,`

const SingleComment = () => {
    const [showAllComments, setShowComments] = useState(false);

    return (
        <div className='flex items-start gap-2 max-w-max'>
            {/* Profile Photo */}
            <Link href={"/profile"} className='block'>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            </Link>
            <div>
                <div className='bg-[#F0F2F5] dark:bg-[#3A3B3C] py-2 px-3 rounded-xl'>
                    {/* Profile Name */}
                    <h4 className='text-[#050505] break-words dark:text-[#E4E6EB] text-[.75rem] font-medium block tracking-wider'>Ehasn With Khalek</h4>
                    {/* Comment */}
                    <p className={`text-[#050505] dark:text-[#E4E6EB] relative break-words text-[0.90rem] ${showAllComments ? "" : "max-h-12 overflow-hidden"}`}>
                        <small>
                            {
                                comment.length > 311 ? (
                                    <>
                                        {comment} <span className={`${!showAllComments ? "block" : "hidden"} absolute bottom-1 right-0 z-10 bg-[#F0F2F5] dark:bg-[#3A3B3C]`}>... <button onClick={() => setShowComments(true)}>See more</button>
                                        </span>
                                    </>
                                ) : comment
                            }
                        </small>
                    </p>
                </div>
                {/* Comment Time */}
                <div className='ps-2'>
                    <Tooltip
                        placement={"bottom"}
                        content={"10 March 2024"}
                    >
                        <button className='text-[.75rem] text-[#65676B] dark:text-[#B0B3B8] font-normal hover:underline'>32 m</button>
                    </Tooltip>
                </div>
            </div >
        </div >
    );
};

export default SingleComment;