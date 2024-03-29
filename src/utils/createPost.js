const createPost = async (data) => {
    const req = await fetch('/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await req.json();
};

export default createPost;
