"use client"
import React from 'react';
import AddStory from '../AddStory/AddStory';
import StorySlider from '@/components/SliderCus/StorySlider';

const HomeStory = () => {

    return (
        <div className='p-3 rounded-lg bg-light-post-bg dark:bg-dark-post-bg'>
            <div className='flex items-center gap-3 overflow-hidden'>
                <div className='w-[50px]'>
                    <AddStory />
                </div>
                <div className='!w-[94%] pr-3'>
                    <StorySlider />
                </div>
            </div>
        </div>
    );
};

export default HomeStory;