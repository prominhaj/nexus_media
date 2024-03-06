import { ThemeContext } from '@/Context/ThemeContext';
import useColor from '@/Hooks/useColor';
import { Switch } from '@headlessui/react';
import React, { useContext, useState } from 'react';

// Colors
const colors = [
    {
        id: 1,
        colorClass: "text-red-500",
        bgClass: "bg-red-500",
    },
    {
        id: 2,
        colorClass: "text-green-500",
        bgClass: "bg-green-500",
    },
    {
        id: 3,
        colorClass: "text-indigo-500",
        bgClass: "bg-indigo-500",
    },
    {
        id: 4,
        colorClass: "text-yellow-500",
        bgClass: "bg-yellow-500",
    },
    {
        id: 5,
        colorClass: "text-orange-500",
        bgClass: "bg-orange-500",
    },
    {
        id: 6,
        colorClass: "text-neutral-500",
        bgClass: "bg-neutral-500",
    },
    {
        id: 7,
        colorClass: "text-emerald-500",
        bgClass: "bg-emerald-500",
    },
    {
        id: 8,
        colorClass: "text-cyan-500",
        bgClass: "bg-cyan-500",
    },
    {
        id: 9,
        colorClass: "text-blue-500",
        bgClass: "bg-blue-500",
    },
    {
        id: 10,
        colorClass: "text-pink-500",
        bgClass: "bg-pink-500",
    },
]

const Setting = () => {
    const [theme, toggleButton] = useContext(ThemeContext);
    const [enabled, setEnabled] = useState(theme === "dark" ? true : false);
    const { color, setColor, setBgColor } = useColor();

    const handleColor = (color) => {
        setColor(color.colorClass)
        setBgColor(color.bgClass)
    }

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