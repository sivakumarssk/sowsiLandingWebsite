// src/routes.ts
import type { Express } from "express";
import { createServer, type Server } from "http";
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

export async function registerRoutes(app: Express): Promise<Server> {
  // mount JSON body parsing before routes if not already applied
  // app.use(express.json()); app.use(express.urlencoded({ extended: false }));

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

  // Create and return the HTTP server instance
  const httpServer = createServer(app);
  return httpServer;
}