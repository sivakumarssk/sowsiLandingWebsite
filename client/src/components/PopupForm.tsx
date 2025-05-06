import { FormEvent, useState } from "react";
import { X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface PopupFormProps {
  onClose: () => void;
}

const PopupForm = ({ onClose }: PopupFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !service || !phone) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/consultation", { name, email,phone, service });
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted.",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md popup-content">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Get a Free Consultation</DialogTitle>
          <DialogDescription className="text-center">
            Let us help you with your next project. Fill out the form below to get started.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name">Name</Label>
            <Input 
              id="popup-name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-phone">Phone</Label>
            <Input 
              id="popup-phone" 
              type="text" 
              value={phone}
              maxLength={10} 
              onChange={(e) => {
                const regex = /^[0-9]*$/;
                const inputValue = e.target.value;
                
                if (regex.test(inputValue)) {
                  setPhone(inputValue);
                }
              }} 
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="popup-email">Email</Label>
            <Input 
              id="popup-email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="popup-service">Service Interested In</Label>
            <Select onValueChange={setService} value={service} disabled={isSubmitting}>
              <SelectTrigger id="popup-service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="iot">IoT Solutions</SelectItem>
                <SelectItem value="software">Software Services</SelectItem>
                <SelectItem value="ai">AI Development</SelectItem>
                <SelectItem value="consulting">Consulting & Strategy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Request Consultation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm;
