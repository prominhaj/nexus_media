import { ColorContext } from '@/Providers/ColorProvider';
import { useContext } from 'react';

const useColor = () => {
    const [color, setColor] = useContext(ColorContext);
    return [
        color,
        setColor
    ]
};

export default useColor;