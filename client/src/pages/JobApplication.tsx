import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Upload, MapPin, Clock, Briefcase } from "lucide-react";
import { Link } from "wouter";

interface Job {
  _id: string;
  uniqueCode: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  isActive: boolean;
}

const JobApplication = () => {
  const [, params] = useRoute("/careers/apply/:jobId");
  const [, setLocation] = useLocation();
  const jobId = params?.jobId;

  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    experience: "",
    education: "",
    skills: "",
  });

  useEffect(() => {
    if (jobId) {
      fetchJob();
    } else {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Job ID not found",
        variant: "destructive",
      });
    }
  }, [jobId]);

  const fetchJob = async () => {
    try {
      setIsLoading(true);
      const data = await apiRequest("GET", `/api/jobs/${jobId}`);
      // Handle both response formats: { success: true, data: job } or just job
      const jobData = data?.data || data;
      if (jobData && jobData.isActive) {
        setJob(jobData);
      } else {
        toast({
          title: "Error",
          description: "Job not found or no longer available",
          variant: "destructive",
        });
        setLocation("/careers");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load job details",
        variant: "destructive",
      });
      setLocation("/careers");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "File size must be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      if (!file.type.includes("pdf") && !file.type.includes("doc") && !file.type.includes("docx")) {
        toast({
          title: "Error",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!job) return;

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!resumeFile) {
      toast({
        title: "Error",
        description: "Please upload your resume",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const formDataToSend = new FormData();
      formDataToSend.append("jobId", job._id);
      formDataToSend.append("jobCode", job.uniqueCode);
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("resume", resumeFile);
      formDataToSend.append("coverLetter", formData.coverLetter);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("education", formData.education);
      formDataToSend.append("skills", formData.skills);

      await apiRequest("POST", "/api/job-applications", formDataToSend, true);

      toast({
        title: "Success!",
        description: "Your application has been submitted successfully.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        coverLetter: "",
        experience: "",
        education: "",
        skills: "",
      });
      setResumeFile(null);
      
      // Redirect to careers page after successful submission
      setTimeout(() => {
        setLocation("/careers");
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-gray-600 mb-4">Job not found</p>
            <Link href="/careers">
              <Button>Back to Careers</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link href="/careers">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Careers
            </Button>
          </Link>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                <div className="flex items-center gap-4 text-gray-600 mb-2">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="mt-2">
                  Job Code: {job.uniqueCode}
                </Badge>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Job Description</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>

              {job.responsibilities.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.requirements.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Application Form</CardTitle>
            <CardDescription>
              Please fill out the form below to apply for this position
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="resume">Resume * (PDF or Word)</Label>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                    required
                  />
                  {resumeFile && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      {resumeFile.name}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">Maximum file size: 5MB</p>
              </div>

              <div>
                <Label htmlFor="education">Education</Label>
                <Input
                  id="education"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  placeholder="e.g., Bachelor's in Computer Science"
                />
              </div>

              <div>
                <Label htmlFor="experience">Experience</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Brief description of your work experience"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="skills">Skills (comma-separated)</Label>
                <Input
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="e.g., JavaScript, React, Node.js"
                />
              </div>

              <div>
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Tell us why you're interested in this position"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobApplication;

