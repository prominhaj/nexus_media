import Modal from '@/components/Global/Modal/Modal';
import { getSingleStory } from '@/server/story';
import StoryDetailsCard from '../../comp/StoryDetailsCard';
import StoryDetailsLoading from '../../comp/StoryDetailsLoading';

const ModalStoriesDetailsPage = async ({ params: { id } }) => {
    const story = await getSingleStory(id);

    return (
        <>
            <div className='flex items-center justify-center !w-[36rem] text-center transition-colors rounded-md shadow-xl'>
                <StoryDetailsLoading />
            </div>
            <Modal>
                <StoryDetailsCard story={story} />
            </Modal>
        </>
    );
};

export default ModalStoriesDetailsPage;
