const createNewAccount = async (data) => {
    const req = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await req.json();
};

export default createNewAccount;
