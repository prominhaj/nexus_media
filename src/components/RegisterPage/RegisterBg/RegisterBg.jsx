import { Roboto } from 'next/font/google';
import './RegisterBg.css'
import FormControl from '../FormControl/FormControl';
import Button from '@/components/Button/Button';

const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin-ext'],
});

const RegisterBg = ({ children }) => {
    return (
        <div
            className={`${roboto.className} h-screen px-3 py-8 md:py-10 backgroundImage`}
        >
            <h2 className='text-2xl font-bold tracking-widest text-center text-transparent md:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-indigo-200 to-gray-600'>
                Nexus Media
            </h2>
            <div className='max-w-[35rem] bg-gray-600/20 mx-auto mt-8 p-5 rounded-md shadow-xl shadow-gray-900'>
                {children}
            </div>
        </div>
    );
};

export default RegisterBg;