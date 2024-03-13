import Button from '@/components/Button/Button';
import React from 'react';

const AddBio = () => {

    return (
        <div>
            <Button className="w-full bg-light-bg hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover text-light-text dark:bg-dark-bg dark:text-dark-text">
                Add Bio
            </Button>
        </div>
    );
};

export default AddBio;