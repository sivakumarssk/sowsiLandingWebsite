import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>Sowsi Technologies | Web, Mobile, IoT & AI Development Services</title>
      <meta name="description" content="Sowsi Technologies offers cutting-edge web development, mobile app development, IoT solutions, software services, and AI development for businesses of all sizes." />
      <meta name="keywords" content="web development, mobile app development, IoT solutions, software services, AI development, Sowsi Technologies" />
    </Helmet>
    <App />
  </HelmetProvider>
);
