export default function middleware(req) {
    console.log('middleware');
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/login', '/register', '/profile/:path*']
};
