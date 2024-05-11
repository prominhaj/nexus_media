
const FormControl = ({ id, label, type, placeholder, className, children }) => {
    return (
        <div className="flex flex-col gap-2 py-2">
            <label htmlFor={id} className='text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>{label}</label>
            <input
                id={id}
                name={id}
                className={`${className ? className : ""} w-full rounded-md border border-[#E4E4E7] dark:border-[#3a3a3e] bg-transparent px-3 py-1.5 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-[#A1A1AA] dark:focus-visible:border-[#6E6E71] disabled:cursor-not-allowed disabled:opacity-50`}
                type={type}
                required
                accept="image/*"
                placeholder={placeholder} />
            <>
                {children}
            </>
        </div>
    );
};

export default FormControl;