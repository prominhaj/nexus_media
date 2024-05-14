import AddStory from '@/components/Homes/AddStory/AddStory';
// import StoriesCard from '@/components/StoriesPage/StoriesCard/StoriesCard';
import { Avatar } from '@nextui-org/react';

const StoriesPage = () => {
    const addStoryBtn = (
        <>
            <div className='flex items-center w-full gap-3 md:gap-5'>
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
                <div className='flex-1 hover:bg-[#c8c8c9] dark:hover:bg-[#4E4F50] duration-300 cursor-pointer text-start bg-[#dbdbdc] dark:bg-[#313030] text-[#65676B] dark:text-[#B0B3B8] py-3 px-3 rounded-2xl w-full'>
                    <span>Create Story...</span>
                </div>
            </div>
        </>
    );

    return (
        <div>
            <div className='w-full py-3'>
                <AddStory addStory={addStoryBtn} />
            </div>
            <div className='py-3'>{/* <StoriesCard /> */}</div>
        </div>
    );
};

export default StoriesPage;
