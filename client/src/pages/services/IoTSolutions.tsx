import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Antenna, CircuitBoard, Cloud, Gauge, Network, Shield } from "lucide-react";

const differentiators = [
  "End-to-end expertise from firmware and edge gateways to cloud visualization.",
  "Secure device provisioning, OTA updates, and observability baked into every deployment.",
  "Data pipelines that unlock predictive maintenance, automation, and new service models."
];

const servicePillars = [
  { icon: CircuitBoard, title: "Edge Engineering", description: "Firmware development, sensor integration, and resilient edge computing that works in the harshest environments." },
  { icon: Network, title: "Connectivity & Protocols", description: "LoRaWAN, NB-IoT, BLE, Zigbee, and custom protocols tuned for your deployment." },
  { icon: Cloud, title: "Cloud Platforms", description: "AWS IoT, Azure IoT Hub, and Google Cloud IoT Core implementations with scalable data lakes and command centers." },
  { icon: Gauge, title: "Analytics & Automation", description: "BI dashboards, anomaly detection, automation workflows, and digital twins that translate data into action." },
  { icon: Shield, title: "Security & Compliance", description: "Encryption, device attestation, zero-trust architecture, and compliance for regulated industries." }
];

const techStack = [
  "ARM, ESP32, Raspberry Pi",
  "Modbus, MQTT, OPC-UA, WebSockets",
  "AWS IoT Core, Azure IoT Hub, GCP IoT",
  "Node-RED, ThingsBoard, Losant",
  "Grafana, Power BI, Tableau",
  "Edge ML, TinyML, AWS Greengrass"
];

const IoTSolutions = () => {
  return (
    <>
      <Helmet>
        <title>IoT Solutions & Connected Platforms | Sowsi Technologies</title>
        <meta
          name="description"
          content="Build secure IoT ecosystems with Sowsi Technologies—edge engineering, cloud platforms, analytics, and automation for smart operations."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#020617] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_60%)]" aria-hidden="true" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services · IoT</p>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            Connected products that make operations smarter and customers happier.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            We architect, build, and scale IoT solutions that join devices, data, and people into one intelligent ecosystem—securely and reliably.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Discuss Your Use Case</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#020617]">
                See IoT Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">Full-stack IoT delivery</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our cross-functional pods bring hardware, software, and data science together—accelerating your journey from prototype to global deployment.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="text-lg font-semibold text-[#1E293B]">Where we excel</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Antenna className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <pillar.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[#1E293B]">{pillar.title}</h3>
                <p className="mt-3 text-base text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#1E293B]">Platforms & toolkits</h2>
            <p className="mt-4 text-lg text-gray-600">
              Built on industry-leading hardware and cloud ecosystems to keep your investment future-proof.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <li key={tech} className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B]">Ready to connect the dots?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Let’s architect a resilient IoT platform that gives you real-time visibility, automated insights, and happy customers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Schedule a Workshop</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IoTSolutions;

