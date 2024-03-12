'use client';
import VerifiedBadges from '@/components/Posts/VerifiedBadges/VerifiedBadges';
import { Avatar, AvatarGroup } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaFacebookMessenger } from 'react-icons/fa';
import ProfileMenu from '@/components/Profiles/ProfileMenu/ProfileMenu';
import ProfileEdit from '@/components/Profiles/ProfileEdit/ProfileEdit';
import ProfilePhoto from '@/components/Profiles/ProfilePhoto/ProfilePhoto';
import ModalChat from '@/components/ModalChat/ModalChat';
import { FaCamera } from 'react-icons/fa';

const ProfilePage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className=''>
            <div className='p-3 bg-white dark:bg-[#293145] rounded-md shadow-lg md:p-5'>
                <div className='relative'>
                    <Image
                        width={600}
                        height={400}
                        className='object-cover rounded-xl w-full max-h-[15rem] md:max-h-[18rem] lg:max-h-[25rem]'
                        src={
                            'https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }
                        alt='Cover Photo'
                    />
                    <button className='absolute flex items-center gap-2 px-3 py-2 font-medium rounded-md bg-light-bg dark:bg-dark-bg dark:text-dark-text bottom-2 right-2 text-light-text'>
                        <FaCamera className='text-lg' />
                        <small className='hidden lg:block'>Edit Cover Photo</small>
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
                    <div className='flex flex-col items-center lg:items-start lg:flex-row lg:gap-8 lg:ps-5'>
                        {/* Profile Photo */}
                        <ProfilePhoto />

                        <div className='flex flex-col items-center lg:items-start gap-1 mt-[-3.75rem] lg:mt-0 mb-5 lg:mb-0 lg:pt-3'>
                            <div className='flex items-center gap-1'>
                                <h2 className='font-semibold text-xl dark:text-gray-200 text-[#111111] tracking-wide'>
                                    Md Minhaj
                                </h2>
                                <VerifiedBadges />
                            </div>
                            <h6 className='text-[#adb5bd] font-medium text-sm'>
                                mdminhaj322532@gmail.com
                            </h6>
                            <div className='pt-2'>
                                <AvatarGroup
                                    className='justify-start'
                                    isBordered
                                    max={4}
                                    total={10}
                                >
                                    <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                                    <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
                                    <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
                                    <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' />
                                    <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
                                    <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                                </AvatarGroup>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        {/* Add Friend button */}
                        {/* <Button
                            className={
                                'bg-gradient-to-r from-blue-600 to-blue-500 text-white !py-3'
                            }
                        >
                            Add Friend
                        </Button> */}

                        {/* Profile Edit */}
                        <ProfileEdit />

                        {/* Message  */}
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

                        {/* Profile Menus */}
                        <ProfileMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
