// src/controllers/contactController.ts
import { Request, Response, NextFunction } from "express";
import { ContactModel } from "@shared/schema";

// POST /api/contact
export async function createContact(req: Request, res: Response, next: NextFunction) {
  try {
    const contact = new ContactModel(req.body);
    const saved = await contact.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: err.message });
    }
    next(err);
  }
}

// GET /api/contact or GET /api/contact/:id
export async function getContacts(req: Request, res: Response, next: NextFunction) {
  try {
    if (req.params.id) {
      const item = await ContactModel.findById(req.params.id);
      if (!item) return res.status(404).json({ success: false, message: "Not found" });
      return res.json({ success: true, data: item });
    }
    const list = await ContactModel.find();
    res.json({ success: true, data: list });
  } catch (err) {
    next(err);
  }
}

// DELETE /api/contact/:id
export async function deleteContact(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await ContactModel.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    next(err);
  }
}