'use server';
import connectDB from '@/lib/mongodb';
import Story from '@/models/Story';
import User from '@/models/User';

const getSingleStory = async (storyId) => {
    await connectDB();
    try {
        const story = await Story.findById(storyId).lean();
        const findUser = await User.findById(story.userId)
            .select({
                name: 1,
                email: 1,
                image: {
                    profileURL: 1
                }
            })
            .lean();

        const singleStory = { ...story, _id: story._id.toString(), ...findUser };

        return singleStory;
    } catch (error) {
        throw new Error(error);
    }
};

export { getSingleStory };
