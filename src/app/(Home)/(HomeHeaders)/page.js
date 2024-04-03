import CreatePost from '@/components/Posts/CreatePost/CreatePost';
import HomeStory from '@/components/Homes/HomeStory/HomeStory';
import AllPosts from '@/components/Posts/AllPosts/AllPosts';

const HomePage = () => {
    return (
        <>
            {/* Home Page Main Content */}
            <div className='lg:px-5 xl:px-10'>
                {/* Home Story */}
                <div className='shadow dark:shadow-2xl'>
                    <HomeStory />
                </div>

                {/* All Posts */}
                <AllPosts />
            </div>
        </>
    );
};

export default HomePage;
