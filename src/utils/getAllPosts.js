import domain from '@/Domain/domain.config';

export const getAllPosts = async (postsLimit, page) => {
    const res = await fetch(`${domain}/api/post?limit=${postsLimit}&skip=${page * postsLimit}`, {
        next: {
            tags: ['posts']
        },
        cache: 'no-store'
    });
    return await res.json();
};
