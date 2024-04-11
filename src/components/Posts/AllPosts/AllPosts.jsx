"use client"
import { useState } from 'react';
import Post from '../Post/Post';
import CreatePost from '../CreatePost/CreatePost';
import domain from '@/Domain/domain.config';
import PostLoading from '../../Loading/PostLoading/PostLoading';
import Intersection from '@/components/InfinityScroll/Intersection/Intersection';

// Posts Limit
const postsLimit = 6;

const AllPosts = () => {
    // Load all posts
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const fetchingPosts = async () => {
        const res = await fetch(`${domain}/api/post?limit=${postsLimit}&skip=${page * postsLimit}`, {
            next: {
                tags: ['posts']
            },
            cache: "no-store"
        });
        const data = await res.json();

        if (data.length === 0) {
            setHasMore(false)
        }
        else {
            setPosts(prev => [...prev, ...data])
            setPage(prev => prev + 1)
        }
    }

    return (
        <div>
            {/* Create Post */}
            <div className='py-5 sm:py-8'>
                <CreatePost />
            </div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    posts.map((post, index) => <Post key={index} post={post} />)
                }

                {hasMore && (
                    <Intersection fetchingData={fetchingPosts} hasMore={hasMore} page={page}>
                        <PostLoading />
                    </Intersection>
                )}
            </div>
        </div>
    );
};

export default AllPosts;