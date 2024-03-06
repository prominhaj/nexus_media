import useColor from '@/Hooks/useColor';
import SearchCombobox from '@/components/SearchCombobox/SearchCombobox';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchModal = ({ data, search }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { color } = useColor();

    return (
        <>
            <>
                <div className="">
                    {
                        search ? <button onClick={() => setIsOpen(true)}>{search}</button> : <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="p-3 rounded-full bg-slate-200 dark:bg-gray-600"
                        >
                            <IoSearch className={`text-2xl font-semibold ${color ? color : "text-gray-600 dark:text-gray-200"}`} />
                        </button>
                    }
                </div>

                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0">
                            <div className="flex items-center justify-center min-h-full p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md p-6 text-left align-middle transition-all transform bg-white dark:bg-[#1A2236] shadow-xl rounded-2xl">
                                        <div>
                                            {/* Search Combobox Component */}
                                            <SearchCombobox data={data} />
                                        </div>
                                        <div className='mt-3 text-end'>
                                            <button onClick={() => setIsOpen(false)} className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md dark:bg-gray-500 dark:text-gray-300 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>Close</button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </>
    );
};

export default SearchModal;