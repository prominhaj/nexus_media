import Button from '@/components/Button/Button';
import VerifiedBadges from '@/components/Posts/VerifiedBadges/VerifiedBadges';
import { Avatar, AvatarGroup } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import ProfileMenu from '@/components/Profiles/ProfileMenu/ProfileMenu';
import ProfileEdit from '@/components/Profiles/ProfileEdit/ProfileEdit';

const messageBtn = (
    <>
        <button className='p-3 rounded-full bg-light-bg hover:bg-light-bg-hover dark:bg-dark-bg dark:hover:bg-dark-bg-hover dark:text-dark-text text-light-text'>
            <FaFacebookMessenger className='text-2xl' />
        </button>
    </>
);

const ProfilePage = () => {
    return (
        <div className=''>
            <div className='p-3 bg-white dark:bg-[#293145] rounded-md shadow-lg md:p-5'>
                <div>
                    <Image
                        width={600}
                        height={400}
                        className='object-cover rounded-xl w-full max-h-[15rem] md:max-h-[18rem] lg:max-h-[25rem]'
                        src={
                            'https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }
                        alt='Cover Photo'
                    />
                </div>
                <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
                    <div className='flex flex-col items-center lg:items-start lg:flex-row lg:gap-8 lg:ps-5'>
                        <div className='relative w-32 h-32 overflow-hidden rounded-full shadow-2xl cursor-pointer md:w-40 md:h-40 group shadow-gray-900 dark:shadow-gray-300 ring-4 ring-blue-500 dark:ring-pink-500 -top-20 lg:-top-10'>
                            <Image
                                width={100}
                                height={100}
                                className='z-20 object-cover w-full h-full border-2 rounded-full'
                                src={
                                    'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='Profile Photo'
                            />
                            <div className='absolute top-0 bottom-0 left-0 right-0 z-40 hidden w-full h-full transition-all group-hover:duration-500 bg-gray-800/50 dark:bg-gray-200/50 group-hover:block'>
                                <span className='flex items-center justify-center w-full h-full text-gray-300 dark:text-gray-900'>
                                    <FaCamera className='text-2xl' />
                                </span>
                            </div>
                        </div>
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
                        {messageBtn}

                        {/* Profile Menus */}
                        <ProfileMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
