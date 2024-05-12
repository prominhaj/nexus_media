import domain from '@/Domain/domain.config';
import AllPosts from '@/components/Posts/AllPosts/AllPosts';
import CreatePost from '@/components/Posts/CreatePost/CreatePost';
import React from 'react';

const HomePageAllPosts = async () => {
    const req = await fetch(`${domain}/api/posts`, {
        cache: 'no-store',
        next: {
            tags: ['posts']
        }
    });
    const posts = await req.json();

    return (
        <>
            <div>
                <div className='py-5 sm:py-8'>
                    <CreatePost />
                </div>
                <AllPosts posts={posts} />
            </div>
        </>
    );
};

export default HomePageAllPosts;
