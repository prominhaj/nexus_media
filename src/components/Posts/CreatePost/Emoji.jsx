"use client"
import EmojiSlider from '@/components/SliderCus/EmojiSlider';
import React, { useState } from 'react';
import { BsEmojiNeutral } from 'react-icons/bs';

const Emoji = ({ setDescription }) => {
    const [showEmoji, setShowEmoji] = useState(false);
    return (
        <div>
            <div className='absolute z-20 right-4 top-14'>
                <button onClick={() => setShowEmoji(!showEmoji)} type='button'>
                    <BsEmojiNeutral className={`text-2xl ${showEmoji ? "text-blue-500" : ""}`} />
                </button>
            </div>
            {/* Show Emoji */}
            {
                showEmoji && <div className='pt-2'>
                    <EmojiSlider setEmoji={setDescription} />
                </div>
            }
        </div>
    );
};

export default Emoji;