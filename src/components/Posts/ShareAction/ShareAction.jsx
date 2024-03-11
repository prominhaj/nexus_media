import { FiShare } from "react-icons/fi";

const ShareAction = () => {
    return (
        <div className="w-full flex justify-center gap-1 items-center dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] py-[0.3125rem] text-[.875rem] dark:text-[#B0B3B8] px-2 rounded-md duration-200 transition-all cursor-pointer">
            <FiShare className="text-xl" />
            <div className='text-[#65676B] dark:text-[#B0B3B8] block'>Share</div>
        </div>
    );
};

export default ShareAction;