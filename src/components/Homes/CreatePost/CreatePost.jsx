import { Avatar, Textarea } from '@nextui-org/react';
import React from 'react';

const CreatePost = () => {
    return (
        <div className='p-3 md:p-5 bg-white dark:bg-[#0F142A] rounded-lg'>
            <div className='flex items-start gap-3'>
                <div>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </div>
                <div className='flex-1'>

                </div>
            </div>
        </div>
    );
};

export default CreatePost;