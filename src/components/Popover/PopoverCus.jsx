import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const PopoverCus = ({ name, children, classes }) => {
    return (
        <div>
            <Menu as="div" className="relative text-left">
                <div>
                    <Menu.Button className="flex justify-center">
                        {name}
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className={`absolute right-0 z-40 w-56 mt-3 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-gray-600 ring-1 ring-black/5 focus:outline-none ${classes && classes}`}>
                        <Menu.Item>
                            <div>
                                {children}
                            </div>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}


export default PopoverCus