import connectDB from '@/lib/mongodb';
import Story from '@/models/Story';
import modifiedData from '@/utils/modifiedObject';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const GET = async (_req) => {
    await connectDB();
    try {
        const stories = await Story.find()
            .select({
                _id: 1,
                storyImage: {
                    photoUrl: 1
                }
            })
            .lean();
        const modifiedStories = modifiedData(stories);
        return NextResponse.json(modifiedStories);
    } catch (error) {
        return NextResponse.json({ error: error });
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
