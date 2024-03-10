"use client"
import { Avatar, Textarea } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';
import ModalCus from '../../Homes/ModalCus/ModalCus';
import UploadFile from '@/components/UploadFile/UploadFile';
import { BsEmojiNeutral } from "react-icons/bs";
import EmojiSlider from '@/components/SliderCus/EmojiSlider';

// Create Post Button
const createPostBtn = <>
    <div className='hover:bg-[#c8c8c9] dark:hover:bg-[#4E4F50] duration-300 cursor-pointer text-start bg-[#dbdbdc] dark:bg-[#313030] text-[#65676B] dark:text-[#B0B3B8] py-2 px-3 rounded-2xl w-full'>
        <span>Create Post...</span>
    </div>
</>

// Create Post Modal Action
const actionBtn = <>
    <span className='text-base tracking-wider'>Post</span>
</>

// Emoji Btn
const emojiBtn = <>
    <div>
        <BsEmojiNeutral className='text-2xl' />
    </div>
</>

const CreatePost = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [showEmoji, setShowEmoji] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div className='p-3 md:p-5 bg-white dark:bg-[#0F142A] shadow dark:shadow-2xl rounded-lg'>
            <div className='flex items-start gap-3'>
                <Link href={"/profile"}>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </Link>
                <div className='flex flex-1'>
                    <ModalCus name={createPostBtn} modalTitle="Create Post" classes={"w-full"} action={actionBtn} disabled={image || description ? false : true} type={"submit"}>
                        <form>
                            {/* Image Update  */}
                            <div>
                                <UploadFile imageState={image} setImageState={setImage} onChange={handleImageChange} />
                            </div>

                            {/* Description */}
                            <div className='relative pt-5'>
                                <div className='absolute z-20 right-4 top-14'>
                                    <button onClick={() => setShowEmoji(!showEmoji)} type='button'>{emojiBtn}</button>
                                </div>
                                <Textarea
                                    onChange={e => setDescription(e.target.value)}
                                    value={description}
                                    isRequired
                                    label="Description"
                                    labelPlacement="outside"
                                    placeholder="Enter your description"
                                    className="w-full"
                                />

                                {/* Show Emoji */}
                                {
                                    showEmoji && <div className='pt-2'>
                                        <EmojiSlider setEmoji={setDescription} />
                                    </div>
                                }
                            </div>
                        </form>
                    </ModalCus>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;