"use client"
import ModalChat from '@/components/ModalChat/ModalChat';
import React, { useState } from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
import ReactDOM from 'react-dom';

const ProfileChat = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button
                onClick={() => setShowModal(!showModal)}
                className='p-3 rounded-full bg-light-bg hover:bg-light-bg-hover dark:bg-dark-bg dark:hover:bg-dark-bg-hover dark:text-dark-text text-light-text'
            >
                <FaFacebookMessenger className='text-2xl' />
            </button>

            {/* Chat Modal By Notification */}
            {showModal &&
                ReactDOM.createPortal(
                    <ModalChat modal={showModal} setModal={setShowModal} />,
                    document.body
                )}
        </div>
    );
};

export default ProfileChat;