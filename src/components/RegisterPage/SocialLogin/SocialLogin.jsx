"use client"
import { AuthContext } from '@/Providers/AuthProvider';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'sonner';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const router = useRouter();

    const handleGoogleLogin = async () => {
        try {
            await googleSignIn();
            router.push('/');
            toast.success('Successfully Logged In');
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            {/* Or */}
            <div className='grid items-center justify-center grid-cols-7 gap-3 italic text-center'><span className='col-span-3 border-t border-gray-500'></span><span className='text-gray-200'>OR</span><span className='col-span-3 border-t border-gray-500'></span></div>

            {/* Social Login Button */}
            <div className='grid gap-3 py-3 md:grid-cols-2'>
                <Button onClick={handleGoogleLogin} className="flex items-center justify-center w-full gap-2 bg-red-500">
                    <FaGoogle className='text-xl' />
                    <h6 className='text-base'>Google</h6>
                </Button>
                <Button className="flex items-center justify-center w-full gap-2 bg-gray-700">
                    <FaGithub className='text-xl' />
                    <h6 className='text-base'>Github</h6>
                </Button>
            </div>
        </>
    );
};

export default SocialLogin;