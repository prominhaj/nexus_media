import Button from '@/components/Button/Button';
import { MdEdit } from "react-icons/md";

const ProfileEdit = () => {
    return (
        <div>
            <Button className='!py-[0.625rem] bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text flex items-center gap-2'>
                <MdEdit className='text-xl' />
                Edit
            </Button>
        </div>
    );
};

export default ProfileEdit;