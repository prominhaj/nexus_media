"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamic Import
const SingleComment = dynamic(() => import('../../SingleComment/SingleComment'))

const ShowComment = ({ comments }) => {
    const [showComment, setShowComment] = useState(false);

    return (
        <>
            {
                comments && <>
                    <button onClick={() => setShowComment(!showComment)} className='text-[#65676B] dark:text-[#B0B3B8] text-[.875rem] tracking-wider break-words font-medium hover:underline duration-200 block'>View more comments</button>
                    <div className='grid grid-cols-1 gap-3 pt-3'>
                        {
                            showComment ? comments?.map((comment, index) => <SingleComment key={index} comment={comment} />) : comments?.slice(0, 1).map((comment, index) => <SingleComment key={index} comment={comment} />)
                        }
                    </div>
                </>
            }
        </>
    );
};

export default ShowComment;