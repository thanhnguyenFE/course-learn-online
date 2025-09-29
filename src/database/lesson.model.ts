import { Document, model, models, Schema } from "mongoose";
export interface ILesson extends Document {
    _id: string;
    title: string;
    slug: string;
    lecture: Schema.Types.ObjectId;
    course: Schema.Types.ObjectId;
    type: string;
    _destroy: boolean;
    duration: number;
    video_url: string;
    content: string;
    order: number;
    created_at: Date;
    }


const LessonSchema = new Schema<ILesson>({
    title: {type: String, required: true},
    slug: {type: String, required: true},
    lecture: {type: Schema.Types.ObjectId, ref: "Lecture", required: true},
    course: {type: Schema.Types.ObjectId, ref: "Course", required: true},
    type: {type: String, required: true},
    _destroy: {type: Boolean, default: false},
    duration: {type: Number, required: true},
    video_url: {type: String, required: true},
    content: {type: String, required: true},
    order: {type: Number, default: 0},
    created_at: {type: Date, default: Date.now},
})

const Lesson = models.Lesson || model<ILesson>("Lesson", LessonSchema);

export default Lesson;