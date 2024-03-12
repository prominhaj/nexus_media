"use client"
import { useState } from 'react';

const useImageBackgroundRemover = () => {
    const [removedImageUrl, setRemovedImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleImageUpload = async (event) => {
        setLoading(true);
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image_file', file);

        try {
            const response = await fetch('https://api.remove.bg/v1.0/removebg', {
                method: 'POST',
                headers: {
                    'X-Api-Key': 'C8n3XnchAcBJNV5RcEPC9zUB',
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to remove background');
            }

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setRemovedImageUrl(imageUrl);
        } catch (error) {
            console.error('Error removing background:', error);
        } finally {
            setLoading(false);
        }
    };

    return { handleImageUpload, loading, removedImageUrl }
};

export default useImageBackgroundRemover;
