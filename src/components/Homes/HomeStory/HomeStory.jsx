import React from 'react';
import AddStory from '../AddStory/AddStory';
import StorySlider from '@/components/SliderCus/StorySlider';
import getAllStory from '@/utils/getAllStory';

const HomeStory = async () => {
    const allStory = await getAllStory();

    return (
        <div className='p-3 rounded-lg bg-light-post-bg dark:bg-dark-post-bg'>
            <div className='flex items-center gap-3 overflow-hidden'>
                <div className='w-[50px]'>
                    <AddStory />
                </div>
                <div className='!w-[94%] pr-3'>
                    <StorySlider stories={allStory} />
                </div>
            </div>
        </div>
    );
};

export default HomeStory;