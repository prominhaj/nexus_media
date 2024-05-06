"use client";
import SubmitButton from "@/components/Global/Button/SubmitButton";
import FormControl from "@/components/RegisterPage/FormControl/FormControl";
import FormPassword from "@/components/RegisterPage/FormControl/FormPassword";
import FormHading from "@/components/RegisterPage/FormHading/FormHading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { toast } from "sonner";

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const data = await signIn('credentials', {
                redirect: false,
                email,
                password
            });

            console.log(data);
            if (data.ok) {
                router.push('/');
            }
            else if (data.error) {
                toast.error(data.error)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleLogin}>
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
                    login={true}
                />
            </div>
            <SubmitButton loading={loading} className="!w-full">Login</SubmitButton>
        </form>
    );
};

export default LoginForm;