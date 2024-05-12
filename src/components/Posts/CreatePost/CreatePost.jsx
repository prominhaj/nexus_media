"use client";
import Link from 'next/link';
import { useState } from 'react';
import useAuth from '@/Hooks/useAuth';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';
import { createPost } from '@/server';
import { Avatar, Card, Spinner, TextArea } from '@radix-ui/themes';

// Dynamic Import
const ModalCus = dynamic(() => import('../../Homes/ModalCus/ModalCus'))
const UploadFile = dynamic(() => import('@/components/UploadFile/UploadFile'), {
    loading: () => <Spinner loading />,
})
const SubmitButton = dynamic(() => import('@/components/Global/Button/SubmitButton'))
const Emoji = dynamic(() => import('../../SliderCus/Emoji'))


// Create Post Button
const createPostBtn = <>
    <div className='hover:bg-[#d8d8d9] dark:hover:bg-[#424343] duration-300 cursor-pointer text-start bg-[#e8e8ea] dark:bg-[#2a2929] text-[#65676B] dark:text-[#B0B3B8] py-2 px-3 rounded-xl w-full'>
        <span>Create Post...</span>
    </div>
</>

const CreatePost = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const { user, status } = useAuth();

    const handleCreatePost = async () => {
        // Check Empty State
        if (!image) {
            return toast.error('Please select an image');
        }

        // FormData
        const imageData = new FormData();
        imageData.append("image", image);

        const newPost = {
            userId: user?.id,
            photo: imageData,
            description,
        }

        try {
            const post = await createPost(newPost)
            if (post.success) {
                toast.success("Post created successfully")
                setImage(null)
                setDescription("")
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <Card>
                <div className='flex items-start gap-3'>
                    <Link className='block' href={`/profile/${user?.id}`}>
                        {status === "loading" ? <Spinner className='mt-2.5' loading /> : <Avatar src={user?.image?.profileURL} radius="full" fallback={user?.name?.slice(0.1)} />}
                    </Link>
                    <div className='flex flex-1'>
                        <ModalCus name={createPostBtn} modalTitle="Create Post" buttonClass="w-full">

                            {/* Modal Create Post Form */}
                            <form action={handleCreatePost}>
                                {/* Image Upload  */}
                                <div>
                                    <UploadFile imageState={image} setImageState={setImage} />
                                </div>

                                {/* Description */}
                                <div className='relative pt-5'>
                                    <TextArea
                                        onChange={e => setDescription(e.target.value)}
                                        value={description}
                                        placeholder="Enter your description..." />

                                    {/* Emoji */}
                                    <Emoji setDescription={setDescription} />
                                </div>
                                <div className='flex justify-end mt-3'>
                                    <SubmitButton />
                                </div>
                            </form>
                        </ModalCus>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default CreatePost;