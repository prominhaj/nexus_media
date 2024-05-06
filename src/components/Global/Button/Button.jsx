
const Button = ({ children, className, type, onClick }) => {
    return (
        <button type={type && type} onClick={onClick && onClick} className={`px-4 py-2 duration-250 transition-all font-medium text-sm rounded-lg tracking-wider ${className ? className : ""}`}>{children}</button>
    );
};

export default Button;