import Modal from '@/components/Global/Modal/Modal';
import { getSingleStory } from '@/server/story';
import StoryDetailsCard from '../../comp/StoryDetailsCard';

const ModalStoriesDetailsPage = async ({ params: { id } }) => {
    const story = await getSingleStory(id);

    return (
        <>
            <Modal>
                <StoryDetailsCard story={story} />
            </Modal>
        </>
    );
};

export default ModalStoriesDetailsPage;
