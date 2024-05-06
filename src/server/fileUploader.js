'use server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const fileUploader = async (file, folder) => {
    try {
        const buffer = new Uint8Array(file);
        const result = await new Promise(async (resolve, reject) => {
            await cloudinary.uploader
                .upload_stream(
                    {
                        folder: `Nexus Media App/${folder}`,
                        resource_type: 'auto',
                        unique_filename: true
                    },
                    function (error, result) {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolve(result);
                    }
                )
                .end(buffer);
        });
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
