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
