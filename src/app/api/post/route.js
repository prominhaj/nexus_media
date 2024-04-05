import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    try {
        await connectDB();
        // Query
        const searchParams = req.nextUrl.searchParams;
        const limit = searchParams.get('limit');
        const skip = searchParams.get('skip');

        const posts = await Post.find()
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .sort({ date: -1 });
        return NextResponse.json(posts);
    } catch (err) {
        return NextResponse.json({ error: err.message });
    }
};

export const POST = async (req) => {
    try {
        await connectDB();
        const newPost = await req.json();
        await Post.create(newPost);
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: err.message });
    }
};
