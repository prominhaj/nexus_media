"use client"
import SubmitButton from '@/components/Global/Button/SubmitButton';
import FormControl from '@/components/RegisterPage/FormControl/FormControl';
import FormPassword from '@/components/RegisterPage/FormControl/FormPassword';
import FormHading from '@/components/RegisterPage/FormHading/FormHading';
import { UserSchema } from '@/lib/ZodSchemas/UserSchema';
import { createNewUser } from '@/server/register';
import { toast } from 'sonner';

const RegisterForm = () => {

    // Form Handler
    const handleRegister = async (formData) => {
        const newUsers = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        try {
            // Zod Validation
            UserSchema.parse(newUsers);

            // Convert FormData to plain object
            const newUser = Object.fromEntries(formData.entries());

            // Handle photo separately if needed
            const photoFile = formData.get("photo");
            if (photoFile) {
                const arrayBuffer = await photoFile.arrayBuffer();
                newUser.photo = new Uint8Array(arrayBuffer);
            }


            // Call the server function to create a new user
            const user = await createNewUser(newUser);
            if (user?.error) {
                toast.error(user.error)
                return
            }
            else {
                toast.success('User Created Successfully');
            }
        } catch (validationError) {
            if (Array.isArray(validationError?.issues)) {
                const errorMessages = validationError.errors.map((error) => error.message);
                toast.error(errorMessages.join(', '));
            }
            else {
                if (validationError?.message?.split('\n')[0] === "Body exceeded 5mb limit.") {
                    toast.error(validationError.message.split('\n')[0]);
                }
                else {
                    toast.error(validationError.message);
                }
            }
        }
    };


    return (
        <div>
            <form action={handleRegister}>
                <FormHading>Register</FormHading>
                <div className='py-3'>
                    <FormControl label='Name' id='name' type='text' placeholder='Enter Your Name' />
                    <FormControl
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='example@gmail.com'
                    />

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
                    />
                </div>

                <SubmitButton className="!w-full">Register</SubmitButton>

            </form>
        </div>
    );
};

export default RegisterForm;