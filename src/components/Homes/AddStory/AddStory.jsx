"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { toast } from "sonner";
import useAuth from "@/Hooks/useAuth";
import dynamic from "next/dynamic";
import { createStory } from "@/server";
import { Spinner } from "@radix-ui/themes";

// Dynamic Import
const UploadFile = dynamic(() => import('@/components/UploadFile/UploadFile'),
    {
        loading: () => <Spinner size="3" />,
    }
);
const ModalCus = dynamic(() => import('../ModalCus/ModalCus'),
    {
        loading: () => <Spinner size="3" />,
    }
);
const SubmitButton = dynamic(() => import('@/components/Global/Button/SubmitButton'));


const addStoryBtn = <>
    <div className="flex items-center justify-center w-12 h-12 bg-white border rounded-full dark:bg-transparent">
        <GoPlus className="text-2xl" />
    </div>
</>

const AddStory = ({ addStory }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const { user } = useAuth();

    // add new Story
    const handleStory = async () => {
        // check image empty
        if (!selectedFile) {
            return toast.error("Please select an image")
        }

        try {

            // Convert FormData to plain object
            const newUser = {
                userId: user?.id
            };

            // Handle photo separately if needed
            if (selectedFile) {
                const arrayBuffer = await selectedFile.arrayBuffer();
                const photo = new Uint8Array(arrayBuffer);
                newUser.photo = photo;
            }


            // Add the new story
            const addStoryData = await createStory(newUser);
            if (addStoryData.success) {
                setSelectedFile("")
                toast.success('Story Added successfully');
            }
            else {
                toast.error("Something went wrong");
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            {/* Story Create Modal */}
            <ModalCus name={addStory || addStoryBtn} modalTitle="Upload an Image">
                <form action={handleStory}>
                    <UploadFile imageState={selectedFile} setImageState={setSelectedFile} />
                    <div className="flex justify-end mt-4">
                        <SubmitButton className="!w-full" />
                    </div>
                </form>
            </ModalCus>
        </>
    );
};

export default AddStory;