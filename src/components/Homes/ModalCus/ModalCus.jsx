import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const ModalCus = ({ name, modalTitle, children, action, classes, onClick, disabled }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Button className={`!px-0 !py-0 bg-transparent !min-w-full !h-full ${classes && classes}`} onPress={onOpen}>{name}</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className='dark:bg-[#0E1526] border dark:border-gray-700'>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{modalTitle && modalTitle}</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                            <ModalFooter>
                                <Button className='dark:bg-[#441729] bg-[#FDD0DF]' color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                {
                                    action && <Button className='disabled:bg-opacity-50 disabled:opacity-90' disabled={disabled && disabled} color="primary" onClick={onClick}>
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