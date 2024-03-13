import CreatePost from '@/components/Posts/CreatePost/CreatePost';
import HomeStory from '@/components/Homes/HomeStory/HomeStory';
import Post from '@/components/Posts/Post/Post';

const HomePage = () => {
    return (
        <>
            {/* Home Page Main Content */}
            <div className='lg:px-5 xl:px-10'>
                {/* Home Story */}
                <div className='shadow dark:shadow-2xl'>
                    <HomeStory />
                </div>

                {/* Create Post */}
                <div className='py-5 sm:py-8'>
                    <CreatePost />
                </div>

                {/* All Posts */}
                <div className='grid grid-cols-1 gap-5'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </>
    );
};

export default HomePage;
