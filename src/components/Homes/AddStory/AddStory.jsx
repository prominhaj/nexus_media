"use client"
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import ModalCus from "../ModalCus/ModalCus";
import UploadFile from "@/components/UploadFile/UploadFile";
import imageUpload from "@/utils/imageUpload";
import { toast } from "sonner";
import useAuth from "@/Hooks/useAuth";
import { postAddStory } from "@/utils/postAddStory";
import { useRouter } from "next/navigation";

const addStoryBtn = <>
    <div className="flex items-center justify-center w-12 h-12 bg-white border rounded-full dark:bg-transparent">
        <GoPlus className="text-2xl" />
    </div>
</>

const storySubmitBtn = <>
    <div>Submit</div>
</>

const AddStory = ({ addStory }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const user = useAuth();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleStory = async () => {
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
                const addStoryData = await postAddStory(newStory);
                if (addStoryData.success) {
                    setLoading(false);
                    router.refresh()
                    setSelectedFile("")
                    toast.success('Story Added successfully');
                }
                else {
                    toast.error("Something went wrong")
                }
            }
        } catch (error) {
            setLoading(false);
            toast.error(error.message)
        }
    }

    return (
        <>
            {/* Story Create Modal */}
            <ModalCus name={addStory || addStoryBtn} modalTitle="Upload an Image" action={storySubmitBtn} disabled={selectedFile ? false : true} onClick={handleStory} loading={loading}>
                <div>
                    <UploadFile imageState={selectedFile} setImageState={setSelectedFile} onChange={handleImageChange} />
                </div>
            </ModalCus>
        </>
    );
};

export default AddStory;