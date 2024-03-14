"use client"
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import ModalCus from "../ModalCus/ModalCus";
import UploadFile from "@/components/UploadFile/UploadFile";

const AddStory = ({ addStory }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const addStoryBtn = <>
        <div className="flex items-center justify-center w-12 h-12 bg-white border rounded-full dark:bg-transparent">
            <GoPlus className="text-2xl" />
        </div>
    </>

    const storySubmitBtn = <>
        <div>Submit</div>
    </>

    return (
        <>
            {/* Story Create Modal */}
            <ModalCus name={addStory || addStoryBtn} modalTitle="Upload an Image" action={storySubmitBtn} disabled={selectedFile ? false : true}>
                <div>
                    <UploadFile imageState={selectedFile} setImageState={setSelectedFile} onChange={handleImageChange} />
                </div>
            </ModalCus>
        </>
    );
};

export default AddStory;