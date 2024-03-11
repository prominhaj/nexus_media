/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com'
            },
            {
                protocol: 'https',
                hostname: 'app.requestly.io'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com'
            }
        ]
    }
};

export default nextConfig;
