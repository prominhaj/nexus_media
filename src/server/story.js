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
            .sort({ Date: -1 })
            .select({ _id: 1, storyPhoto: 1 });

        const modifiedStories = stories.map((story) => ({
            ...story.toObject(),
            _id: story._id.toString()
        }));

        return modifiedStories;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get Single Story
export const getSingleStory = async (id) => {
    try {
        // Connect to the database
        await connectDB();

        // Find Single Story
        const story = await Story.findById(id).select({
            name: 1,
            email: 1,
            profilePhoto: 1,
            Date: 1
        });
        return story;
    } catch (error) {
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
