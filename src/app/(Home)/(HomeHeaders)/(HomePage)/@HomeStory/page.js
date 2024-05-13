import domain from '@/Domain/domain.config';
import AddStory from '@/components/Homes/AddStory/AddStory';
import StorySlider from '@/components/SliderCus/StorySlider';
import { Card } from '@radix-ui/themes';

const HomeStoryPage = async () => {
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
                    <div>
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

export default HomeStoryPage;
