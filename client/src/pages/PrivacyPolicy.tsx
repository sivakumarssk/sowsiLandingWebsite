import { Helmet } from "react-helmet-async";
import { Mail, Phone, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Sowsi Technologies</title>
        <meta name="description" content="Privacy Policy for Sowsi Technologies. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-[#1E293B] sm:text-5xl sm:tracking-tight">
              Privacy Policy
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500">
              Effective Date: 20 December 2025
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              At SOWSI Technologies, accessible from www.sowsitechnologies.com, we value your privacy and are committed to protecting your personal information. This Privacy Policy document explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for our services.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Personal details such as name, email address, phone number, and business information when you fill out contact forms or reach out to us.</li>
                  <li>Technical data such as IP address, browser type, device information, and pages visited on our website.</li>
                  <li>Any other information you voluntarily provide while communicating with us via email, phone, or website forms.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  The information we collect is used to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Respond to inquiries and provide our app development and website development services</li>
                  <li>Communicate with you regarding projects, proposals, or support</li>
                  <li>Improve our website, services, and user experience</li>
                  <li>Send updates, service-related information, or promotional content (only if applicable)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">3. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600">
                  Our website may use cookies and similar tracking technologies to enhance user experience and analyze website performance. You can choose to disable cookies through your browser settings if you prefer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties.
                </p>
                <p className="text-gray-600 mb-4">
                  We may share information only:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>When required by law or legal processes</li>
                  <li>With trusted service providers who assist us in operating our website or conducting business, under strict confidentiality agreements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">5. Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, misuse, loss, or disclosure. However, no online transmission or storage method is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">6. Third-Party Links</h2>
                <p className="text-gray-600">
                  Our website may contain links to third-party websites. SOWSI Technologies is not responsible for the privacy practices or content of such external websites. We encourage you to review their privacy policies separately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">7. Your Privacy Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Request access to the personal data we hold about you</li>
                  <li>Request correction or deletion of your personal information</li>
                  <li>Withdraw consent for data usage where applicable</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us using the details below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  SOWSI Technologies reserves the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on this page with an updated effective date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">9. Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:info@sowsitechnologies.com" className="text-primary hover:underline">
                      info@sowsitechnologies.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:8019929888" className="text-primary hover:underline">
                      8019929888
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <a href="https://www.sowsitechnologies.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      www.sowsitechnologies.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;

