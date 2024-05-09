import { Card } from '@radix-ui/themes';
import AddStory from '../AddStory/AddStory';
import StorySlider from '@/components/SliderCus/StorySlider';
import domain from '@/Domain/domain.config';

const HomeStory = async () => {
    const req = await fetch(`${domain}/api/stories`, {
        cache: 'no-store',
        next: {
            tags: ['stories']
        }
    });
    const stories = await req.json();

    return (
        <>
            <Card>
                <div className='flex items-center gap-3'>
                    <div className='w-[50px]'>
                        <AddStory />
                    </div>
                    <div className='!w-[94%] pr-3'>
                        <StorySlider data={stories} />
                    </div>
                </div>
            </Card>
        </>
    );
};

export default HomeStory;