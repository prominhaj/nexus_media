import React from 'react';
import InfoItem from '../InfoItem/InfoItem';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { IoTime } from 'react-icons/io5';
import { Poppins } from 'next/font/google';
import AddBio from './AddBio';
import InfoEdit from './InfoEdit';

const poppins = Poppins({
    weight: ['200', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap'
});

const InfoArea = () => {

    return (
        <div>
            <div
                className={`bg-white dark:bg-[#293145] rounded-md shadow-lg p-3 ${poppins.className}`}
            >
                <h2 className='text-xl font-medium text-light-text dark:text-dark-text'>
                    Info
                </h2>
                {/* Bio */}
                <div className='py-3'>
                    <AddBio />
                </div>

                <div className='flex flex-col gap-3 py-3 md:gap-5'>
                    <InfoItem
                        icon={<FaInfoCircle className='text-xl' />}
                        name='Work From'
                        value='Web Developer'
                    />
                    <InfoItem
                        icon={<MdHome className='text-xl' />}
                        name='Home'
                        value='Bogura,Bangladesh'
                    />
                    <InfoItem
                        icon={<FaHeart className='text-xl' />}
                        name='Single'
                        value='Single'
                    />
                    <InfoItem
                        icon={<IoTime className='text-xl' />}
                        name='Join on'
                        value='December 2018'
                    />
                </div>
                <div>
                    <InfoEdit />
                </div>
            </div>
        </div>
    );
};

export default InfoArea;