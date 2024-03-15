import { Roboto } from 'next/font/google';
import './RegisterBg.css'

const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin-ext'],
});

const RegisterBg = ({ children }) => {
    return (
        <div
            className={`${roboto.className} h-screen flex justify-center flex-col px-3 backgroundImage`}
        >
            <div>
                <h2 className='text-3xl font-bold tracking-widest text-center text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-indigo-200 to-gray-600'>
                    Nexus Media
                </h2>
                <div className='max-w-[35rem] bg-gray-600/20 mx-auto mt-8 p-5 rounded-md shadow-xl shadow-gray-900'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default RegisterBg;