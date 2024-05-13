import './Header.css';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaUserFriends, FaVideo } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import ProfileItems from '../Profile/ProfileItems';
import OffCanvas from '@/components/Homes/OffCanvas/OffCanvas';
import FramerMotion from '@/components/Global/Motion/FramerMotion';
import Search from './Component/Search';
import HeaderNavigation from './Component/HeaderNavigation';
import HeaderSetting from './Component/HeaderSetting';
import MessageNavigation from './Component/MessageNavigation';
import HeaderNotification from './Component/HeaderNotification';

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

const Header = () => {

    return (
        <div className='sticky top-0 z-[45] w-full px-3 py-3.5 shadow bg-light-header-bg/80 lg:px-5 dark:bg-dark-header-bg/80'>
            <div className='grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                <div>
                    <Link href="/" className='block'>
                        <div className="flex items-center gap-3">
                            <FramerMotion>
                                <Image className='w-[2.5rem] h-[2.5rem] block' src={logo} width={50} height={50} priority alt='Logo' />
                            </FramerMotion>
                            <h2 className={`bg-gradient-to-r from-neutral-800 to-fuchsia-500 dark:from-neutral-400 dark:to-blue-500 text-lg font-semibold bg-clip-text text-transparent transition-all duration-300 sm:block md:text-2xl logo-name`}>Nexus Media</h2>
                        </div>
                    </Link>
                </div>
                <div className='hidden md:block lg:col-span-2 xl:col-span-3'>
                    <div className='flex items-center gap-5 '>

                        {/* Search */}
                        <Search />
                        {/* Search End */}
                        <div className='hidden lg:block'>
                            <div className='flex items-center gap-4'>
                                {
                                    headerModeItems.map((item, index) => <HeaderNavigation key={index} item={item} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block md:hidden'>
                    <div className='flex items-center justify-end gap-3'>

                        <Search mobile={true} />
                        <HeaderSetting />

                        {/* Mobile Responsive Menu Bar */}
                        <OffCanvas />
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='flex justify-end'>
                        <div className='flex items-center gap-5'>
                            {/* Notification */}
                            <HeaderNotification />

                            <MessageNavigation />
                            <HeaderSetting />
                            <ProfileItems />
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Menu */}
            <div className='block md:hidden'>
                <div className='fixed bottom-0 left-0 right-0 z-50 px-3 py-2 sm:px-5 bg-light-header-bg dark:bg-dark-header-bg'>
                    <div className='flex items-center justify-between gap-3 sm:gap-0'>
                        {
                            headerModeItems.map((item, index) => <HeaderNavigation key={index} item={item} />)
                        }
                        <ProfileItems />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;