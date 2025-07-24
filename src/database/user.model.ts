import {EUserRole, EUserStatus} from "@/types/enums";
import {Document, model, models, Schema} from "mongoose";

export interface IUser extends Document {
    name: string;
    username: string;
    email: string;
    avatar: string;
    courses: Schema.Types.ObjectId[];
    status: EUserStatus;
    role: EUserRole;
    created_at: Date;
    clerk_id: string;
}

const UserSchema = new Schema<IUser>({
    name: {type: String},
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    avatar: {type: String, default: ""},
    courses: [{type: Schema.Types.ObjectId, ref: "Course"}],
    status: {
        type: String,
        enum: Object.values(EUserStatus),
        default: EUserStatus.ACTIVE,
    },
    role: {
        type: String,
        enum: Object.values(EUserRole),
        default: EUserRole.USER,
    },
    created_at: {type: Date, default: Date.now},
    clerk_id: {type: String, unique: true},
});

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
