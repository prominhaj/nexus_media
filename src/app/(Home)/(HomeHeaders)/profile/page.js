import Button from '@/components/Button/Button';
import VerifiedBadges from '@/components/Posts/VerifiedBadges/VerifiedBadges';
import { Avatar, AvatarGroup } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaCamera } from 'react-icons/fa';

const ProfilePage = () => {
    return (
        <div className=''>
            <div className='p-3 bg-white dark:bg-[#293145] rounded-md shadow-lg md:p-5'>
                <div>
                    <Image
                        width={600}
                        height={400}
                        className='object-cover rounded-xl w-full max-h-[25rem]'
                        src={
                            'https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }
                        alt='Cover Photo'
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-start gap-5 md:gap-8 ps-3 md:ps-5'>
                        <div className='relative w-40 h-40 overflow-hidden rounded-full shadow-2xl cursor-pointer group shadow-gray-900 dark:shadow-gray-300 ring-4 ring-blue-500 dark:ring-pink-500 -top-10'>
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
                        <div className='flex flex-col gap-1 pt-3'>
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
                    <div>
                        <Button
                            className={'bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-600'}
                        >
                            Show Me
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
