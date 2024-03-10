import CreatePost from '@/components/Homes/CreatePost/CreatePost';
import HomeStory from '@/components/Homes/HomeStory/HomeStory';
import Post from '@/components/Homes/Post/Post';
import RightMenu from '@/components/Shared/RightMenu/RightMenu';

const HomePage = () => {
    return (
        <>
            <main className='grid h-screen grid-cols-1 xl:grid-cols-4'>
                {/* Home Page Main Content */}
                <div className='px-3 xl:col-span-3 lg:px-5 xl:px-10'>
                    {/* Home Story */}
                    <div className='shadow dark:shadow-2xl'>
                        <HomeStory />
                    </div>

                    {/* Create Post */}
                    <div className='py-5 sm:py-8'>
                        <CreatePost />
                    </div>

                    {/* All Posts */}
                    <div className=''>
                        <Post />
                    </div>
                </div>

                {/* Right Menu */}
                <div className='hidden xl:block'>
                    <div className='fixed right-0'>
                        <RightMenu />
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;
