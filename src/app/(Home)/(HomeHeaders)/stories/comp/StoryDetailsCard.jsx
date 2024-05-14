import { Avatar, Card } from '@radix-ui/themes';
import moment from 'moment';
import Image from 'next/image';
import BackButton from './BackButton';

const StoryDetailsCard = ({ story }) => {
    return (
        <Card size='2'>
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
                        <small>
                            {moment(story?.createdAt).format('MMM DD, YYYY h:mm A')}
                        </small>
                    </p>
                </div>
            </div>
            <div className='py-3'>
                <Image
                    src={story?.storyImage?.photoUrl}
                    width={800}
                    height={500}
                    className='object-cover w-full min-h-[18rem] md:min-h-[20rem] max-h-[20rem] md:max-h-[25rem] transition-all duration-300 rounded-md'
                    alt='Image'
                />
            </div>
            <div className='flex items-center justify-end'>
                <BackButton />
            </div>
        </Card>
    );
};

export default StoryDetailsCard;