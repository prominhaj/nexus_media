import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        image: {
            profileURL: { type: String, required: false },
            publicId: { type: String, required: false }
        },
        password: { type: String, required: false },
        gender: { type: String, default: '', required: false },
        birth: { type: String, required: false, default: '' },
        role: { type: String, default: 'user' }
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', usersSchema);
