import Post from '../Post/Post';
import PostLoading from '../../Loading/PostLoading/PostLoading';
import domain from '@/Domain/domain.config';
import { Suspense } from 'react';

const AllPosts = async () => {
    const req = await fetch(`${domain}/api/posts`, {
        cache: "no-store",
        next: {
            tags: ["posts"]
        }
    });
    const { posts } = await req.json();

    return (
        <div>
            <div className='grid grid-cols-1 gap-5'>
                <Suspense fallback={<PostLoading />}>
                    {
                        posts?.map((post, index) => <Post key={index} post={post} />)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default AllPosts;