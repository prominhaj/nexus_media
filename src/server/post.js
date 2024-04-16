'use server';

import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { revalidateTag } from 'next/cache';

export const getPosts = async (limit, skip) => {
    try {
        // Connect to the database
        await connectDB();

        const posts = await Post.find()
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .sort({ date: -1 });

        const modifiedPosts = posts.map((post) => ({
            ...post.toObject(),
            _id: post._id.toString() // Convert ObjectId to string
        }));

        return modifiedPosts;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const createPost = async (newPost) => {
    try {
        // Connect to the database
        await connectDB();

        await Post.create(newPost);
        revalidateTag('posts');
        return { success: true };
    } catch (err) {
        throw new Error(err.message);
    }
};
