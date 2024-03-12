import PopoverCus from '@/components/Homes/Popover/PopoverCus';
import PostAction from '@/components/Posts/PostAction/PostAction';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { GoPlus } from "react-icons/go";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";

const profileMenuBtn = <>
    <button className='p-3 rounded-full text-light-text bg-light-bg hover:bg-light-bg-hover dark:bg-dark-bg dark:hover:bg-dark-bg-hover dark:text-dark-text'>
        <BsThreeDots className='text-2xl' />
    </button>
</>

const ProfileMenu = () => {
    return (
        <div>

            <PopoverCus name={profileMenuBtn}>
                <div className='flex flex-col gap-2 p-2'>
                    <PostAction icon={<GoPlus />} title={"Add to Story"} text={"Add a new Story"} />
                    <PostAction icon={<RiSecurePaymentLine />} title={"Profile Status"} text={"Check your profile status"} />
                    <PostAction icon={<MdOutlineVerified />} title={"Get a Verified Profile"} text={"Apply Verified Profile"} />
                </div>
            </PopoverCus>
        </div>
    );
};

export default ProfileMenu;