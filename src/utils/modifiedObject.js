const modifiedData = (array) => {
    const modifiedData = array.map((o) => ({
        ...o,
        _id: o._id.toString()
    }));
    return modifiedData;
};

export default modifiedData;
