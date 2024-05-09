import { Card } from '@radix-ui/themes';
import AddStory from '../AddStory/AddStory';
import StorySlider from '@/components/SliderCus/StorySlider';

const HomeStory = async () => {
    return (
        <>
            <Card>
                <div className='flex items-center gap-3'>
                    <div className='w-[50px]'>
                        <AddStory />
                    </div>
                    <div className='!w-[94%] pr-3'>
                        <StorySlider />
                    </div>
                </div>
            </Card>
        </>
    );
};

export default HomeStory;