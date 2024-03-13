import Button from '@/components/Button/Button';
import ModalCus from '@/components/Homes/ModalCus/ModalCus';
import { MdEdit } from "react-icons/md";

// Edit button
const editBtn = <>
    <div className='flex items-center gap-2 px-4 py-3 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text'>
        <MdEdit className='text-xl' />
        Edit
    </div>
</>

const ProfileEdit = () => {
    return (
        <div>
            <ModalCus name={editBtn} modalTitle="Edit Your Profile">

            </ModalCus>
        </div>
    );
};

export default ProfileEdit;