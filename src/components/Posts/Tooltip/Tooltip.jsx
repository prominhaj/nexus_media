const Tooltip = ({ button, className, children }) => {
    return (
        <div className="relative inline-block w-full group">
            <div className="w-full">{button}</div>
            <div className={`absolute z-10 hidden p-1.5 text-gray-100 transition-opacity duration-1000 delay-1000 rounded-lg shadow-md group-hover:block backdrop-blur-sm dark:bg-white/30 bg-black/30 ${className || ""}`}>
                {children}
            </div>
        </div>
    );
};

export default Tooltip;
