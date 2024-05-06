import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export default function middleware(req) {
    const authToken = cookies().get('next-auth.session-token')?.value;

    const loggedInUserNotAccessPaths =
        req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/register';

    if (loggedInUserNotAccessPaths) {
        if (authToken) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    } else {
        if (!authToken) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/login',
        '/register',
        '/profile/:path*',
        '/friends',
        '/stories',
        '/videos',
        '/message'
    ]
};
