const imageApiKey = process.env.NEXT_PUBLIC_IMAGE_HOSTING_API_KEY;

const imageUpload = async (photo, story) => {
    // Image Upload
    const formData = new FormData();
    formData.append('image', story ? photo : photo[0]);

    const imageUpload = await fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
        method: 'POST',
        body: formData
    });
    return await imageUpload.json();
};

export default imageUpload;
