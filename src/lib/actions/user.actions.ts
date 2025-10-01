"use server";

import {connectToDatabase} from "../mongoose";
import User, { IUser } from "@/database/user.model";
import {ICreateUserParams} from "@/types";

export default async function createUser(params: ICreateUserParams): Promise<ICreateUserParams | undefined> {
    try {
        await connectToDatabase();
        const existing = await User.findOne({ clerkId: params.clerkId });
        if (existing) return existing;
        const newUser = await User.create(params);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
    }
}


export async function getUserInfo({userId}: {userId: string}): Promise<IUser | null | undefined> {
    try{
        await connectToDatabase();
        const user = await User.findOne({clerkId: userId});
        if(!user){
            return null;
        }
        return user;
    }
    catch(error){
        console.error("Error getting user info:", error);
        throw new Error("Failed to get user info");
    }
}
