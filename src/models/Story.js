import mongoose from 'mongoose';
const { Schema } = mongoose;

const storySchema = new Schema(
    {
        userId: { type: String, required: true },
        storyImage: {
            photoUrl: { type: String, required: true },
            publicId: { type: String, required: true }
        }
    },
    { timestamps: true }
);

export default mongoose.models.Story || mongoose.model('Story', storySchema);
