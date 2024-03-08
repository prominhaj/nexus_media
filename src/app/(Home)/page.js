import AddStory from '@/components/Homes/AddStory/AddStory';
import React from 'react';

const HomePage = () => {
    return (
        <main className='px-3 lg:px-5 xl:px-10'>
            <div className='shadow-xl dark:shadow-gray-900'>
                <AddStory />
            </div>
        </main>
    );
};

export default HomePage;
