"use client";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { BsEmojiNeutral } from 'react-icons/bs';

// Dynamic Import
const EmojiSlider = dynamic(() => import('@/components/SliderCus/EmojiSlider'), {
    loading: () => <p>Loading...</p>,
})

const Emoji = ({ setDescription }) => {
    const [showEmoji, setShowEmoji] = useState(false);

    return (
        <div>
            <div className='absolute z-20 top-[3.3rem] right-3'>
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