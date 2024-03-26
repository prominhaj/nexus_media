export const postAddStory = async (data) => {
    const req = await fetch('/api/addstory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await req.json();
};
