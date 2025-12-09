// Script to create an initial admin user
// Run with: npx tsx server/scripts/createAdmin.ts

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { AdminModel } from "../../shared/schema";

dotenv.config();

async function createAdmin() {
  try {
    // Connect to MongoDB
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not found in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Get admin credentials from command line or use defaults
    const username = process.argv[2] || "admin";
    const password = process.argv[3] || "admin123";
    const email = process.argv[4] || "admin@sowsitech.com";

    // Check if admin already exists
    const existingAdmin = await AdminModel.findOne({ username });
    if (existingAdmin) {
      console.log("❌ Admin with this username already exists");
      process.exit(1);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const admin = new AdminModel({
      username,
      password: hashedPassword,
      email,
    });

    await admin.save();
    console.log("✅ Admin created successfully!");
    console.log(`   Username: ${username}`);
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}`);
    console.log("\n⚠️  Please change the default password after first login!");

    process.exit(0);
  } catch (error: any) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
}

createAdmin();

