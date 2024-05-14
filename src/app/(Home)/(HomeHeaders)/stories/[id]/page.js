import { getSingleStory } from '@/server/story';
import StoryDetailsCard from '../comp/StoryDetailsCard';

const StoriesDetailsPage = async ({ params: { id } }) => {
    const story = await getSingleStory(id);

    return (
        <>
            {/* Card */}
            <div className='py-5 mx-auto lg:w-3/4'>
                <StoryDetailsCard story={story} />
            </div>
        </>
    );
};

export default StoriesDetailsPage;
