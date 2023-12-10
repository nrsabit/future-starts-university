import { Schema, model } from 'mongoose';
import { Tcourse } from './course.interface';

const preRequisiteCoursesSchema = new Schema({
  course: { type: Schema.Types.ObjectId },
  isDeleted: { type: Boolean, default: false },
});

const courseSchema = new Schema<Tcourse>({
  title: { type: String, unique: true, required: true, trim: true },
  prefix: { type: String, required: true, trim: true },
  code: { type: Number, required: true, trim: true },
  credits: { type: Number, required: true, trim: true },
  isDeleted: { type: Boolean, required: true, default: false },
  preRequisiteCourses: [preRequisiteCoursesSchema],
});

export const CourseModel = model<Tcourse>('Course', courseSchema);
