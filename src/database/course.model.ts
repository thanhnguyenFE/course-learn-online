    import { ECourseLevel, ECourseStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface ICourse extends Document {
    _id: string;
    title: string;
    description: string;
    price: number;
    sale_price: number;
    image: string;
    intro_url: string;
    slug: string;
    created_at: Date;
    updated_at: Date;
    author: Schema.Types.ObjectId;
    category: Schema.Types.ObjectId;
    level: ECourseLevel;
    duration: number;
    status: ECourseStatus;
    vỉews: number;
    ratings: number;
    info:{
        requirements: string[];
        benefits: string[];
        qa:{
            question: string;
            answer: string;
        }[];
    };
    lectures: Schema.Types.ObjectId[];
    _destroy: boolean;
}


const CourseSchema = new Schema<ICourse>({
    title: {type: String, required: true},
    slug: {type: String, required: true},
    description: {type: String},
    price: {type: Number},
    sale_price: {type: Number},
    image: {type: String, required: true},
    intro_url: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    author: {type: Schema.Types.ObjectId, ref: "User", required: true},
    category: {type: Schema.Types.ObjectId, ref: "Category", required: true},
    level: {type: String, enum: Object.values(ECourseLevel), default: ECourseLevel.BEGINNER},
    duration: {type: Number},
    status: {type: String, enum: Object.values(ECourseStatus), default: ECourseStatus.PENDING},
    vỉews: {type: Number, default: 0},
    ratings: {type: Number, default: 0},
    info: {
        requirements: {type: [String], default: []},
        benefits: {type: [String], default: []},
        qa: {type: [{question: {type: String}, answer: {type: String}}], default: []},
    },
    lectures: {type: [{type: Schema.Types.ObjectId, ref: "Lecture"}], default: []},
    _destroy: {type: Boolean, default: false},
})


const Course = models.Course || model<ICourse>("Course", CourseSchema);

export default Course;