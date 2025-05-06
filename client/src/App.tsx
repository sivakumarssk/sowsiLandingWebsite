import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 30 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 15000);

    return () => clearTimeout(popupTimer);
  }, []);

  const handleClosePopup=() =>{
    setShowPopup(false)

    setTimeout(() => {
      setShowPopup(true);
    }, 30000);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navbar />
        <Router />
        <Footer />
        {showPopup && <PopupForm onClose={handleClosePopup} />}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
