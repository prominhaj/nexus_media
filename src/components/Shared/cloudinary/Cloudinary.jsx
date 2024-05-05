import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dccqjvrrk',
    api_key: '177249494748814',
    api_secret: 'P0vqyxp_UoeWeNLr7yNSDJdBSD4'
});

const Cloudinary = () => {

    const handleUpload = async (formData) => {
        "use server";
        const image = await formData.get("image");
        const arrayBuffer = await image.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ folder: "Nexus Media App/Images" }, function (error, result) {
                if (error) {
                    reject(error);
                    return
                }
                resolve(result);
            }).end(buffer)
        })
        console.log(result);
    };

    return (
        <form action={handleUpload}>
            <input type="file" name="image" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Cloudinary;
