import Link from 'next/link';
import React from 'react';
import Tooltip from './Tooltip';

const TooltipFromPost = ({ data, button, comment }) => {
    return (
        <div>
            <Tooltip button={<button className='text-[#65676B] hover:underline dark:text-[#B0B3B8] font-sans text-[.9375.rem] leading-3'>
                {button}
            </button>}>
                <div>
                    {
                        data?.map((d, index) => <small key={index}>
                            <p>{comment ? d.user.name : d.name}</p>
                        </small>)
                    }
                </div>
            </Tooltip>
        </div>
    );
};

export default TooltipFromPost;