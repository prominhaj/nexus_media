import { ImageResponse } from 'next/og';
import logo from './icon.png';
import Image from 'next/image';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32
};

export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <>
                <Image src={logo} alt='Logo' width={size.width} height={size.height} />
            </>
        ),
        {
            ...size
        }
    );
}
