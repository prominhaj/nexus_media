import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema(
    {
        userId: { type: String, required: true },
        postImage: {
            photoUrl: { type: String, required: true },
            publicId: { type: String, required: true }
        },
        description: { type: String, default: '' },
        reactions: { type: Array, default: [] },
        comments: { type: Array, default: [] }
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', postSchema);
