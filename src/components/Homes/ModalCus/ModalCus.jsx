"use client";
import { IoMdClose } from "react-icons/io";
import { Dialog } from '@radix-ui/themes';

const ModalCus = ({ name, modalTitle, submitButton, children }) => {

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <button className="w-full">
                        {name}
                    </button>
                </Dialog.Trigger>

                <Dialog.Content className="relative" size="3" maxWidth="500px">
                    <div className='flex items-start justify-between'>
                        <Dialog.Title>{modalTitle}</Dialog.Title>
                        <div className='absolute top-2 right-2'>
                            <Dialog.Close>
                                <button className="p-2 duration-300 rounded-full hover:bg-gray-500">
                                    <IoMdClose className="text-2xl" />
                                </button>
                            </Dialog.Close>
                        </div>
                    </div>
                    <div className='pt-2'>
                        {children}
                    </div>
                </Dialog.Content>
            </Dialog.Root>

            {/* <Button className={`!px-0 !py-0 bg-transparent !min-w-full !h-full ${classes && classes}`} onPress={onOpen}>{name}</Button>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                radius="lg"
                onOpenChange={onOpenChange}
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    base: "border-gray-400 dark:border-[#292f46] dark:bg-[#19172c] dark:text-[#a8b0d3]",
                    header: "border-b-[1px] dark:border-[#292f46] py-3",
                    footer: "border-t-[1px] dark:border-[#292f46]",
                    closeButton: "hover:bg-white/5 active:bg-white/10 text-2xl",
                }}
            >
                <ModalContent className='dark:bg-[#0E1526] border dark:border-gray-700'>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{modalTitle && modalTitle}</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal> */}
        </>
    );
};

export default ModalCus;