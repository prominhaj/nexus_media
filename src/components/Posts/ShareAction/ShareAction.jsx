import domain from "@/Domain/domain.config";
import PopoverCus from "@/components/Homes/Popover/PopoverCus";
import { Snippet } from "@nextui-org/react";
import { FiShare } from "react-icons/fi";

// Share button
const shareBtn = <>
    <div className="w-full flex justify-center gap-1 items-center dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] py-[0.3125rem] text-[.875rem] dark:text-[#B0B3B8] px-2 rounded-md duration-200 transition-all cursor-pointer">
        <FiShare className="text-xl" />
        <div className='text-[#65676B] dark:text-[#B0B3B8] block'>Share</div>
    </div>
</>

const ShareAction = ({ id }) => {
    return (
        <>
            <PopoverCus name={shareBtn} buttonClass={"w-full"} classes={"w-80"}>
                <div className="flex flex-wrap">
                    <Snippet
                        variant="bordered"
                        hideSymbol={true}
                        classNames={{
                            copyButton: [
                                "py-1 px-2 absolute data-[hover=true]:bg-gray-100 right-0 bottom-0 bg-gray-100 z-10 dark:bg-gray-900",
                                "",
                            ],
                        }}
                        className="relative flex-wrap w-full overflow-x-hidden text-wrap">
                        <span>
                            {`${domain}/post/${id}`}
                        </span>
                    </Snippet>
                </div>
            </PopoverCus>
        </>
    );
};

export default ShareAction;