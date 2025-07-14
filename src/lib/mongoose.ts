"use server";
import mongoose from "mongoose";


let isConnected: boolean = false;
export const connectToDatabase = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined");
    }
    if (isConnected) {
        console.log("Already connected to MongoDB");
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "ucademy",
        });
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}