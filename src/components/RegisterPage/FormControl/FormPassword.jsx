"use client"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormPassword = ({ id, label, placeholder }) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className="py-2">
            <label htmlFor={id} className='block text-base tracking-wide text-gray-100'>{label}</label>
            <div className="relative">
                <input id={id} className='w-full px-3 ring-1 bg-transparent mt-2 text-base text-gray-300 rounded-md outline-none py-[0.375rem] focus:ring-2 placeholder:text-gray-500' type={showPass ? "text" : "password"} placeholder={placeholder} />
                <span onClick={() => setShowPass(!showPass)} className='absolute text-xl text-gray-300 cursor-pointer bottom-2 right-2'>{showPass ? <FaEyeSlash /> : <FaEye />}</span>
            </div>
        </div>
    );
};

export default FormPassword;