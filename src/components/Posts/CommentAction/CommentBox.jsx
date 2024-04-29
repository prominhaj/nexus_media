"use client";
import useAuth from '@/Hooks/useAuth';
import { postComment } from '@/server';
import { Avatar } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GrEmoji } from "react-icons/gr";
import { IoSend } from 'react-icons/io5';
import { toast } from 'sonner';

// Dynamic Import
const EmojiSlider = dynamic(() => import('@/components/SliderCus/EmojiSlider'), {
    loading: () => <p>Loading...</p>,
});

const CommentBox = ({ id }) => {
    const [comment, setComment] = useState("");
    const [showEmoji, setShowEmoji] = useState(false);
    const router = useRouter();
    const user = useAuth();

    const handleComment = async (e) => {
        e.preventDefault();
        try {
            const newComment = {
                comment: comment,
                time: Date(Date.now),
                user: {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }
            }

            const req = await postComment(newComment, id);
            if (req.success) {
                router.refresh();
                toast.success(req.message)
                setComment("")
            }

        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <div className='grid items-start grid-cols-1 gap-3 sm:grid-cols-12'>
            <div className='hidden sm:block'>
                <Link className='flex items-start justify-center' href={"/profile"}>
                    <Avatar isBordered src={user && user.photoURL} />
                </Link>
            </div>
            <div className='sm:col-span-11 relative bg-[#F0F2F5] dark:bg-[#3A3B3C] rounded-2xl'>
                <form onSubmit={handleComment}>
                    {/* Comment TextBox */}
                    <input value={comment} onChange={e => setComment(e.target.value)} id='comment' className='w-full pr-[4.5rem] focus:outline focus:outline-offset-2 focus:outline-blue-500 bg-transparent rounded-2xl px-3 py-2 outline-none dark:text-[#E4E6EB] text-[#050505]' type="text" placeholder='Write a comments...' />

                    <button onClick={() => setShowEmoji(!showEmoji)} type='button' className={`absolute right-10 top-0 hover:bg-[#E4E6E8] dark:hover:bg-[#4E4F50] duration-250 transition-all p-2 rounded-full ${showEmoji ? "text-blue-500" : "dark:text-[#ADAFB3] text-[#484c50]"}`}>
                        <GrEmoji className='text-2xl' />
                    </button>
                    <button disabled={comment ? false : true} type='submit' className='absolute disabled:cursor-not-allowed right-0 top-0 hover:bg-[#E4E6E8] dark:hover:bg-[#4E4F50] disabled:dark:text-[#ADAFB3] disabled:hover:bg-transparent disabled:dark:hover:bg-transparent disabled:text-[#484c50] text-[#005DC7] dark:text-[#82BDFF] duration-250 transition-all p-2 rounded-full'>
                        <IoSend className='text-2xl' />
                    </button>
                </form>
                {
                    showEmoji && <div className='pt-2 duration-250'>
                        <EmojiSlider setEmoji={setComment} slidePerView={20} />
                    </div>
                }
            </div>
        </div>
    );
};

export default CommentBox;