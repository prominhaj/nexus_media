"use client";
import { ThemeContext } from "@/Providers/ThemeContext";
import { useContext } from "react";
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

const HeaderSetting = () => {
    const [theme, toggleButton] = useContext(ThemeContext);

    return (
        <>
            <button className='text-light-text text-2xl dark:text-dark-text bg-light-bg hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover dark:bg-dark-bg p-2.5 rounded-full' onClick={toggleButton}>
                {theme === "dark" ? <MdSunny /> : <IoIosMoon />}
            </button>
        </>
    );
};

export default HeaderSetting;