"use client"
import { AuthContext } from '@/Providers/AuthProvider';
import Button from '@/components/Global/cookies/Button/Button';
import FormControl from '@/components/RegisterPage/FormControl/FormControl';
import FormPassword from '@/components/RegisterPage/FormControl/FormPassword';
import FormHading from '@/components/RegisterPage/FormHading/FormHading';
import createNewAccount from '@/utils/createNewAccout';
import imageUpload from '@/utils/imageUpload';
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
        // Loading State
        setLoading(true)
        // Form Data
        const { name, email, photo, password } = form;

        try {
            // Image upload
            const imageHost = await imageUpload(photo);

            if (imageHost.success) {
                // Firebase Create new Account
                const singUp = await createAccount(email, password);
                // Firebase Name And Photo Add
                await nameAndPhoto(name, imageHost.data.display_url);
                // Check User SingUp
                if (singUp.user) {
                    const user = {
                        name,
                        email,
                        photo: imageHost.data.display_url,
                    }

                    // API request
                    const singUpData = await createNewAccount(user);
                    // Check User SingUp Save DataBase
                    if (singUpData.success) {
                        router.push("/")
                        toast.success('Account Created Successfully');
                    }
                }

            }
        }
        catch (err) {
            // Handle error
            toast.error(err.message.substr(10));
        }
        finally {
            // Loading State FALSE
            setLoading(false);
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