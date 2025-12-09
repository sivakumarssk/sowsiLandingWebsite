import { Request, Response, NextFunction } from "express";
import { ContactModel, ConsultationModel, SubscriptionModel, JobModel, JobApplicationModel } from "@shared/schema";

// GET /api/admin/dashboard
export async function getDashboardData(req: Request, res: Response, next: NextFunction) {
  try {
    const [contacts, consultations, subscriptions, jobs, applications] = await Promise.all([
      ContactModel.countDocuments(),
      ConsultationModel.countDocuments(),
      SubscriptionModel.countDocuments(),
      JobModel.countDocuments(),
      JobApplicationModel.countDocuments(),
    ]);

    const recentContacts = await ContactModel.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("firstName lastName email phone service createdAt");

    const recentConsultations = await ConsultationModel.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name email phone service createdAt");

    const recentApplications = await JobApplicationModel.find()
      .populate("jobId", "title uniqueCode")
      .sort({ createdAt: -1 })
      .limit(5)
      .select("firstName lastName email phone jobCode createdAt");

    res.json({
      success: true,
      data: {
        stats: {
          contacts,
          consultations,
          subscriptions,
          jobs,
          applications,
        },
        recentContacts,
        recentConsultations,
        recentApplications,
      },
    });
  } catch (err: any) {
    next(err);
  }
}

