"use client";
import { AuthContext } from "@/Providers/AuthProvider";
import SubmitButton from "@/components/Global/Button/SubmitButton";
import FormControl from "@/components/RegisterPage/FormControl/FormControl";
import FormPassword from "@/components/RegisterPage/FormControl/FormPassword";
import FormHading from "@/components/RegisterPage/FormHading/FormHading";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Hook Form to register
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = async ({ email, password }) => {
        setLoading(true);
        try {
            const singIn = await login(email, password);
            if (singIn.user) {
                router.push('/');
                toast.success('Login Successfully');
            }
        } catch (error) {
            toast.error(error.message.substr(10));
        } finally {
            setLoading(false);
        }
    };
    return (
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
                        <p className='text-red-500'>
                            <small>Email is required</small>
                        </p>
                    )}
                </FormControl>
                <FormPassword
                    register={register}
                    label='Password'
                    id='password'
                    placeholder='Enter Your Password'
                    login={true}
                >
                    {errors.password?.type === 'required' && (
                        <p className='text-red-500'>
                            <small>Password is required</small>
                        </p>
                    )}
                </FormPassword>
            </div>
            <SubmitButton loading={loading} className="!w-full">Login</SubmitButton>
        </form>
    );
};

export default LoginForm;