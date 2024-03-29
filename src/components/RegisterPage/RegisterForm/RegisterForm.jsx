"use client"
import { AuthContext } from '@/Providers/AuthProvider';
import Button from '@/components/Button/Button';
import FormControl from '@/components/RegisterPage/FormControl/FormControl';
import FormPassword from '@/components/RegisterPage/FormControl/FormPassword';
import FormHading from '@/components/RegisterPage/FormHading/FormHading';
import imageUpload from '@/utils/imageUpload';
import postSingupData from '@/utils/postSingupData';
import { Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const RegisterForm = () => {
    const { createAccount, nameAndPhoto } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Hook Form to register
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    // Form Handler
    const onSubmit = async (form) => {
        setLoading(true)
        const { name, email, photo, password } = form;

        try {
            const imageHost = await imageUpload(photo);
            if (imageHost.success) {
                const singUp = await createAccount(email, password);
                await nameAndPhoto(name, imageHost.data.display_url);
                if (singUp.user) {
                    const user = {
                        name,
                        email,
                        photo: imageHost.data.display_url,
                    }
                    const singUpData = await postSingupData(user);
                    if (singUpData.success) {
                        setLoading(false)
                        router.push("/")
                        toast.success('Account Created Successfully');
                    }
                }

            }
        }
        catch (err) {
            setLoading(false)
            toast.error(err.message.substr(10));
        }
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

                    {/* Image Uploader */}
                    <FormControl
                        register={register}
                        className="file:bg-indigo-500 file:rounded-md file:border-none"
                        label='Profile Photo'
                        id='photo'
                        type='file'
                        placeholder="Upload Profile Photo..."
                    >
                        {errors.photo?.type === "required" && (
                            <p className='mt-1 text-sm text-red-500'>Profile Photo is required</p>
                        )}
                    </FormControl>

                    {/* Form Password Control */}
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

                {loading ? (
                    <div className='flex items-center justify-center'>
                        <Spinner color="primary" />
                    </div>
                ) : (
                    <Button type="submit" className='w-full mt-2 hover:opacity-75 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                        Register
                    </Button>
                )}
            </form>
        </div>
    );
};

export default RegisterForm;