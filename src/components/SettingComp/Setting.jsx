import { ThemeContext } from '@/Context/ThemeContext';
import { Switch } from '@headlessui/react';
import React, { useContext, useState } from 'react';

// Colors
const colors = [
    {
        id: 1,
        button: <button className='bg-[#FF3B30] w-6 h-6 rounded-full'></button>
    },
    {
        id: 2,
        button: <button className='bg-[#4CD964] w-6 h-6 rounded-full'></button>
    },
    {
        id: 3,
        button: <button className='bg-[#132977] w-6 h-6 rounded-full'></button>
    },
    {
        id: 4,
        button: <button className='bg-[#FFDE00] w-6 h-6 rounded-full'></button>
    },
    {
        id: 5,
        button: <button className='bg-[#FF9500] w-6 h-6 rounded-full'></button>
    },
    {
        id: 6,
        button: <button className='bg-[#8E8E93] w-6 h-6 rounded-full'></button>
    },
    {
        id: 7,
        button: <button className='bg-[#228B22] w-6 h-6 rounded-full'></button>
    },
    {
        id: 8,
        button: <button className='bg-[#5F9EA0] w-6 h-6 rounded-full'></button>
    },
    {
        id: 9,
        button: <button className='bg-[#9932CC] w-6 h-6 rounded-full'></button>
    },
    {
        id: 10,
        button: <button className='bg-[#FFC0CB] w-6 h-6 rounded-full'></button>
    },
]

const Setting = () => {
    const [theme, toggleButton] = useContext(ThemeContext);
    const [enabled, setEnabled] = useState(theme === "dark" ? true : false)

    return (
        <div>
            <div className='px-3 py-2'>
                <h4 className='text-xl italic font-semibold'>Settings</h4>
                <div className='pt-2'>
                    <div>
                        <h4 className='font-medium opacity-60'>Colors</h4>
                        <ul className='flex flex-wrap justify-start gap-3 mt-2'>
                            {
                                colors.map(color => <li key={color.id}>
                                    {color?.button}
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