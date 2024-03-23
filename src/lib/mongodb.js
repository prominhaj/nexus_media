import mongoose from 'mongoose';

const connectDB = async () => {
    const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.xevudqv.mongodb.net/nexus-media?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        throw new Error({ 'Error connecting to mongodb': err.message });
    }
};

export default connectDB;
