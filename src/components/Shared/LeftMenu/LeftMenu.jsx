import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { SlSettings } from "react-icons/sl";
import { IoAlertCircleSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import ReloadPageBtn from "./reloadPageBtn";
import LeftMenuNavigation from "./LeftMenuNavigation";
import LeftMenuLogout from "./LeftMenuLogout";
import FramerMotion from "@/components/Global/Motion/FramerMotion";

// Left Menu Items
const leftMenuItems = [
    {
        name: "Profile",
        path: "/profile/1/posts",
        icon: <CgProfile className="text-2xl" />
    },
    {
        name: 'Saved',
        path: '/saved',
        icon: <FaBookmark className="text-2xl" />
    },
    {
        name: 'Contact',
        path: '/contact',
        icon: <BiSolidContact className="text-2xl" />
    },
    {
        name: 'About',
        path: '/about',
        icon: <IoAlertCircleSharp className="text-2xl" />
    },

]

const leftActionItems = [
    {
        name: 'Account Setting',
        path: '/account/setting',
        icon: <div className='rounded-full bg-slate-200 dark:bg-gray-600'>
            <FramerMotion>
                <SlSettings className="text-2xl" />
            </FramerMotion>
        </div>
    },
    {
        name: 'Chat',
        path: '/message',
        icon: <MdOutlineChatBubbleOutline className="text-2xl" />
    }
]

const LeftMenu = () => {

    return (

        <div className="h-screen transition-all duration-300 rounded-lg bg-light-menu-bg dark:bg-dark-menu-bg md:space-y-5">
            <div className='flex flex-col gap-2 p-3 bg-transparent rounded-lg md:bg-light-menu-bg md:dark:bg-dark-menu-bg'>
                {/* Reload Button */}
                <ReloadPageBtn />

                {
                    leftMenuItems.map((item, index) =>
                        <LeftMenuNavigation key={index} item={item} />
                    )
                }
            </div>
            <hr className="dark:border-t-gray-600 border-t-gray-300" />
            <div className='flex flex-col gap-2 p-3 bg-transparent rounded-lg md:bg-light-menu-bg md:dark:bg-dark-menu-bg'>
                {
                    leftActionItems.map((item, index) =>
                        <LeftMenuNavigation key={index} item={item} />
                    )
                }
                <LeftMenuLogout />
            </div>
        </div >
    );
};

export default LeftMenu;