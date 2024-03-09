import CreatePost from '@/components/Homes/CreatePost/CreatePost';
import HomeStory from '@/components/Homes/HomeStory/HomeStory';
import React from 'react';

const HomePage = () => {
    return (
        <main className='px-3 lg:px-5 xl:px-10'>
            <div className='shadow dark:shadow-2xl'>
                <HomeStory />
            </div>

            {/* Create Post */}
            <div className='py-5 sm:py-8'>
                <CreatePost />
            </div>
        </main>
    );
};

export default HomePage;
