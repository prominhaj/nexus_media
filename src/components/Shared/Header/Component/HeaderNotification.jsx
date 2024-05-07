"use client";
import PopoverCus from "@/components/Homes/Popover/PopoverCus";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { useState } from "react";
import ReactDOM from 'react-dom';
import dynamic from "next/dynamic";

// Dynamic Import
const ModalChat = dynamic(
    () => import('@/components/ModalChat/ModalChat'),
    {
        loading: () => <p>Loading...</p>,
    }
)
const Notification = dynamic(
    () => import('../../Notification/Notification'),
    {
        loading: () => <p>Loading...</p>,
    }
)

const HeaderNotification = () => {
    const [modal, setModal] = useState(false);

    const notification = <>
        <span className="flex items-center justify-center p-3 rounded-full bg-light-bg dark:bg-dark-bg dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-250 dark:text-dark-text">
            <HiOutlineBellAlert className='text-2xl' />
        </span>
    </>
    return (
        <>
            <PopoverCus name={notification}>
                <Notification modal={modal} setModal={setModal} />
            </PopoverCus>

            {/* Chat Modal By Notification */}
            {
                modal && ReactDOM.createPortal(<ModalChat modal={modal} setModal={setModal} />, document.body)
            }
        </>
    );
};

export default HeaderNotification;