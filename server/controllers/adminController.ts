import { Request, Response, NextFunction } from "express";
import { AdminModel } from "@shared/schema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

// POST /api/admin/login
export async function adminLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: "Username and password are required" });
    }

    const admin = await AdminModel.findOne({ username });
    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (err: any) {
    next(err);
  }
}

// Middleware to verify JWT token
export function verifyAdminToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    (req as any).adminId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
}

// POST /api/admin/create
export async function createAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new AdminModel({
      username,
      password: hashedPassword,
      email,
    });

    const saved = await admin.save();
    res.status(201).json({
      success: true,
      data: {
        id: saved._id,
        username: saved.username,
        email: saved.email,
      },
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: "Username or email already exists" });
    }
    next(err);
  }
}

