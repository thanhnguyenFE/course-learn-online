import { Document, model, models, Schema } from "mongoose";

export interface ILecture extends Document {
    _id: string;
    title: string;
    course: Schema.Types.ObjectId;
    lessons: Schema.Types.ObjectId[];
    description: string;
    created_at: Date;
    order: number;
    _destroy: boolean;
}


const LectureSchema = new Schema<ILecture>({
    title: {type: String, required: true},
    course: {type: Schema.Types.ObjectId, ref: "Course", required: true},
    lessons: {type: [{type: Schema.Types.ObjectId, ref: "Lesson"}], default: []},
    description: {type: String},
    created_at: {type: Date, default: Date.now},
    order: {type: Number, required: true},
    _destroy: {type: Boolean, default: false},
})

const Lecture = models.Lecture || model<ILecture>("Lecture", LectureSchema);

export default Lecture;