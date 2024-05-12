import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';

export const GET = async (_req) => {
    try {
        await connectDB();

        const posts = await Post.aggregate([
            // Step-1: Convert userId field to ObjectId
            {
                $addFields: {
                    userIdObjectId: { $toObjectId: '$userId' }
                }
            },
            // Step-2: Perform the $lookup
            {
                $lookup: {
                    from: 'users',
                    localField: 'userIdObjectId',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            // Optionally, you can project out the userIdObjectId field if you don't need it anymore
            {
                $project: {
                    userIdObjectId: 0,
                    'postImage.publicId': 0,
                    'user.image.publicId': 0,
                    'user.password': 0,
                    'user.gender': 0,
                    'user.birth': 0,
                    'user.createdAt': 0,
                    'user.updatedAt': 0,
                    'user.__v': 0
                }
            }
        ]);

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
