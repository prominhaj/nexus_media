"use client"
import SubmitButton from '@/components/Global/Button/SubmitButton';
import FormControl from '@/components/RegisterPage/FormControl/FormControl';
import FormPassword from '@/components/RegisterPage/FormControl/FormPassword';
import FormHading from '@/components/RegisterPage/FormHading/FormHading';
import { createNewUser } from '@/server/register';
import { useState } from 'react';
import { toast } from 'sonner';

const RegisterForm = () => {
    const [error, setError] = useState(null);

    // Form Handler
    const handleRegister = async (formData) => {
        // FormData
        const imageData = new FormData();
        imageData.append("image", formData.get("photo"));

        const newUser = {
            name: formData.get('name'),
            email: formData.get('email'),
            photo: imageData,
            password: formData.get('password')
        }

        try {
            // // Handle photo separately if needed
            // const photoFile = formData.get("photo");
            // if (photoFile) {
            //     const arrayBuffer = await photoFile.arrayBuffer();
            //     newUser.photo = new Uint8Array(arrayBuffer);
            // }


            // Call the server function to create a new user
            const user = await createNewUser(newUser);
            if (user?.errors) {
                setError(user.errors)
                return;
            }
            else {
                toast.success('User Created Successfully');
            }
        } catch (error) {
            return toast.error(error.message)
        }
    };

    return (
        <div>
            <form action={handleRegister}>
                <FormHading>Register</FormHading>
                <div className='py-3'>
                    <FormControl label='Name' id='name' type='text' placeholder='Enter Your Name' >
                        {
                            error && error?.name?.map((n, i) => <p className='text-red-500' key={i}>
                                <small>
                                    {n}
                                </small>
                            </p>)
                        }
                    </FormControl>
                    <FormControl
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='example@gmail.com'
                    >
                        {
                            error && error?.email?.map((n, i) => <p className='text-red-500' key={i}>
                                <small>
                                    {n}
                                </small>
                            </p>)
                        }
                    </FormControl>

                    {/* Image Uploader */}
                    <FormControl
                        className="file:bg-indigo-500 file:rounded-md file:border-none"
                        label='Profile Photo'
                        id='photo'
                        type='file'
                        placeholder="Upload Profile Photo..."
                    />

                    {/* Form Password Control */}
                    <FormPassword
                        label='Password'
                        id='password'
                        placeholder='Enter Your Password'
                    >
                        {
                            error && <div>
                                {
                                    error?.password?.map((n, i) => <p className='text-red-500' key={i}>
                                        <small>
                                            {n}
                                        </small>
                                    </p>
                                    )}
                            </div>
                        }
                    </FormPassword>
                </div>

                <SubmitButton className="!w-full">Register</SubmitButton>

            </form>
        </div>
    );
};

export default RegisterForm;