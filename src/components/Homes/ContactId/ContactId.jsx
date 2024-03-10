"use client"
import { Avatar } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import TypingLoading from '../TypingLoading/TypingLoading';

const ContactId = () => {
    const [active, setActive] = useState(null);
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (window.navigator.onLine) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, []);

    useEffect(() => {
        if (modal) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [modal]);

    const handleMessage = (e) => {
        e.preventDefault();
        console.log(e.target.text.value);
    }

    const handleTypingLoading = () => {
        setIsLoading(true);
        containerRef.current.scrollTop = containerRef.current.scrollHeight;

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    return (
        <>
            <div onClick={() => setModal(!modal)} className='flex flex-wrap items-center justify-between gap-2 px-1 cursor-pointer xl:px-3 2xl:pr-10'>
                <div className='flex items-center gap-3'>
                    <Avatar isBordered color={active ? "primary" : "danger"} src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <h2 className='font-semibold text-gray-800 dark:text-gray-200'>Jone Sone</h2>
                </div>
                <div>
                    {
                        active ? <div className='w-3 h-3 bg-green-500 rounded-full'></div> : <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
                    }
                </div>
            </div>

            {/* Modal Content */}

            <div className={`${modal ? "block" : "hidden"} fixed duration-300 z-50 transition-all bottom-5 w-80 right-[15%] bg-white dark:bg-black rounded-lg shadow-xl dark:shadow-gray-700`}>
                <div className='flex p-3 transition-all duration-250 items-start justify-between rounded-t-lg dark:bg-[#293145] pb-3 border-b'>
                    <div className='flex items-center gap-5'>
                        <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <div>
                            <h2 className='font-semibold text-gray-800 transition-all duration-250 dark:text-gray-200'>Hendrix Stamp</h2>
                            <div className='text-[12px] font-medium text-gray-500'> {
                                active ? <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                    Active
                                </div> : <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
                                    In Active
                                </div>
                            }</div>
                        </div>
                    </div>
                    <button onClick={() => setModal(false)}><HiOutlineXMark className='text-3xl' /></button>
                </div>

                {/* Modal Body */}
                <div ref={containerRef} className='h-[300px] transition-all duration-250 overflow-y-auto px-3 py-3 dark:bg-[#1A2236]'>

                    <div >
                        {/* To Message */}
                        <div className='flex flex-col gap-3 py-5'>
                            <div className='text-[#594939] dark:bg-[#293145] dark:text-gray-300 bg-[#fcf6ee] py-[10px] px-5 rounded-t-[20px] rounded-r-[20px]'>Hi, how can I help you?</div>
                            <span className='font-medium text-[#adb5bd] text-[12px]'>Mon 10.25</span>
                        </div>

                        {/* From Message */}
                        <div className=''>
                            <div className='text-[#2a4e7f] bg-[#e2efff] dark:bg-gray-950 dark:text-gray-300 py-[10px] px-5 rounded-t-[20px] rounded-s-[20px]'>Hi, I want those files for you. I want you to send 1 PDF and 1 image file.</div>
                        </div>
                    </div>
                    <div>
                        {/* To Message */}
                        <div className='flex flex-col gap-3 py-5'>
                            <div className='text-[#594939] dark:bg-[#293145] dark:text-gray-300 bg-[#fcf6ee] py-[10px] px-5 rounded-t-[20px] rounded-r-[20px]'>Hi, how can I help you?</div>
                            <span className='font-medium text-[#adb5bd] text-[12px]'>Mon 10.25</span>
                        </div>

                        {/* From Message */}
                        <div className=''>
                            <div className='text-[#2a4e7f] bg-[#e2efff] dark:bg-gray-950 dark:text-gray-300 py-[10px] px-5 rounded-t-[20px] rounded-s-[20px]'>Hi, I want those files for you. I want you to send 1 PDF and 1 image file.</div>
                        </div>
                    </div>
                    <div>
                        {/* To Message */}
                        <div className='flex flex-col gap-3 py-5'>
                            <div className='text-[#594939] dark:bg-[#293145] dark:text-gray-300 bg-[#fcf6ee] py-[10px] px-5 rounded-t-[20px] rounded-r-[20px]'>Hi, how can I help you?</div>
                            <span className='font-medium text-[#adb5bd] text-[12px]'>Mon 10.25</span>
                        </div>

                        {/* From Message */}
                        <div className=''>
                            <div className='text-[#2a4e7f] bg-[#e2efff] dark:bg-gray-950 dark:text-gray-300 py-[10px] px-5 rounded-t-[20px] rounded-s-[20px]'>Hi, I want those files for you. I want you to send 1 PDF and 1 image file.</div>
                        </div>
                    </div>
                    <div>
                        {/* To Message */}
                        <div className='flex flex-col gap-3 py-5'>
                            <div className='text-[#594939] dark:bg-[#293145] dark:text-gray-300 bg-[#fcf6ee] py-[10px] px-5 rounded-t-[20px] rounded-r-[20px]'>Hi, how can I help you?</div>
                            <span className='font-medium text-[#adb5bd] text-[12px]'>Mon 10.25</span>
                        </div>

                        {/* From Message */}
                        <div className=''>
                            <div className='text-[#2a4e7f] bg-[#e2efff] dark:bg-gray-950 dark:text-gray-300 py-[10px] px-5 rounded-t-[20px] rounded-s-[20px]'>Hi, I want those files for you. I want you to send 1 PDF and 1 image file.</div>
                        </div>
                    </div>
                    {
                        isLoading && <div className='my-3 mb-2 text-end'>
                            <TypingLoading />
                        </div>
                    }
                </div>

                {/* Typing Message */}
                <form onSubmit={handleMessage} className='flex items-center justify-between p-3 transition-all duration-250'>
                    <input onChange={handleTypingLoading} className='w-full px-3 text-base bg-transparent outline-none' name='text' type="text" placeholder='Start typing...' />
                    <button type='submit'><HiOutlinePaperAirplane className='text-3xl' /></button>
                </form>
            </div>
        </>
    );
};

export default ContactId;