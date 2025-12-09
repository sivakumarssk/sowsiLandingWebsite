// src/routes.ts
import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import path from "path";
import {
  createContact,
  getContacts,
  deleteContact
} from "./controllers/contactController";
import {
  createConsultation,
  getConsultations,
  deleteConsultation
} from "./controllers/consultationController";
import {
  createSubscription,
  getSubscriptions,
  deleteSubscription
} from "./controllers/subscriptionController";
import {
  adminLogin,
  createAdmin,
  verifyAdminToken
} from "./controllers/adminController";
import {
  createJob,
  getJobs,
  updateJob,
  deleteJob
} from "./controllers/jobController";
import {
  createJobApplication,
  getJobApplications,
  getResume,
  deleteJobApplication,
  upload
} from "./controllers/jobApplicationController";
import {
  getDashboardData
} from "./controllers/dashboardController";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve uploaded files
  app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

  // Contact Form endpoints
  app.post("/api/contact", createContact);
  app.get("/api/contact/:id?", getContacts);
  app.delete("/api/contact/:id", deleteContact);

  // Consultation endpoints
  app.post("/api/consultation", createConsultation);
  app.get("/api/consultation/:id?", getConsultations);
  app.delete("/api/consultation/:id", deleteConsultation);

  // Subscription endpoints
  app.post("/api/subscribe", createSubscription);
  app.get("/api/subscribe/:id?", getSubscriptions);
  app.delete("/api/subscribe/:id", deleteSubscription);

  // Public job endpoints
  app.get("/api/jobs", getJobs);
  app.get("/api/jobs/:id", getJobs);

  // Public job application endpoint
  app.post("/api/job-applications", upload.single("resume"), createJobApplication);

  // Admin authentication endpoints
  app.post("/api/admin/login", adminLogin);
  app.post("/api/admin/create", createAdmin); // For initial admin creation

  // Protected admin routes
  app.get("/api/admin/dashboard", verifyAdminToken, getDashboardData);

  // Admin job management endpoints
  app.post("/api/admin/jobs", verifyAdminToken, createJob);
  app.put("/api/admin/jobs/:id", verifyAdminToken, updateJob);
  app.delete("/api/admin/jobs/:id", verifyAdminToken, deleteJob);

  // Admin job application endpoints
  app.get("/api/admin/job-applications", verifyAdminToken, getJobApplications);
  app.get("/api/admin/job-applications/:id", verifyAdminToken, getJobApplications);
  app.get("/api/admin/job-applications/resume/:id", verifyAdminToken, getResume);
  app.delete("/api/admin/job-applications/:id", verifyAdminToken, deleteJobApplication);

  // Create and return the HTTP server instance
  const httpServer = createServer(app);
  return httpServer;
}