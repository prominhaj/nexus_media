import React from 'react';
import { GoComment } from 'react-icons/go';

const CommentAction = () => {
    return (
        <>
            <label htmlFor='comment' className='w-full flex justify-center gap-1 items-center dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] py-[0.3125rem] text-[.875rem] dark:text-[#B0B3B8] px-2 rounded-md duration-200 transition-all cursor-pointer'>
                <GoComment className='text-xl' />
                <div className='text-[#65676B] dark:text-[#B0B3B8] block'>Comment</div>
            </label>
        </>
    );
};

export default CommentAction;