"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import imageUpload from "@/utils/imageUpload";
import { toast } from "sonner";
import useAuth from "@/Hooks/useAuth";
import { createStory } from "@/server/story";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

// Dynamic Import
const UploadFile = dynamic(() => import('@/components/UploadFile/UploadFile'),
    {
        loading: () => <p>Loading...</p>,
    }
);
const ModalCus = dynamic(() => import('../ModalCus/ModalCus'),
    {
        loading: () => <p>Loading...</p>,
    }
);
const SubmitButton = dynamic(() => import('@/components/Global/cookies/Button/SubmitButton'));


const addStoryBtn = <>
    <div className="flex items-center justify-center w-12 h-12 bg-white border rounded-full dark:bg-transparent">
        <GoPlus className="text-2xl" />
    </div>
</>

const AddStory = ({ addStory }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const user = useAuth();

    // add new Story
    const handleStory = async () => {
        // check image empty
        if (!selectedFile) {
            return toast.error("Please select an image")
        }

        try {
            setLoading(true);
            const image = await imageUpload(selectedFile, true);

            if (image.success) {
                const newStory = {
                    name: user?.displayName,
                    email: user?.email,
                    profilePhoto: user?.photoURL,
                    storyPhoto: image.data.display_url
                }

                // Add the new story
                const addStoryData = await createStory(newStory);
                if (addStoryData.success) {
                    setSelectedFile("")
                    toast.success('Story Added successfully');
                    router.refresh();
                }
                else {
                    toast.error("Something went wrong");
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* Story Create Modal */}
            <ModalCus name={addStory || addStoryBtn} modalTitle="Upload an Image">
                <form action={handleStory}>
                    <UploadFile imageState={selectedFile} setImageState={setSelectedFile} />
                    <div className="flex justify-end mt-3">
                        <SubmitButton loading={loading} />
                    </div>
                </form>
            </ModalCus>
        </>
    );
};

export default AddStory;