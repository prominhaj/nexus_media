import cloudinary from 'cloudinary';

export const POST = async (req) => {
    const file = await req.json();
    console.log(file);
    try {
        const result = await cloudinary.v2.uploader.upload(file.file, {
            upload_preset: 'your_unsigned_upload_preset'
        });

        return res.status(200).json(result);
    } catch (error) {
        console.error('Error uploading image:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
