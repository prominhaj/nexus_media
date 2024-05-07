'use server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { fileUploader } from './fileUploader';
import { resendEmail } from './resendEmail';

export const createNewUser = async (formData) => {
    // Connect Db to MongoDB
    await connectDB();

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: formData.email });
        if (existingUser) {
            return { error: 'User already exists' };
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(formData.password, 10);

        // Upload Image
        const photo = await fileUploader(formData.photo, 'Images/Users');

        // Add New User
        const newUser = {
            name: formData.name,
            email: formData.email,
            image: {
                profileURL: photo.secure_url,
                publicId: photo.public_id
            },
            password: hashedPassword
        };

        await User.create(newUser);

        // Send Email From User
        await resendEmail(newUser.email, newUser.name);
    } catch (error) {
        return { error: error.message };
    }

    redirect('/login');
};
