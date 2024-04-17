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
import { HiOutlineBellAlert, HiOutlineCog8Tooth } from "react-icons/hi2";
import { FaFacebookMessenger } from "react-icons/fa6";
import './Header.css'
import Notification from '../Notification/Notification';
import { useState } from 'react';
import ModalChat from '@/components/ModalChat/ModalChat';
import useAuth from '@/Hooks/useAuth';

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
    const user = useAuth();
    const pathname = usePathname();
    const { color } = useColor();
    const [modal, setModal] = useState(false);

    // Header Item
    const search = <>
        <div className='flex items-center gap-2 px-3 rounded-md cursor-pointer bg-light-bg dark:bg-dark-bg hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover'>
            <FaSearch className={`${color ? color : 'text-light-text dark:text-dark-text'}`} />
            <input className='py-2 bg-transparent outline-none cursor-pointer' type="text" placeholder="Search" />
        </div>
    </>

    const notification = <>
        <span className={`p-3 rounded-full bg-light-bg dark:bg-dark-bg dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-250 ${color ? color : 'dark:text-dark-text'}`}>
            <HiOutlineBellAlert className='text-2xl' />
        </span>
    </>

    const settings = <>
        <span className='p-3 lg:p-[10px] rounded-full bg-light-bg dark:bg-dark-bg dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-250'>
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
            <Avatar isBordered color="success" src={user?.photoURL} />
        </div>
    </>

    return (
        <div className='sticky top-0 z-[45] w-full px-3 py-3.5 shadow bg-light-header-bg lg:px-5 dark:bg-dark-header-bg'>
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
                                <Image className='w-[2.5rem] h-[2.5rem] block' src={logo} width={50} height={50} priority alt='Logo' />
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
                                    headerModeItems.map(item => <Link className={`${item.path === pathname ? "text-white dark:text-[#1e74fd] dark:bg-white bg-black" : `${color ? `${color}` : "text-light-text dark:text-dark-text"} bg-light-bg hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover dark:bg-dark-bg`} p-2.5 rounded-full`} href={item.path} key={item.name}>
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
                                <button className='p-3 rounded-full bg-light-bg dark:bg-dark-bg dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-250'>
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
                <div className='fixed bottom-0 left-0 right-0 z-50 px-3 py-2 sm:px-5 bg-light-header-bg dark:bg-dark-header-bg'>
                    <div className='flex items-center justify-between gap-3 sm:gap-0'>
                        {
                            headerModeItems.map(item => <Link className={`${item.path === pathname ? "text-[#eef1f5] bg-[#3b70c6] border-[#bcd5fe]" : `${color ? color : "text-light-text dark:text-dark-text"} bg-light-bg hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover dark:bg-dark-bg`} p-3 rounded-full`} href={item.path} key={item.name}>
                                <span className='text-2xl'>{item.icon}</span>
                            </Link>)
                        }
                        <ProfileItems classes={"bottom-12"} name={profile} bottom={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;