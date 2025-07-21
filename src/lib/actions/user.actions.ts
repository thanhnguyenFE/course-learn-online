"use server";

import {connectToDatabase} from "../mongoose";
import User from "@/database/user.model";
import {ICreateUserParams} from "@/types";

export default async function createUser(params: ICreateUserParams): Promise<ICreateUserParams | undefined> {
    try {
        connectToDatabase();
        const newUser = await User.create(params);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
    }
}
