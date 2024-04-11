
// List of emoji symbols with their Unicode representation
const emojiSymbols = [
    "😀", "😂", "😁", "😍", "😊",
    "😋", "😎", "😘", "😭", "😂",
    "🤗", "🤔", "🤣", "🤩", "🥰",
    "🥺", "🎉", "🎶", "🌟", "🙏",
    "🙌", "👍"
];

const EmojiSlider = ({ setEmoji }) => {

    return (
        <div className="flex flex-wrap bg-white dark:border-gray-600 dark:bg-gray-800 text-blue border-blue hover:bg-blue border rounded-lg shadow-lg">
            {
                emojiSymbols.map((emoji, index) =>
                    <button key={index} onClick={() => setEmoji((prev) => prev + emoji)} type='button' className='flex items-center justify-center text-xl rounded-full w-9 h-9'>
                        {emoji}
                    </button>
                )
            }
        </div>
    );
};

export default EmojiSlider;