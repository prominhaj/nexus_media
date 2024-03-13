import React from 'react';

const InfoItem = ({ icon, name, value }) => {
    return (
        <>
            <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center gap-2 cursor-default'>
                    <span className='text-light-text dark:text-dark-text'>
                        {icon}
                    </span>
                    {
                        name === "Single" ? <></> : <>
                            <span className='text-sm'>{name}</span>
                            <span>-</span>
                        </>
                    }
                </div>
                <div>
                    <p className='text-sm font-medium'>{value}</p>
                </div>
            </div>
        </>
    );
};

export default InfoItem;