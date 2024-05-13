"use client";
import { useState } from "react";
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
const SubmitButton = dynamic(() => import('@/components/Global/Button/SubmitButton'));


const AddStoryForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const { user } = useAuth();

    // add new Story
    const handleStory = async () => {
        // check image empty
        if (!selectedFile) {
            return toast.error("Please select an image")
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {

            // Convert FormData to plain object
            const newUser = {
                userId: user?.id,
                photo: formData
            };

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
            <form action={handleStory}>
                <UploadFile imageState={selectedFile} setImageState={setSelectedFile} />
                <div className="flex justify-end mt-4">
                    <SubmitButton className="!w-full" />
                </div>
            </form>
        </>
    );
};

export default AddStoryForm;