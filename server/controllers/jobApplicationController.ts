import { Request, Response, NextFunction } from "express";
import { JobApplicationModel, JobModel } from "@shared/schema";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for file uploads
const uploadDir = path.join(process.cwd(), "uploads", "resumes");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `resume-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF and Word documents are allowed"));
    }
  },
});

// POST /api/job-applications
export async function createJobApplication(req: Request, res: Response, next: NextFunction) {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ success: false, message: "Resume file is required" });
    }

    const { jobId, jobCode, firstName, lastName, email, phone, coverLetter, experience, education, skills } = req.body;

    if (!jobId || !jobCode || !firstName || !lastName || !email || !phone) {
      // Delete uploaded file if validation fails
      fs.unlinkSync(file.path);
      return res.status(400).json({ success: false, message: "All required fields must be provided" });
    }

    // Verify job exists
    const job = await JobModel.findById(jobId);
    if (!job) {
      fs.unlinkSync(file.path);
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    const skillsArray = skills ? skills.split(",").map((s: string) => s.trim()).filter(Boolean) : [];

    const application = new JobApplicationModel({
      jobId,
      jobCode,
      firstName,
      lastName,
      email,
      phone,
      resumePath: file.path,
      coverLetter,
      experience,
      education,
      skills: skillsArray,
    });

    const saved = await application.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err: any) {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    if (err.name === "ValidationError") {
      return res.status(400).json({ success: false, message: err.message });
    }
    next(err);
  }
}

// GET /api/job-applications or GET /api/job-applications/:id
export async function getJobApplications(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { jobId } = req.query;

    if (id) {
      const application = await JobApplicationModel.findById(id).populate("jobId");
      if (!application) {
        return res.status(404).json({ success: false, message: "Application not found" });
      }
      return res.json({ success: true, data: application });
    }

    let query: any = {};
    if (jobId) {
      query.jobId = jobId;
    }

    const applications = await JobApplicationModel.find(query)
      .populate("jobId")
      .sort({ createdAt: -1 });

    res.json({ success: true, data: applications });
  } catch (err: any) {
    next(err);
  }
}

// GET /api/job-applications/resume/:id
export async function getResume(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const application = await JobApplicationModel.findById(id);

    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }

    if (!fs.existsSync(application.resumePath)) {
      return res.status(404).json({ success: false, message: "Resume file not found" });
    }

    res.sendFile(path.resolve(application.resumePath));
  } catch (err: any) {
    next(err);
  }
}

// DELETE /api/job-applications/:id
export async function deleteJobApplication(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const application = await JobApplicationModel.findById(id);

    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }

    // Delete resume file
    if (fs.existsSync(application.resumePath)) {
      fs.unlinkSync(application.resumePath);
    }

    await JobApplicationModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Application deleted successfully" });
  } catch (err: any) {
    next(err);
  }
}

