"use client"
import { Avatar } from '@nextui-org/react';
import moment from 'moment';
import Link from 'next/link';
import { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';

const SingleComment = ({ comment }) => {
    const [showAllComments, setShowComments] = useState(false);

    return (
        <div className='flex items-start gap-2 max-w-max'>
            {/* Profile Photo */}
            <Link href={"/profile"} className='block'>
                <Avatar size="sm" src={comment?.user?.photo} />
            </Link>
            <div>
                <div className='bg-[#F0F2F5] dark:bg-[#3A3B3C] py-2 px-3 rounded-xl'>
                    {/* Profile Name */}
                    <h4 className='text-[#050505] break-words dark:text-[#E4E6EB] text-[.75rem] font-medium block tracking-wider'>{comment?.user.name}</h4>
                    {/* Comment */}
                    <p className={`text-[#050505] dark:text-[#E4E6EB] relative break-words text-[0.90rem] ${showAllComments ? "" : "max-h-12 overflow-hidden"}`}>
                        <small>
                            {
                                comment?.length > 311 ? (
                                    <>
                                        {comment?.comment} <span className={`${!showAllComments ? "block" : "hidden"} absolute bottom-1 right-0 z-10 bg-[#F0F2F5] dark:bg-[#3A3B3C]`}>... <button onClick={() => setShowComments(true)}>See more</button>
                                        </span>
                                    </>
                                ) : comment?.comment
                            }
                        </small>
                    </p>
                </div>
                {/* Comment Time */}
                <div className='ps-2'>
                    <Tooltip button={<button className='text-[.75rem] text-[#65676B] dark:text-[#B0B3B8] font-normal hover:underline'>{moment(comment?.time).startOf('minutes').fromNow()}</button>}>
                        <small>
                            <p>
                                {moment(comment?.time).subtract(10, 'days').calendar()}
                            </p>
                        </small>
                    </Tooltip>
                </div>
            </div >
        </div >
    );
};

export default SingleComment;