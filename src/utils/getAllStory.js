const getAllStory = async () => {
    const response = await fetch('http://localhost:3000/api/story');
    const data = await response.json();
    return data;
};

export default getAllStory;
