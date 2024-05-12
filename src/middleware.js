import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// 1. Specify protected and public routes
const protectedRoutes = ['/'];
const publicRoutes = ['/login', '/register'];

export default async function middleware(req) {
    // Token
    const token = await getToken({ req });
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    // 6. Redirect to /dashboard if the user is authenticated
    if (isPublicRoute && token) {
        return NextResponse.redirect(new URL('/', req.nextUrl));
    }

    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
