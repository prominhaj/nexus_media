"use client";

const PostAction = ({ icon, title, text, onClick }) => {
    return (
        <>
            <button onClick={onClick && onClick} className='flex items-center w-full gap-3 p-1 font-sans font-medium transition-all rounded-md duration-250 dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover text-light-text'>
                <span className='text-[1.25rem] dark:text-dark-text'>{icon}</span>
                <div className='flex flex-col items-start'>
                    <span className='dark:text-dark-text'>{title}</span>
                    <span className='text-[#65676B] dark:text-[#B0B3B8] text-[.75rem] block'>{text}</span>
                </div>
            </button>
        </>
    );
};

export default PostAction;