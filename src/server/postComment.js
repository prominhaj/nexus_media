'use server';

import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { revalidatePath } from 'next/cache';

// Connect to the database
connectDB();

export const postComment = async (comment, id) => {
    try {
        // Find the post by ID
        const post = await Post.findById(id);

        // Check if the post exists
        if (!post) {
            throw new Error('Post not found');
        }

        // Add the comment to the post
        post.comments.push(comment);

        // Save the post
        await post.save();

        revalidatePath('/');

        // Return the updated post
        return { success: true, message: 'Comment SuccessFully' };
    } catch (error) {
        // If any error occurs, throw an error
        throw new Error(error.message);
    }
};
