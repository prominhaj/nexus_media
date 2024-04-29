"use client"
import { useState } from 'react';
import Post from '../Post/Post';
import PostLoading from '../../Loading/PostLoading/PostLoading';
import Intersection from '@/components/InfinityScroll/Intersection/Intersection';
import { getPosts } from '@/server';

// Posts Limit
const postsLimit = 4;

const AllPosts = () => {
    // Load all posts
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const fetchingPosts = async () => {
        const data = await getPosts(postsLimit, page * postsLimit)

        if (data) {
            if (data?.length === 0) {
                setHasMore(false)
            }
            else {
                setPosts(prev => [...prev, ...data])
                setPage(prev => prev + 1)
            }
        }
    }

    return (
        <div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    posts?.map((post, index) => <Post key={index} post={post} />)
                }

                {hasMore && (
                    <Intersection fetchingData={fetchingPosts} hasMore={hasMore} page={page}>
                        <div className='space-y-5'>
                            <PostLoading />
                            <PostLoading />
                        </div>
                    </Intersection>
                )}
            </div>
        </div>
    );
};

export default AllPosts;