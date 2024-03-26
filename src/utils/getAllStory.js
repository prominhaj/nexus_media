const getAllStory = async () => {
    const req = await fetch('http://localhost:3000/api/story');
    return await req.json();
};

export default getAllStory;
