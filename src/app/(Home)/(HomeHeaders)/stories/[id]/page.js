import { getSingleStory } from '@/server/story';
import { Avatar, Card } from '@radix-ui/themes';
import moment from 'moment';

const StoriesDetailsPage = async ({ params: { id } }) => {
    const story = await getSingleStory(id);
    console.log(story);
    return (
        <div>
            <Card>
                <div className='flex items-center gap-3'>
                    <Avatar
                        className='object-cover border-2 border-gray-500'
                        radius='full'
                        src={story?.image?.profileURL}
                        fallback={story?.name?.slice(0, 1)}
                    />
                    <div className='text-sm font-normal'>
                        <h2 className='font-medium'>{story?.name}</h2>
                        <p>
                            <small>{moment(story?.createdAt).format('MMM DD, YYYY h:mm A')}</small>
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default StoriesDetailsPage;
