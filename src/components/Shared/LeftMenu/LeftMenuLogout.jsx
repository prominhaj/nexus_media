"use client"
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Logout from "../Logout/Logout";

const LeftMenuLogout = () => {

    return (
        <Logout>
            <button className='w-full px-3 hover:bg-[#F2F2F2] dark:text-gray-300 dark:hover:bg-[#3A3B3C] rounded-md py-2 text-[1.02rem transition-all duration-300'>
                <span className="flex items-center gap-2 sm:gap-3">
                    <span className="p-2 bg-gray-300 rounded-full dark:bg-gray-600">
                        <HiArrowRightOnRectangle className="text-2xl" />
                    </span>
                    <span className="text-lg font-medium">
                        Logout
                    </span>
                </span>
            </button>
        </Logout>
    );
};

export default LeftMenuLogout;