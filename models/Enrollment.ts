import mongoose, { Schema, models, model } from "mongoose";

const EnrollmentSchema = new Schema(
  {
    // Basic Info
    name: String,
    age: String,
    gender: String,
    phone: String,
    email: String,

    // Headache info (flexible because your form is large)
    red_flags: Schema.Types.Mixed,
    autonomic_symptoms: Schema.Types.Mixed,
    general_findings: Schema.Types.Mixed,

    // Catch-all for remaining form fields
    data: Schema.Types.Mixed,
  },
  { timestamps: true }
);

// Prevent model overwrite on hot reload / Vercel
const Enrollment =
  models.Enrollment || model("Enrollment", EnrollmentSchema);

export default Enrollment;