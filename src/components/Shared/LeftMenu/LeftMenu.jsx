"use client"
import Link from "next/link";
import { MdAutorenew, MdOutlineChatBubbleOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import useColor from "@/Hooks/useColor";
import { motion } from 'framer-motion';
import { SlSettings } from "react-icons/sl";
import { IoAlertCircleSharp } from "react-icons/io5";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

// Left Menu Items
const leftMenuItems = [
    {
        name: 'New Feed',
        path: '/',
        icon: <MdAutorenew className="text-2xl" />
    },
    {
        name: "Profile",
        path: "/profile",
        icon: <CgProfile className="text-2xl" />
    },
    {
        name: 'About',
        path: '/about',
        icon: <IoAlertCircleSharp className="text-2xl" />
    },
    {
        name: 'Contact',
        path: '/contact',
        icon: <BiSolidContact className="text-2xl" />
    }
]

const leftActionItems = [
    {
        name: 'Setting',
        path: '/setting',
        icon: <div className='rounded-full bg-slate-200 dark:bg-gray-600'>
            <motion.div
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            >
                <SlSettings className="text-2xl" />
            </motion.div>
        </div>
    },
    {
        name: 'Chat',
        path: '/message',
        icon: <MdOutlineChatBubbleOutline className="text-2xl" />
    }
]

const LeftMenu = () => {
    const { color, bgColor } = useColor();

    return (

        <div className="space-y-5 transition-all duration-300">
            <div className='p-3 bg-white rounded-lg shadow-lg dark:shadow-gray-600 dark:bg-[#293145]'>
                {
                    leftMenuItems.map(item =>
                        <Link className='block px-3 hover:bg-gray-200 dark:text-gray-300 hover:text-blue-500 dark:hover:bg-gray-800 dark:hover:text-blue-500 rounded-md py-2 text-[1.02rem transition-all duration-300' href={item.path} key={item.path}>
                            <span className="flex items-center gap-2 sm:gap-3">
                                <span className={`bg-gray-300 dark:bg-gray-600 rounded-full p-3 ${color && color}`}>
                                    {item.icon}
                                </span>
                                <span className="text-lg font-medium">
                                    {item.name}
                                </span>
                            </span>
                        </Link>
                    )
                }
            </div>
            <div className='p-3 bg-white rounded-lg shadow-lg dark:shadow-gray-600 dark:bg-[#293145]'>
                {
                    leftActionItems.map(item =>
                        <Link className='block px-3 hover:bg-gray-200 dark:text-gray-300 hover:text-blue-500 dark:hover:bg-gray-800 dark:hover:text-blue-500 rounded-md py-2 text-[1.02rem transition-all duration-300' href={item.path} key={item.path}>
                            <span className="flex items-center gap-2 sm:gap-3">
                                <span className={`bg-gray-300 dark:bg-gray-600 rounded-full p-3 ${color && color}`}>
                                    {item.icon}
                                </span>
                                <span className="text-lg font-medium">
                                    {item.name}
                                </span>
                            </span>
                        </Link>
                    )
                }
                <button className='w-full px-3 hover:bg-gray-200 dark:text-gray-300 hover:text-blue-500 dark:hover:bg-gray-800 dark:hover:text-blue-500 rounded-md py-2 text-[1.02rem transition-all duration-300'>
                    <span className="flex items-center gap-2 sm:gap-3">
                        <span className={`bg-gray-300 dark:bg-gray-600 rounded-full p-3 ${color && color}`}>
                            <HiArrowRightOnRectangle className="text-2xl" />
                        </span>
                        <span className="text-lg font-medium">
                            Logout
                        </span>
                    </span>
                </button>
            </div>
        </div >
    );
};

export default LeftMenu;