import connectDB from '@/lib/mongodb';
import Story from '@/models/Story';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    try {
        await connectDB();
        const stories = await Story.find().sort({ Date: 1 });
        return NextResponse.json(stories);
    } catch (err) {
        return NextResponse.json({ error: err.message });
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
