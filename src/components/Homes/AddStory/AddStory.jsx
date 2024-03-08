"use client"
import Image from "next/image";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import ModalCus from "../ModalCus/ModalCus";
import { HiOutlineTrash } from "react-icons/hi2";
import { CiImageOn } from "react-icons/ci";

const AddStory = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const addStoryBtn = <>
        <div className="p-3 bg-white border rounded-full dark:bg-transparent">
            <GoPlus className="text-2xl" />
        </div>
    </>

    const storySubmitBtn = <>
        <div>Submit</div>
    </>

    return (
        <div className='bg-white dark:bg-[#293145] p-3 rounded-lg'>
            <div className="flex">
                {/* Story Create Modal */}
                <ModalCus name={addStoryBtn} modalTitle="Upload an Image" action={storySubmitBtn}>
                    <div>
                        {
                            !selectedFile && <div className="flex items-center justify-center">
                                <label className="flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-white border rounded-lg shadow-lg cursor-pointer dark:border-gray-600 dark:bg-gray-800 text-blue border-blue hover:bg-blue">
                                    <div>
                                        <CiImageOn className="text-4xl" />
                                    </div>
                                    <span className="mt-2 text-base font-medium leading-normal text-gray-600 dark:text-gray-300">
                                        Select a Image
                                    </span>
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                        }
                        {selectedFile && (
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <h2 className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">Selected Image:</h2>
                                    <button onClick={() => setSelectedFile("")} className="p-3 border rounded-full dark:border-gray-600">
                                        <HiOutlineTrash className="text-2xl" />
                                    </button>
                                </div>
                                <div className="flex flex-col items-center justify-center pt-2">
                                    <Image
                                        src={URL.createObjectURL(selectedFile)}
                                        alt="Selected"
                                        className="rounded-md"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </ModalCus>
            </div>



        </div>
    );
};

export default AddStory;