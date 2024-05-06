"use client"
import { AuthContext } from '@/Providers/AuthProvider';
import postSingupData from '@/utils/createNewAccout';
import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'sonner';

const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    const router = useRouter();

    // Google Login
    const handleGoogleLogin = async () => {
        try {
            const { user } = await googleSignIn();
            const { displayName, email, photoURL } = user;

            const userInfo = {
                name: displayName,
                email,
                photo: photoURL,
                Date: new Date().toString()
            }
            await postSingupData(userInfo);
            router.push("/")
            toast.success('Successfully Logged In');

        } catch (error) {
            toast.error(error.message)
        }
    }

    // Github Login
    const handleGithubLogin = async () => {
        try {
            const { user } = await githubSignIn();
            const { displayName, email, photoURL } = user;

            const userInfo = {
                name: displayName,
                email,
                photo: photoURL,
                Date: new Date().toString()
            }
            await postSingupData(userInfo);
            router.push("/")
            toast.success('Successfully Logged In');

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            {/* Or */}
            <div className='grid items-center justify-center grid-cols-7 gap-3 italic text-center text-gray-800 dark:text-gray-200'>
                <span className='col-span-3 border-t border-gray-500'></span>
                <span className='text-sm md:text-base'>OR</span>
                <span className='col-span-3 border-t border-gray-500'></span>
            </div>

            {/* Social Login Button */}
            <div className='grid gap-3 py-3 md:grid-cols-2'>
                {/* Google */}
                <Button className='!cursor-pointer' onClick={handleGoogleLogin} color="gray" variant="solid" highContrast>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" /><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>
                    <h6 className='text-base'>Google</h6>
                </Button>
                {/* Github */}
                <Button className='!cursor-pointer' onClick={handleGithubLogin} color="gray" variant="solid" highContrast>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    <h6 className='text-base'>Github</h6>
                </Button>
            </div>
        </>
    );
};

export default SocialLogin;