'use client';
import Button from '@/components/Button/Button';
import FormControl from '@/components/RegisterPage/FormControl/FormControl';
import FormPassword from '@/components/RegisterPage/FormControl/FormPassword';
import FormHading from '@/components/RegisterPage/FormHading/FormHading';
import SocialLogin from '@/components/RegisterPage/SocialLogin/SocialLogin';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    // Hook Form to register
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = async (user) => {
        console.log(user);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormHading>Login</FormHading>
                <div className='py-3'>
                    <FormControl
                        register={register}
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='example@gmail.com'
                    >
                        {errors.email?.type === 'required' && (
                            <p className='mt-1 text-sm text-red-500'>Email is required</p>
                        )}
                    </FormControl>
                    <FormPassword
                        register={register}
                        label='Password'
                        id='password'
                        placeholder='Enter Your Password'
                    >
                        {errors.password?.type === 'required' && (
                            <p className='text-red-600 dark:text-red-400'>
                                <small>Password is required</small>
                            </p>
                        )}
                    </FormPassword>
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
