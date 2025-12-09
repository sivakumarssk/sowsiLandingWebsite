import { Request, Response, NextFunction } from "express";
import { JobModel } from "@shared/schema";

// POST /api/jobs
export async function createJob(req: Request, res: Response, next: NextFunction) {
  try {
    const job = new JobModel(req.body);
    const saved = await job.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err: any) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ success: false, message: err.message });
    }
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: "Job code already exists" });
    }
    next(err);
  }
}

// GET /api/jobs or GET /api/jobs/:id
export async function getJobs(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    if (id) {
      const job = await JobModel.findById(id);
      if (!job) {
        return res.status(404).json({ success: false, message: "Job not found" });
      }
      return res.json({ success: true, data: job });
    }

    const jobs = await JobModel.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err: any) {
    next(err);
  }
}

// PUT /api/jobs/:id
export async function updateJob(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const job = await JobModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.json({ success: true, data: job });
  } catch (err: any) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ success: false, message: err.message });
    }
    next(err);
  }
}

// DELETE /api/jobs/:id
export async function deleteJob(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const job = await JobModel.findByIdAndDelete(id);

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.json({ success: true, message: "Job deleted successfully" });
  } catch (err: any) {
    next(err);
  }
}

