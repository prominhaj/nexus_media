const ObjectId = (object) => {
    const { _id, ...updatedObj } = { ...object, id: object._id.toString() };
    return updatedObj;
};

export default ObjectId;
