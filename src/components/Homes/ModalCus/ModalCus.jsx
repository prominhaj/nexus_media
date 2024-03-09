import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const ModalCus = ({ name, modalTitle, children, action, classes, onClick, disabled }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Button className={`!px-0 !py-0 bg-transparent !min-w-full !h-full ${classes && classes}`} onPress={onOpen}>{name}</Button>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                radius="lg"
                onOpenChange={onOpenChange}
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    base: "border-gray-400 dark:border-[#292f46] dark:bg-[#19172c] dark:text-[#a8b0d3]",
                    header: "border-b-[1px] dark:border-[#292f46]",
                    footer: "border-t-[1px] dark:border-[#292f46]",
                    closeButton: "hover:bg-white/5 active:bg-white/10",
                }}
            >
                <ModalContent className='dark:bg-[#0E1526] border dark:border-gray-700'>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{modalTitle && modalTitle}</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="foreground" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                {
                                    action && <Button className='disabled:bg-opacity-50 disabled:opacity-90 bg-[#6f4ef2] shadow-lg shadow-indigo-500/20' disabled={disabled && disabled} color="primary" onClick={onClick}>
                                        {action}
                                    </Button>
                                }
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ModalCus;