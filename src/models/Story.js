import mongoose from 'mongoose';
const { Schema } = mongoose;

const storySchema = new Schema({
    name: String,
    email: { type: String, required: true },
    profilePhoto: { type: String, required: true },
    storyPhoto: { type: String, required: true },
    Date: { type: String, required: true, default: Date.now().toString() }
});

export default mongoose.models.Story || mongoose.model('Story', storySchema);
