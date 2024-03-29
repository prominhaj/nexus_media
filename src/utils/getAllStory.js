import domain from '@/Domain/domain.config';

const getAllStory = async () => {
    const response = await fetch(`${domain}/api/story`);
    const data = await response.json();
    return data;
};

export default getAllStory;
