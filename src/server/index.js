'use server';

import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import Story from '@/models/Story';

// Connect to the database
connectDB();

// Get All Posts
const getPosts = async (limit, skip) => {
    try {
        const posts = await Post.find()
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .sort({ date: -1 });

        const modifiedPosts = posts.map((post) => ({
            ...post.toObject(),
            _id: post._id.toString()
        }));

        return modifiedPosts;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Create a new post
const createPost = async (newPost) => {
    try {
        await Post.create(newPost);
        return { success: true };
    } catch (err) {
        throw new Error(err.message);
    }
};

const postComment = async (comment, id) => {
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
        // Return the updated post
        return { success: true, message: 'Comment SuccessFully' };
    } catch (error) {
        // If any error occurs, throw an error
        throw new Error(error.message);
    }
};

// Post Reaction
const postReaction = async (postReaction, id) => {
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

    try {
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
        return { success: true };
    } catch (error) {
        // If any error occurs, throw an error
        throw new Error(error.message);
    }
};

// Get All Stories
const getStories = async (limit, skip) => {
    try {
        const stories = await Story.find()
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .sort({ Date: -1 });

        const modifiedStories = stories.map((story) => ({
            ...story.toObject(),
            _id: story._id.toString()
        }));

        return modifiedStories;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Create a new story
const createStory = async (newStory) => {
    try {
        await Story.create(newStory);
        return { success: true };
    } catch (err) {
        throw new Error(err.message);
    }
};

export { getPosts, createPost, postComment, postReaction, getStories, createStory };
