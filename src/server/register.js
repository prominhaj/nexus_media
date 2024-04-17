'use server';

import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export const createNewAccount = async (user) => {
    try {
        await connectDB();

        // Check if the user already exists
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
            return { error: 'User already exists' };
        }

        await User.create(user);

        return { success: true };
    } catch (err) {
        throw new Error(err.message);
    }
};
