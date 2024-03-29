import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        await connectDB();
        const posts = await Post.find();
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
