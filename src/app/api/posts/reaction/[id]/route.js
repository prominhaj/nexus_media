// Import necessary modules
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';

// Define the POST function
export const POST = async (request, { params: { id } }) => {
    try {
        // Connect to MongoDB
        await connectDB();

        // Parse the JSON body of the request
        const postReaction = await request.json();

        // Find the post by ID
        const post = await Post.findById(id);

        // Check if the post exists
        if (!post) {
            throw new Error('Post not found');
        }

        // Extract email from the post reaction
        const { email } = postReaction;

        // Check if the user has already reacted to the post
        const existingReactionIndex = post.reactions.findIndex((r) => r.email === email);

        // Handle existing reaction
        if (existingReactionIndex !== -1) {
            handleExistingReaction(post, postReaction, existingReactionIndex);
        } else {
            // Add new reaction
            addNewReaction(post, postReaction);
        }

        // Save the updated post with the new reaction
        await post.save();

        // Return success response
        return NextResponse.json({ success: true });
    } catch (error) {
        // If any error occurs, throw an error
        throw new Error(error.message);
    }
};

// Function to handle existing reaction
const handleExistingReaction = (post, postReaction, existingReactionIndex) => {
    if (post.reactions[existingReactionIndex].reactionType === postReaction.reactionType) {
        // If the reaction type is the same as the existing one, delete the existing reaction
        deleteExistingReaction(post, existingReactionIndex);
    } else {
        // Update the existing reaction
        updateExistingReaction(post, postReaction, existingReactionIndex);
    }
};

// Function to delete existing reaction
const deleteExistingReaction = (post, existingReactionIndex) => {
    // Remove the existing reaction
    post.reactions.splice(existingReactionIndex, 1);
};

// Function to update existing reaction
const updateExistingReaction = (post, postReaction, existingReactionIndex) => {
    const restReactions = post.reactions.filter((r, index) => index !== existingReactionIndex);

    // Replace the existing reaction with the new one
    post.reactions = [...restReactions, postReaction];
};

// Function to add new reaction
const addNewReaction = (post, postReaction) => {
    // Add the new reaction
    post.reactions.push(postReaction);
};
