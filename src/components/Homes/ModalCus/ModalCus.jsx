"use client";
import { IoMdClose } from "react-icons/io";
import { Button, Dialog } from '@radix-ui/themes';

const ModalCus = ({ name, modalTitle, closeHidden, buttonClass, children }) => {

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <button className='w-full'>
                        {name}
                    </button>
                </Dialog.Trigger>

                <Dialog.Content className="relative" size="3" maxWidth="500px">
                    <div className='flex items-start justify-between'>
                        <Dialog.Title>{modalTitle}</Dialog.Title>

                        {/* Modal Close Button */}
                        {!closeHidden && (
                            <div className='absolute top-2 right-2'>
                                <Dialog.Close>
                                    <button className="p-2 duration-300 rounded-full hover:bg-[#E4E6EB] dark:hover:bg-gray-500">
                                        <IoMdClose className="text-2xl" />
                                    </button>
                                </Dialog.Close>
                            </div>
                        )}


                    </div>
                    <div className='pt-2'>
                        {children}
                    </div>
                    {closeHidden && <Dialog.Close>
                        <Button className="!mt-3 !flex !justify-end !items-center" variant="soft" color="gray">Close</Button>
                    </Dialog.Close>}
                </Dialog.Content>
            </Dialog.Root >
        </>
    );
};

export default ModalCus;