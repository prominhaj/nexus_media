"use client";
import FramerMotion from "@/components/Global/Motion/FramerMotion";
import PopoverCus from "@/components/Homes/Popover/PopoverCus";
import Setting from "@/components/Homes/SettingComp/Setting";
import { HiOutlineCog8Tooth } from "react-icons/hi2";

const HeaderSetting = () => {
    const settings = <>
        <span className='p-3 lg:p-[10px] rounded-full bg-light-bg dark:bg-dark-bg dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-250'>
            <FramerMotion>
                <HiOutlineCog8Tooth className="text-2xl lg:text-3xl" />
            </FramerMotion>
        </span>
    </>

    return (
        <PopoverCus name={settings}>
            <Setting />
        </PopoverCus>
    );
};

export default HeaderSetting;