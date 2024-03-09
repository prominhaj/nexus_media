"use client"
import React from 'react';
import AddStory from '../AddStory/AddStory';
import StorySlider from '@/components/SliderCus/StorySlider';

const HomeStory = () => {

    return (
        <div className='bg-white dark:bg-[#0F172A] p-3 rounded-lg'>
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