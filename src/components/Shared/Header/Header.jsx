"use client"
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaSearch, FaUserFriends, FaVideo } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { usePathname } from 'next/navigation';
import ModalCus from '@/components/Modal/ModalCus';
import PopoverCus from '@/components/Popover/PopoverCus';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { Avatar } from '@nextui-org/react';


// Header Mode Items 
const headerModeItems = [
    {
        name: "Home",
        icon: <FaHome />,
        path: "/"
    },
    {
        name: "Stories",
        icon: <FiZap />,
        path: "/stories"
    },
    {
        name: "Videos",
        icon: <FaVideo />,
        path: "/videos"
    },
    {
        name: "Friends",
        icon: <FaUserFriends />,
        path: "/friends"
    },
]

// Header Item
const search = <>
    <div className='flex items-center gap-2 cursor-pointer'>
        <FaSearch className='text-gray-600' />
        <input className='py-2 bg-transparent' type="text" placeholder="Search" />
    </div>
</>

const notification = <>
    <span className='p-3 rounded-full bg-slate-200'>
        <IoIosNotificationsOutline className='text-2xl' />
    </span>
</>

const settings = <>
    <span className='p-[10px] rounded-full bg-slate-200'>
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
            <CiSettings className='text-3xl' />
        </motion.div>
    </span>
</>

const profile = <>
    <div>
        <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
    </div>
</>

const Header = () => {
    const pathname = usePathname();



    return (
        <div className='w-full py-5 bg-white sm:px-3 lg:px-5'>
            <div className='grid items-center md:grid-cols-5'>
                <div>
                    <Link href="/" className='block'>
                        <div className={`flex items-center gap-3`}>
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
                                <Image src={logo} width={50} height={50} priority alt='Logo' />
                            </motion.div>
                            <h2 className={`transition-all duration-300 hidden font-semibold lg:block lg:text-2xl dark:text-gray-200`}>Nexus Media</h2>
                        </div>
                    </Link>
                </div>
                <div className='flex items-center gap-5 md:col-span-3'>
                    <div>
                        <ModalCus name={search}></ModalCus>
                    </div>
                    <div className='flex items-center gap-4'>
                        {
                            headerModeItems.map(item => <Link className={`${item.path === pathname ? "text-[#1e74fd] bg-[#d2e3ff] border-[#bcd5fe]" : "bg-[#efeeee] text-[#adb5bd]"}  p-3 rounded-full`} href={item.path} key={item.name}>
                                <span className='text-2xl'>{item.icon}</span>
                            </Link>)
                        }
                    </div>
                </div>
                <div className='flex items-center justify-end gap-5'>
                    <PopoverCus name={notification}>
                    </PopoverCus>
                    <Link className='block' href={"/message"}>
                        <button className='p-3 rounded-full bg-slate-200'>
                            <FiMessageSquare className='text-2xl' />
                        </button>
                    </Link>
                    <PopoverCus name={settings}>
                    </PopoverCus>
                    <PopoverCus name={profile}>
                    </PopoverCus>
                </div>
            </div>
        </div>
    );
};

export default Header;