import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "");
        console.log('MongoDB Connected🟢');
    } catch (error) {
        console.error("Error connecting to MongoDB🔴:",error);
        process.exit(1);
    }
};

export default connectDB;