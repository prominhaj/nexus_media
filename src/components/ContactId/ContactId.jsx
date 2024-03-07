"use client"
import { Avatar } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

const ContactId = () => {
    const [active, setActive] = useState(null)

    useEffect(() => {
        if (window.navigator.onLine) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [])

    return (
        <div className='flex flex-wrap items-center justify-between gap-2 px-1 cursor-pointer xl:px-3 2xl:pr-10'>
            <div className='flex items-center gap-3'>
                <Avatar isBordered color="danger" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <h2 className='font-semibold text-gray-800 dark:text-gray-200'>Jone Sone</h2>
            </div>
            <div>
                {
                    active ? <div className='w-3 h-3 bg-green-500 rounded-full'></div> : <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
                }
            </div>
        </div>
    );
};

export default ContactId;