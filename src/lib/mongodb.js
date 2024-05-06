import mongoose from 'mongoose';

const connectDB = async () => {
    // const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.xevudqv.mongodb.net/nexus-media?retryWrites=true&w=majority&appName=Cluster0`;

    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Mongo Connection successfully established.');
    } catch (error) {
        throw new Error('Error connecting to Mongoose');
    }
};

export default connectDB;
