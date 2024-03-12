import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const ProfileMenu = () => {
    return (
        <div>
            <button className='p-3 rounded-full text-light-text bg-light-bg hover:bg-light-bg-hover dark:bg-dark-bg dark:hover:bg-dark-bg-hover dark:text-dark-text'>
                <BsThreeDots className='text-2xl' />
            </button>
        </div>
    );
};

export default ProfileMenu;