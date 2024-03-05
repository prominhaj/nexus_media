"use client"
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaSearch, FaUserFriends, FaVideo } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { usePathname } from 'next/navigation';
import PopoverCus from '@/components/Popover/PopoverCus';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { Avatar } from '@nextui-org/react';
import SearchModal from '../Modal/SearchModal';
import { Fredoka } from 'next/font/google';
import Setting from '@/components/SettingComp/Setting';

const fredoka = Fredoka({
    weight: ['500', '600', '700'],
    subsets: ['latin'],
    display: 'swap'
});

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
    <div className='flex items-center gap-2 px-3 bg-gray-200 rounded-md cursor-pointer'>
        <FaSearch className='text-gray-600' />
        <input className='py-2 bg-transparent outline-none cursor-pointer' type="text" placeholder="Search" />
    </div>
</>

const notification = <>
    <span className='p-3 rounded-full bg-slate-200'>
        <IoIosNotificationsOutline className='text-2xl' />
    </span>
</>

const settings = <>
    <span className='p-3 lg:p-[10px] rounded-full bg-slate-200'>
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
            <CiSettings className='text-2xl lg:text-3xl' />
        </motion.div>
    </span>
</>

const profile = <>
    <div>
        <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
    </div>
</>


// face data for search
const people = [
    { _id: 1, name: 'Wade Cooper' },
    { _id: 2, name: 'Arlene Mccoy' },
    { _id: 3, name: 'Devon Webb' },
    { _id: 4, name: 'Tom Cook' },
    { _id: 5, name: 'Tanya Fox' },
    { _id: 6, name: 'Hellen Schmidt' },
]


const Header = () => {
    const pathname = usePathname();

    return (
        <div className='w-full px-3 py-5 shadow bg-white/75 lg:px-5'>
            <div className='grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                <div>
                    <Link href="/" className='block'>
                        <div className="flex items-center gap-3">
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
                                <Image className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]' src={logo} width={50} height={50} priority alt='Logo' />
                            </motion.div>
                            <h2 className={`${fredoka.className} hidden text-xl font-semibold transition-all duration-300 sm:block md:text-2xl dark:text-gray-200`}>Nexus Media</h2>
                        </div>
                    </Link>
                </div>
                <div className='hidden md:block lg:col-span-2 xl:col-span-3'>
                    <div className='flex items-center gap-5 '>
                        <div>
                            <SearchModal search={search} data={people} />
                        </div>
                        <div className='hidden lg:block'>
                            <div className='flex items-center gap-4'>
                                {
                                    headerModeItems.map(item => <Link className={`${item.path === pathname ? "text-[#1e74fd] bg-[#d2e3ff] border-[#bcd5fe]" : "bg-[#efeeee] text-[#adb5bd]"}  p-3 rounded-full`} href={item.path} key={item.name}>
                                        <span className='text-2xl'>{item.icon}</span>
                                    </Link>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block sm:hidden'>
                    <div className='flex items-center justify-end gap-3'>

                        <SearchModal data={people} />
                        <PopoverCus name={settings}></PopoverCus>

                        {/* Bar Coming Soon */}

                    </div>
                </div>
                <div className='hidden sm:block'>
                    <div className='flex justify-end'>
                        <div className='flex items-center gap-5'>
                            <PopoverCus name={notification}>
                            </PopoverCus>
                            <Link className='block' href={"/message"}>
                                <button className='p-3 rounded-full bg-slate-200'>
                                    <FiMessageSquare className='text-2xl' />
                                </button>
                            </Link>
                            <PopoverCus name={settings}>
                                <Setting />
                            </PopoverCus>
                            <PopoverCus name={profile}>
                            </PopoverCus>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Menu */}
            <div className='block md:hidden'>
                <div className='fixed bottom-0 left-0 right-0 px-3 py-2 sm:px-5 bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <div className='flex items-center justify-between gap-3 sm:gap-0'>
                        {
                            headerModeItems.map(item => <Link className={`${item.path === pathname ? "text-[#eef1f5] bg-[#3b70c6] border-[#bcd5fe]" : "bg-[#efeeee] text-[#adb5bd]"}  p-3 rounded-full`} href={item.path} key={item.name}>
                                <span className='text-2xl'>{item.icon}</span>
                            </Link>)
                        }
                        <PopoverCus classes={"-top-12"} name={profile}>
                        </PopoverCus>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;