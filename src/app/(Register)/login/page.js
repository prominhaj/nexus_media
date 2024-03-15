import Button from '@/components/Button/Button';
import FormControl from '@/components/RegisterPage/FormControl/FormControl';
import FormPassword from '@/components/RegisterPage/FormControl/FormPassword';
import FormHading from '@/components/RegisterPage/FormHading/FormHading';
import SocialLogin from '@/components/RegisterPage/SocialLogin/SocialLogin';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <>
            <form>
                <FormHading>Login</FormHading>
                <div className='py-3'>
                    <FormControl
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='example@gmail.com'
                    />
                    <FormPassword
                        label='Password'
                        id='password'
                        placeholder='Enter Your Password'
                    />
                </div>
                <Button className='w-full mt-2 hover:opacity-75 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                    Login
                </Button>
            </form>
            <div className='my-3 text-sm italic text-center text-gray-300'>
                Create a new account?{' '}
                <Link className='text-pink-500' href='/register'>
                    Register
                </Link>
            </div>

            {/* Social Login */}
            <SocialLogin />
        </>
    );
};

export default LoginPage;
