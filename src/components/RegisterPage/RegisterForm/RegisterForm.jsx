"use client"
import Button from '@/components/Button/Button';
import FormControl from '@/components/RegisterPage/FormControl/FormControl';
import FormPassword from '@/components/RegisterPage/FormControl/FormPassword';
import FormHading from '@/components/RegisterPage/FormHading/FormHading';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = (form) => {
        console.log(form);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormHading>Create a new account</FormHading>
                <div className='py-3'>
                    <FormControl register={register} label='Name' id='name' type='text' placeholder='Enter Your Name'>
                        {errors.name?.type === "required" && (
                            <p className='mt-1 text-sm text-red-500'>Name is required</p>
                        )}
                    </FormControl>
                    <FormControl
                        register={register}
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='example@gmail.com'
                    >
                        {errors.email?.type === "required" && (
                            <p className='mt-1 text-sm text-red-500'>Email is required</p>
                        )}
                    </FormControl>
                    <FormPassword
                        register={register}
                        label='Password'
                        id='password'
                        placeholder='Enter Your Password'
                    >
                        {errors.password?.type === "required" && (
                            <p className="text-red-600 dark:text-red-400">
                                <small>Password is required</small>
                            </p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-600 dark:text-red-400">
                                <small>Password is Min 10 Character</small>
                            </p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-red-600 dark:text-red-400">
                                <small>Password is Mix 15 Character</small>
                            </p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600 dark:text-red-400">
                                <small>
                                    Password must have one uppercase one lower case, one
                                    number and one special characters
                                </small>
                            </p>
                        )}

                    </FormPassword>
                </div>
                <Button type="submit" className='w-full mt-2 hover:opacity-75 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                    Register
                </Button>
            </form>
        </div>
    );
};

export default RegisterForm;