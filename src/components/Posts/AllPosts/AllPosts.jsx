import Post from '../Post/Post';

const AllPosts = async ({ posts }) => {
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