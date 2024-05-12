import Post from '../Post/Post';
import domain from '@/Domain/domain.config';

const AllPosts = async () => {
    const req = await fetch(`${domain}/api/posts`, {
        cache: "no-store",
        next: {
            tags: ["posts"]
        }
    });
    const posts = await req.json();

    return (
        <div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    posts?.map((post, index) => <Post key={index} post={post} />)
                }
            </div>
        </div>
    );
};

export default AllPosts;