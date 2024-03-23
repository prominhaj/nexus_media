import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema(
    {
        name: String,
        email: { type: String, required: true },
        photo: { type: String, required: true },
        joinDate: { type: String, required: true },
        role: { type: String, default: 'user' }
    },
    { timestamp: true }
);

export default mongoose.models.User || mongoose.model('User', usersSchema);
