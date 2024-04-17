import { Spinner } from "@nextui-org/react";

const SubmitButton = ({ loading }) => {

    return (
        <button disabled={loading && loading} type="submit" className='flex items-center gap-1.5 px-4 py-1.5 text-sm tracking-wider text-white transition-all shadow-lg rounded-3xl duration-250 disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:opacity-60 bg-gradient-to-r from-blue-500 to-blue-500'>
            {loading && <Spinner classNames={{ wrapper: "w-5 h-5", circle2: "border-white" }} />}
            Submit
        </button>
    );
};

export default SubmitButton;