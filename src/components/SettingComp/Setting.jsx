import { ThemeContext } from '@/Context/ThemeContext';
import useColor from '@/Hooks/useColor';
import { Switch } from '@headlessui/react';
import React, { useContext, useState } from 'react';


const Setting = () => {
    const [theme, toggleButton] = useContext(ThemeContext);
    const [enabled, setEnabled] = useState(theme === "dark" ? true : false);
    const { color, setColor, setBgColor } = useColor();

    const handleColor = (color) => {
        setColor(color.colorClass)
        setBgColor(color.bgClass)
    }

    // Colors
    const colors = [
        {
            id: 1,
            colorClass: theme === "dark" ? "text-gray-200" : "text-gray-600",
            bgClass: theme === "dark" ? "bg-gray-200" : "bg-gray-600",
        },
        {
            id: 2,
            colorClass: theme === "dark" ? "text-blue-400" : "text-blue-600",
            bgClass: theme === "dark" ? "bg-blue-400" : "bg-blue-600",
        },
        {
            id: 3,
            colorClass: theme === "dark" ? "text-indigo-400" : "text-indigo-600",
            bgClass: theme === "dark" ? "bg-indigo-400" : "bg-indigo-600",
        },
        {
            id: 4,
            colorClass: theme === "dark" ? "text-purple-400" : "text-purple-600",
            bgClass: theme === "dark" ? "bg-purple-400" : "bg-purple-600",
        },
        {
            id: 5,
            colorClass: theme === "dark" ? "text-pink-400" : "text-pink-600",
            bgClass: theme === "dark" ? "bg-pink-400" : "bg-pink-600",
        },
        {
            id: 6,
            colorClass: theme === "dark" ? "text-red-400" : "text-red-600",
            bgClass: theme === "dark" ? "bg-red-400" : "bg-red-600",
        },
        {
            id: 7,
            colorClass: theme === "dark" ? "text-orange-400" : "text-orange-600",
            bgClass: theme === "dark" ? "bg-orange-400" : "bg-orange-600",
        },
        {
            id: 8,
            colorClass: theme === "dark" ? "text-yellow-400" : "text-yellow-600",
            bgClass: theme === "dark" ? "bg-yellow-400" : "bg-yellow-600",
        },
        {
            id: 9,
            colorClass: theme === "dark" ? "text-green-400" : "text-green-600",
            bgClass: theme === "dark" ? "bg-green-400" : "bg-green-600",
        },
        {
            id: 10,
            colorClass: theme === "dark" ? "text-teal-400" : "text-teal-600",
            bgClass: theme === "dark" ? "bg-teal-400" : "bg-teal-600",
        },
    ]

    return (
        <div>
            <div className='px-3 py-2'>
                <h4 className='text-xl italic font-semibold'>Settings</h4>
                <div className='pt-2'>
                    <div>
                        <h4 className='font-medium opacity-60'>Colors</h4>
                        <ul className='flex flex-wrap justify-start gap-3 mt-2'>
                            {
                                colors.map(color => <li onClick={() => handleColor(color)} key={color.id}>
                                    <button className={`${color.bgClass} w-6 h-6 rounded-full`}></button>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className='mt-2'>
                        {/* Theme */}
                        <h2 className='font-medium opacity-60'>Theme</h2>
                        <div className='flex items-center justify-between mt-2'>
                            <h4 className='font-medium opacity-80'>{theme === 'dark' ? "Dark" : "Light"}</h4>
                            <div>
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    onClick={toggleButton}
                                    className={`${enabled ? 'bg-teal-700' : 'bg-teal-900'}
          relative inline-flex h-[1.875rem] w-[3.125rem] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[1.5625rem] w-[1.5625rem] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;