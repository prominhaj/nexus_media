"use client"
import { Avatar, Textarea } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import ModalCus from '../../Homes/ModalCus/ModalCus';
import UploadFile from '@/components/UploadFile/UploadFile';
import useAuth from '@/Hooks/useAuth';
import { toast } from 'sonner'
import { createPost } from '@/server/post';
import imageUpload from '@/utils/imageUpload';
import Emoji from './Emoji';

// Create Post Button
const createPostBtn = <>
    <div className='hover:bg-[#c8c8c9] dark:hover:bg-[#4E4F50] duration-300 cursor-pointer text-start bg-[#dbdbdc] dark:bg-[#313030] text-[#65676B] dark:text-[#B0B3B8] py-2 px-3 rounded-2xl w-full'>
        <span>Create Post...</span>
    </div>
</>

const CreatePost = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false)
    const user = useAuth();

    const handleCreatePost = async () => {
        try {
            const imageHost = await imageUpload(image, true);
            if (imageHost.success) {
                // New Post 
                const newPost = {
                    name: user?.displayName,
                    email: user?.email,
                    profilePhoto: user?.photoURL,
                    postPhoto: imageHost?.data?.display_url,
                    description: description
                }

                const req = await createPost(newPost);
                if (req.success) {
                    setDescription("")
                    setImage("")
                    toast.success("Post created successfully")
                }
            }
        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <div className='p-3 rounded-lg shadow-md md:p-5 bg-light-post-bg dark:bg-dark-post-bg'>
            <div className='flex items-start gap-3'>
                <Link href={"/profile"}>
                    <Avatar src={user?.photoURL} />
                </Link>
                <div className='flex flex-1'>
                    <ModalCus name={createPostBtn} modalTitle="Create Post" classes={"w-full"}>

                        {/* Modal Create Post Form */}
                        <form action={handleCreatePost}>
                            {/* Image Upload  */}
                            <div>
                                <UploadFile imageState={image} setImageState={setImage} />
                            </div>

                            {/* Description */}
                            <div className='relative pt-5'>
                                <Textarea
                                    onChange={e => setDescription(e.target.value)}
                                    value={description}
                                    isRequired
                                    label="Description"
                                    labelPlacement="outside"
                                    placeholder="Enter your description..."
                                    className="w-full"
                                    classNames={
                                        {
                                            inputWrapper: "border rounded-lg border-gray-200 dark:border-gray-600"
                                        }
                                    }
                                />
                                <Emoji setDescription={setDescription} />
                            </div>
                            <div className='mt-3 text-end'>
                                <button type="submit" className='px-4 py-1.5 text-sm tracking-wider text-white transition-all shadow-lg rounded-3xl duration-250 disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:opacity-60 bg-gradient-to-r from-blue-500 to-blue-500'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </ModalCus>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;