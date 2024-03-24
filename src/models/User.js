import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: String,
    email: { type: String, required: true },
    photo: { type: String, required: true },
    Date: { type: String, required: true },
    role: { type: String, default: 'user' }
});

export default mongoose.models.User || mongoose.model('User', usersSchema);
