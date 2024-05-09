import connectDB from '@/lib/mongodb';
import Story from '@/models/Story';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Utils functions
const modifiedObject = (array) => {
    const modifiedData = array.map((o) => ({
        ...o,
        _id: o._id.toString()
    }));
    return modifiedData;
};

export const GET = async (req) => {
    const searchParams = req.nextUrl.searchParams;
    const limit = searchParams.get('limit');
    const skip = searchParams.get('skip');

    try {
        const stories = await Story.find()
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .sort({
                createdAt: -1
            })
            .lean();

        // Find the users corresponding to the userIds
        const users = await User.find()
            .select({
                email: 1,
                name: 1,
                image: 1,
                _id: 1
            })
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .sort({
                createdAt: -1
            })
            .lean();

        // Modified Data
        const modifiedStories = modifiedObject(stories);
        const modifiedUsers = modifiedObject(users);

        const allStories = modifiedStories.map((story) => {
            const user = modifiedUsers.find((user) => user._id === story.userId);
            if (user) {
                const { _id, ...userData } = user;
                return { ...story, ...userData };
            }
            return story;
        });

        return NextResponse.json(allStories);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const POST = async (req) => {
    try {
        await connectDB();
        const story = await req.json();
        await Story.create(story);
        return NextResponse.json({ success: true }, { message: 'Story created successfully' });
    } catch (err) {
        return NextResponse.json({ error: err.message });
    }
};
