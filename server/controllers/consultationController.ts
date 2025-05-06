// src/controllers/consultationController.ts
import { Request, Response, NextFunction } from "express";
import { ConsultationModel } from "@shared/schema";

// POST /api/consultation
export async function createConsultation(req: Request, res: Response, next: NextFunction) {
  try {
    const cons = new ConsultationModel(req.body);
    const saved = await cons.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: err.message });
    }
    next(err);
  }
}

// GET /api/consultation or GET /api/consultation/:id
export async function getConsultations(req: Request, res: Response, next: NextFunction) {
  try {
    if (req.params.id) {
      const item = await ConsultationModel.findById(req.params.id);
      if (!item) return res.status(404).json({ success: false, message: "Not found" });
      return res.json({ success: true, data: item });
    }
    const list = await ConsultationModel.find();
    res.json({ success: true, data: list });
  } catch (err) {
    next(err);
  }
}

// DELETE /api/consultation/:id
export async function deleteConsultation(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await ConsultationModel.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    next(err);
  }
}
