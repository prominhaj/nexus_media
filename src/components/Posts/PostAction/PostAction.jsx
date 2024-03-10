import React from 'react';

const PostAction = ({ icon, title, text, onClick }) => {
    return (
        <>
            <button onClick={onClick && onClick} className='flex p-1 rounded-md w-full items-center gap-3 duration-250 transition-all dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] text-[#050505] font-sans font-medium'>
                <span className='text-[1.25rem] dark:text-[#E7E9EC]'>{icon}</span>
                <div className='flex flex-col items-start'>
                    <span className='dark:text-[#E4E6EB]'>{title}</span>
                    <span className='text-[#65676B] dark:text-[#B0B3B8] text-[.75rem] block'>{text}</span>
                </div>
            </button>
        </>
    );
};

export default PostAction;