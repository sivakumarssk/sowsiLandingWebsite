import mongoose, { Schema, Document, Model } from "mongoose";

// 1. User
export interface IUser extends Document {
  username: string;
  password: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

// 2. Contact Form Submission
export interface IContact extends Document {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message?: string;
  createdAt: Date;
}

const ContactSchema: Schema<IContact> = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String },
    service: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const ContactModel: Model<IContact> = mongoose.model<IContact>("Contact", ContactSchema);

// 3. Consultation Request
export interface IConsultation extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  createdAt: Date;
}

const ConsultationSchema: Schema<IConsultation> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const ConsultationModel: Model<IConsultation> = mongoose.model<IConsultation>("Consultation", ConsultationSchema);

// 4. Newsletter Subscription
export interface ISubscription extends Document {
  email: string;
  createdAt: Date;
}

const SubscriptionSchema: Schema<ISubscription> = new Schema(
  {
    email: { type: String, required: true, unique: true }
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const SubscriptionModel: Model<ISubscription> = mongoose.model<ISubscription>("Subscription", SubscriptionSchema);

// 5. Admin User
export interface IAdmin extends Document {
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema: Schema<IAdmin> = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const AdminModel: Model<IAdmin> = mongoose.model<IAdmin>("Admin", AdminSchema);

// 6. Job Posting
export interface IJob extends Document {
  uniqueCode: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, Contract, etc.
  description: string;
  requirements: string[];
  responsibilities: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema<IJob> = new Schema(
  {
    uniqueCode: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    requirements: [{ type: String }],
    responsibilities: [{ type: String }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const JobModel: Model<IJob> = mongoose.model<IJob>("Job", JobSchema);

// 7. Job Application
export interface IJobApplication extends Document {
  jobId: mongoose.Types.ObjectId;
  jobCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumePath: string;
  coverLetter?: string;
  experience?: string;
  education?: string;
  skills?: string[];
  createdAt: Date;
}

const JobApplicationSchema: Schema<IJobApplication> = new Schema(
  {
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    jobCode: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    resumePath: { type: String, required: true },
    coverLetter: { type: String },
    experience: { type: String },
    education: { type: String },
    skills: [{ type: String }],
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const JobApplicationModel: Model<IJobApplication> = mongoose.model<IJobApplication>("JobApplication", JobApplicationSchema);
