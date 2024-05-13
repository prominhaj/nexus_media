'use server';
import connectDB from '@/lib/mongodb';
import Story from '@/models/Story';
import User from '@/models/User';

const getSingleStory = async (storyId) => {
    await connectDB();
    try {
        const story = await Story.findById(storyId).lean();
        const user = await User.findById(story.userId).select('name email image.profileURL').lean();

        return { ...story, ...user, _id: story._id.toString() };
    } catch (error) {
        throw new Error(error);
    }
};

export { getSingleStory };
