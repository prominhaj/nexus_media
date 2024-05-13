import { GoPlus } from "react-icons/go";
import AddStoryForm from "./AddStoryForm";
import ModalCus from "../ModalCus/ModalCus";

const addStoryBtn = <>
    <div className="flex items-center dark:text-dark-text justify-center w-[3.5rem] h-[3.5rem] bg-white border rounded-full dark:bg-transparent">
        <GoPlus className="text-2xl" />
    </div>
</>

const AddStory = ({ addStory }) => {

    return (
        <>
            {/* Story Create Modal */}
            <ModalCus name={addStory || addStoryBtn} modalTitle="Upload an Image">
                <AddStoryForm />
            </ModalCus>
        </>
    );
};

export default AddStory;