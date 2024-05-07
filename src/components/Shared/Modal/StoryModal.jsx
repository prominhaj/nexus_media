import ModalCus from '@/components/Homes/ModalCus/ModalCus';
import { Avatar } from '@radix-ui/themes';
import moment from 'moment';
import Image from 'next/image';

const StoryModal = ({ card, item }) => {

    const modalTitle = <>

        <div className='flex items-center gap-3'>
            <Avatar
                className='object-cover border-2 border-gray-500'
                radius='full'
                src={item?.image?.profileURL}
                fallback={item.name.slice(0, 1)}
            />
            <div className='text-sm font-normal'>
                <h2 className='font-medium'>{item?.name}</h2>
                <p>
                    <small>
                        {moment(item?.createdAt).format('MMM DD, YYYY h:mm A')}
                    </small>
                </p>
            </div>
        </div>
    </>

    return (
        <>
            <ModalCus name={card} modalTitle={modalTitle} closeHidden={true}>
                <Image src={item?.storyImage?.photoUrl} width={600} loading='lazy' height={600} className='object-cover w-full h-full transition-all duration-300 rounded-md ' alt='Image' />
            </ModalCus>
        </>
    );
};

export default StoryModal;