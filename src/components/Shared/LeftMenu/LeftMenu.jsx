"use client"
import Link from "next/link";
import { MdAutorenew } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BiSolidContact } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import useColor from "@/Hooks/useColor";
import { motion } from 'framer-motion';
import { HiOutlineCog8Tooth } from "react-icons/hi2";

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
        icon: <FcAbout className="text-2xl" />
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
        icon: <div className='p-3 lg:p-[10px] rounded-full bg-slate-200 dark:bg-gray-600'>
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
                <HiOutlineCog8Tooth className="text-2xl lg:text-3xl" />
            </motion.div>
        </div>
    },
]

const LeftMenu = () => {
    const { color, bgColor } = useColor();

    return (

        <div className="space-y-5 transition-all duration-300">
            <div className='p-3 bg-white rounded-lg shadow-lg dark:shadow-gray-600 dark:bg-[#293145]'>
                {
                    leftMenuItems.map(item =>
                        <Link className='block px-3 dark:text-gray-300 dark:hover:text-gray-200 rounded-md py-2 text-[1.02rem dark:hover:bg-gray-400 hover:bg-gray-200 duration-300' href={item.path} key={item.path}>
                            <span className="flex items-center gap-2 sm:gap-3">
                                <span className={`${bgColor ? bgColor : "bg-gray-300 dark:bg-gray-600"} rounded-full p-3`}>
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
                        <Link className='block px-3 dark:text-gray-300 dark:hover:text-gray-200 rounded-md py-2 text-[1.02rem dark:hover:bg-gray-400 hover:bg-gray-200 duration-300' href={item.path} key={item.path}>
                            <span className="flex items-center gap-2 sm:gap-3">
                                <span className={`${bgColor ? bgColor : "bg-gray-300 dark:bg-gray-600"} rounded-full`}>
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
        </div >
    );
};

export default LeftMenu;