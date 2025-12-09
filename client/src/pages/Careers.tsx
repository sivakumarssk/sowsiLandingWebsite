import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock } from "lucide-react";

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

const Careers = () => {
  const [, setLocation] = useLocation();
  const [jobs, setJobs] = useState<Job[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await apiRequest("GET", "/api/jobs");
      const jobsList = Array.isArray(data) ? data : [];
      setJobs(jobsList.filter((job: Job) => job.isActive));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load jobs. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleJobClick = (job: Job) => {
    setLocation(`/careers/apply/${job._id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team. 
            Explore our open positions and find your next opportunity.
          </p>
        </div>

        {jobs.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Briefcase className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Open Positions</h3>
              <p className="text-gray-600">
                We don't have any open positions at the moment. Check back later!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job._id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <Badge variant="secondary">{job.uniqueCode}</Badge>
                  </div>
                  <CardDescription className="text-base font-medium text-gray-700">
                    {job.department}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {job.description}
                  </p>
                  <Button
                    onClick={() => handleJobClick(job)}
                    className="w-full"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Careers;

