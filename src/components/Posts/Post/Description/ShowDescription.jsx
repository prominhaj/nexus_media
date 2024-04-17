"use client"
import { useState } from "react";

const ShowDescription = ({ description }) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className='text-[#050505] dark:text-[#E4E6EB] break-words selection:bg-blue-200 dark:selection:bg-blue-600'>
            {description && description.length > 150 ? (
                showDescription ? description : <>
                    {description.slice(0, 150)}... <button onClick={() => setShowDescription(true)} className='font-medium transition-all duration-300 hover:underline text-[#050505] dark:text-[#E4E6EB]'>See more</button>
                </>
            ) : (
                description
            )}
        </div>
    );
};

export default ShowDescription;