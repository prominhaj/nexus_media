"use client"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormPassword = ({ id, label, placeholder, register, login, children }) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className="py-2">
            <div className="flex flex-col gap-2">
                <label htmlFor={id} className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>{label}</label>
                <div className="relative">
                    <input
                        {...register(id, {
                            required: true,
                            minLength: 8,
                            maxLength: 18,
                            pattern:
                                !login && /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                        })}
                        id={id}
                        className='flex h-9 w-full rounded-md border border-[#E4E4E7]  dark:border-[#3a3a3e] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:border-[#A1A1AA] dark:focus-visible:border-[#6E6E71]  disabled:cursor-not-allowed disabled:opacity-50'
                        type={showPass ? "text" : "password"}
                        placeholder={placeholder} />
                    <button type="button" onClick={() => setShowPass(!showPass)} className='absolute text-xl text-gray-300 cursor-pointer bottom-2 right-2'>{showPass ? <FaEyeSlash /> : <FaEye />}</button>
                </div></div>
            <>
                {children}
            </>
        </div>
    );
};

export default FormPassword;