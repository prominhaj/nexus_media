import Post from '@/components/Posts/Post/Post';
import InfoArea from '@/components/Profiles/PostsPage/InfoArea/InfoArea';
import PostsPhotos from '@/components/Profiles/PostsPage/PostsPhotos/PostsPhotos';
import PostsSearchBox from '@/components/Profiles/PostsPage/PostsSearchBox/PostsSearchBox';

const PostsPage = ({ params }) => {
    return (
        <>
            <div className='grid grid-cols-1 gap-3 py-5 md:gap-5 lg:grid-cols-3'>
                {/* Info Area */}
                <div className='flex flex-col gap-3 md:gap-5'>
                    <InfoArea />
                    <PostsPhotos />
                </div>

                <div className='lg:col-span-2'>
                    {/* Posts Search Box */}
                    <PostsSearchBox />

                    {/* Profile All Posts */}
                    <div className='grid grid-cols-1 gap-5 pt-5'>
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostsPage;
