'use server';

import connectDB from '@/lib/mongodb';
import Story from '@/models/Story';
import { revalidatePath } from 'next/cache';

export const getStories = async (limit, skip) => {
    try {
        // Connect to the database
        await connectDB();

        const stories = await Story.find()
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .sort({ date: -1 });

        const modifiedStories = stories.map((post) => ({
            ...post.toObject(),
            _id: post._id.toString() // Convert ObjectId to string
        }));

        return modifiedStories;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const createStory = async (newStory) => {
    try {
        // Connect to the database
        await connectDB();

        await Story.create(newStory);
        revalidatePath('/');
        return { success: true };
    } catch (err) {
        throw new Error(err.message);
    }
};
