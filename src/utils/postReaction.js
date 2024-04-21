export const postReaction = async (id, reaction) => {
    const req = await fetch(`/api/post/reaction/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reaction)
    });
    return await req.json();
};
