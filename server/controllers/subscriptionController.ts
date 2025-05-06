// src/controllers/subscriptionController.ts
import { Request, Response, NextFunction } from "express";
import { SubscriptionModel } from "@shared/schema";

// POST /api/subscribe
export async function createSubscription(req: Request, res: Response, next: NextFunction) {
  try {
    const sub = new SubscriptionModel(req.body);
    const saved = await sub.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: err.message });
    }
    next(err);
  }
}

// GET /api/subscribe or GET /api/subscribe/:id
export async function getSubscriptions(req: Request, res: Response, next: NextFunction) {
  try {
    if (req.params.id) {
      const item = await SubscriptionModel.findById(req.params.id);
      if (!item) return res.status(404).json({ success: false, message: "Not found" });
      return res.json({ success: true, data: item });
    }
    const list = await SubscriptionModel.find();
    res.json({ success: true, data: list });
  } catch (err) {
    next(err);
  }
}

// DELETE /api/subscribe/:id
export async function deleteSubscription(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await SubscriptionModel.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    next(err);
  }
}
