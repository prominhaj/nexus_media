import mongoose from 'mongoose';
const { Schema } = mongoose;

const storySchema = new Schema({
    name: String,
    email: { type: String, required: true },
    profilePhoto: { type: String, required: true },
    storyPhoto: { type: String, required: true },
    Date: { type: Date, required: true, default: Date.now() }
});

export default mongoose.models.Story || mongoose.model('Story', storySchema);
