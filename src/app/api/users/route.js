import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        await connectDB();
        const user = await req.json();
        await User.create(user);
        return NextResponse.json({ success: true }, { message: 'User created successfully' });
    } catch (err) {
        return NextResponse.json({ error: err.message });
    }
};
