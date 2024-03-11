import { Avatar } from '@nextui-org/react';
import Link from 'next/link';

const Notification = ({ modal, setModal }) => {

    return (
        <>
            <div className='p-3'>
                <h2 className='text-lg font-medium'>Notification</h2>
                <div className='pt-3'>
                    <div onClick={() => setModal(!modal)} className='flex items-start gap-2 cursor-pointer'>
                        <Link href={"/profile"}>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        </Link>
                        <div className='w-full'>
                            <div className='flex items-center justify-between'>
                                <h2 className='font-semibold text-[#212529] dark:text-gray-300'>Jone Sone</h2>
                                <span className='text-[.75rem] text-[#65676B] dark:text-[#B0B3B8] font-normal'>12 m</span>
                            </div>
                            <small className='text-sm font-medium text-gray-500'>Hello How Are You?</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notification;