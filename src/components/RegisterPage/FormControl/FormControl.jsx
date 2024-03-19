
const FormControl = ({ id, label, type, placeholder, register, className, children }) => {
    return (
        <div className="py-2">
            <label htmlFor={id} className='block text-base tracking-wide text-gray-100'>{label}</label>
            <input
                {...register(id, { required: true })}
                id={id}
                className={`${className ? className : ""} w-full px-3 ring-1 bg-transparent mt-2 text-base text-gray-300 rounded-md outline-none py-[0.375rem] focus:ring-2 placeholder:text-gray-500`}
                type={type}
                accept="image/*"
                placeholder={placeholder} />
            <>
                {children}
            </>
        </div>
    );
};

export default FormControl;