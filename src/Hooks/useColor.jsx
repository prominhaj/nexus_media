import { ColorContext } from '@/Providers/ColorProvider';
import { useContext } from 'react';

const useColor = () => {
    const { color, setColor, bgColor, setBgColor } = useContext(ColorContext);
    return {
        color,
        setColor,
        bgColor,
        setBgColor
    }
};

export default useColor;