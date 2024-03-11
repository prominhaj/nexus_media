"use client"
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaSearch, FaUserFriends, FaVideo } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { usePathname } from 'next/navigation';
import PopoverCus from '@/components/Homes/Popover/PopoverCus';
import { Avatar } from '@nextui-org/react';
import SearchModal from '../Modal/SearchModal';
import Setting from '@/components/Homes/SettingComp/Setting';
import ProfileItems from '../Profile/ProfileItems';
import useColor from '@/Hooks/useColor';
import ReactDOM from 'react-dom';
import { HiMiniChatBubbleLeftEllipsis, HiOutlineBellAlert, HiOutlineCog8Tooth } from "react-icons/hi2";
import { FaFacebookMessenger } from "react-icons/fa6";
import './Header.css'
import Notification from '../Notification/Notification';
import { useState } from 'react';
import ModalChat from '@/components/ModalChat/ModalChat';

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

// face data for search
const people = [
    { _id: 1, name: 'Wade Cooper' },
    { _id: 2, name: 'Arlene Mccoy' },
    { _id: 3, name: 'Devon Webb' },
    { _id: 4, name: 'Tom Cook' },
    { _id: 5, name: 'Tanya Fox' },
    { _id: 6, name: 'Hellen Schmidt' },
]

const Header = ({ children }) => {
    const pathname = usePathname();
    const { color } = useColor();
    const [modal, setModal] = useState(false);

    // Header Item
    const search = <>
        <div className='flex items-center gap-2 px-3 bg-gray-200 rounded-md cursor-pointer dark:bg-[#3A3B3C]'>
            <FaSearch className={`${color ? color : 'text-gray-600 dark:text-gray-300'}`} />
            <input className='py-2 bg-transparent outline-none cursor-pointer' type="text" placeholder="Search" />
        </div>
    </>

    const notification = <>
        <span className={`p-3 rounded-full bg-slate-200 dark:bg-gray-600 dark:hover:bg-[#394D62] hover:bg-[#DDE6F0] duration-250 dark:hover:text-[#2176FF] hover:text-[#0861F2] ${color ? color : 'dark:text-gray-200'}`}>
            <HiOutlineBellAlert className='text-2xl' />
        </span>
    </>

    const settings = <>
        <span className='p-3 lg:p-[10px] rounded-full bg-slate-200 dark:bg-gray-600 dark:hover:bg-[#394D62] hover:bg-[#DDE6F0] duration-250 dark:hover:text-[#2176FF] hover:text-[#0861F2]'>
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
                <HiOutlineCog8Tooth className={`text-2xl lg:text-3xl ${color && color}`} />
            </motion.div>
        </span>
    </>

    const profile = <>
        <div>
            <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        </div>
    </>

    return (
        <div className='w-full px-3 py-5 shadow bg-white lg:px-5 dark:bg-[#0B1120] sticky top-0 z-50'>
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
                                <Image className='w-[40px] h-[40px] block' src={logo} width={50} height={50} priority alt='Logo' />
                            </motion.div>
                            <h2 className={`bg-gradient-to-r from-neutral-800 to-fuchsia-500 dark:from-neutral-400 dark:to-blue-500 text-lg font-semibold bg-clip-text text-transparent transition-all duration-300 sm:block md:text-2xl logo-name`}>Nexus Media</h2>
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
                                    headerModeItems.map(item => <Link className={`${item.path === pathname ? "text-[#1e74fd] dark:text-[#1e74fd] bg-[#d2e3ff] dark:bg-[#d2e3ff] border-[#bcd5fe]" : `${color ? `${color}` : "text-gray-600 dark:text-gray-200"} bg-[#efeeee] dark:bg-gray-600`} p-3 rounded-full`} href={item.path} key={item.name}>
                                        <span className='text-2xl'>{item.icon}</span>
                                    </Link>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block md:hidden'>
                    <div className='flex items-center justify-end gap-3'>

                        <SearchModal data={people} />
                        <PopoverCus name={settings}>
                            <Setting />
                        </PopoverCus>

                        {/* Bar Coming Soon */}
                        {children}
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='flex justify-end'>
                        <div className='flex items-center gap-5'>
                            {/* Notification */}
                            <PopoverCus name={notification} classes={"w-72"}>
                                <Notification modal={modal} setModal={setModal} />
                            </PopoverCus>

                            {/* Chat Modal By Notification */}
                            {
                                modal && ReactDOM.createPortal(<ModalChat modal={modal} setModal={setModal} />, document.body)
                            }

                            <Link className='block' href={"/message"}>
                                <button className='p-3 rounded-full bg-slate-200 dark:bg-gray-600 dark:hover:bg-[#394D62] hover:bg-[#DDE6F0] duration-250 dark:hover:text-[#2176FF] hover:text-[#0861F2]'>
                                    <FaFacebookMessenger className={`text-2xl ${color && color}`} />
                                </button>
                            </Link>
                            <PopoverCus name={settings}>
                                <Setting />
                            </PopoverCus>
                            <ProfileItems name={profile} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Menu */}
            <div className='block md:hidden'>
                <div className='fixed bottom-0 left-0 right-0 z-50 px-3 py-2 sm:px-5 bg-gradient-to-r from-green-600 to-teal-700 dark:bg-gradient-to-r dark:from-purple-600 dark:to-indigo-700'>
                    <div className='flex items-center justify-between gap-3 sm:gap-0'>
                        {
                            headerModeItems.map(item => <Link className={`${item.path === pathname ? "text-[#eef1f5] bg-[#3b70c6] border-[#bcd5fe]" : `${color ? color : "text-[#adb5bd]"} bg-[#efeeee]`}  p-3 rounded-full`} href={item.path} key={item.name}>
                                <span className='text-2xl'>{item.icon}</span>
                            </Link>)
                        }
                        <ProfileItems classes={"bottom-12"} name={profile} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;