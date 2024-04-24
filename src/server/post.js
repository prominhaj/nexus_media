'use server';

import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { revalidatePath } from 'next/cache';

export const getPosts = async (limit, skip) => {
    try {
        // Connect to the database
        await connectDB();

        const posts = await Post.find()
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .sort({ date: -1 });

        return posts;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const createPost = async (newPost) => {
    try {
        // Connect to the database
        await connectDB();

        await Post.create(newPost);
        // Revalidate Path
        revalidatePath('/');
        return { success: true };
    } catch (err) {
        throw new Error(err.message);
    }
};
