import mongoose from "mongoose";

export const connectToDatabase = async () => {
    await mongoose.connect(process.env.MONGODB_URL as string, {
        autoIndex: true,
    });
};
