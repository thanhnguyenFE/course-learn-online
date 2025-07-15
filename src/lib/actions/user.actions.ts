"use server";

import { connectToDatabase } from "../mongoose";
import User, { IUser } from "@/database/user.model";

export default async function createUs(params: IUser) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}
