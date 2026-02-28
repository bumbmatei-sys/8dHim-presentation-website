import React from "react";
import { motion } from "motion/react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-forest">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-forest">Privacy Policy</h1>
          <p className="text-lg text-forest/70 mb-12">Last Updated: 02.26.2026</p>

          <div className="space-y-12 text-lg leading-relaxed text-forest/80">
            <section>
              <p className="mb-6">Welcome to 8th Day Hope International Ministries.</p>
              <p className="mb-6">
                We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, enroll in our platform, or use our related discipleship resources (collectively, the "Services").
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Services, you agree to the collection and use of your information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">1. Information We Collect</h2>
              <p className="mb-4">To provide you with our teaching videos, graphics, and resources, we may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Personal Information:</span> When you enroll for a free account, we may ask for identifying information such as your name, email address, and account password.
                </li>
                <li>
                  <span className="font-semibold">Usage Data:</span> We automatically collect certain information when you visit, use, or navigate the platform. This may include your IP address, browser type, operating system, the specific videos or materials you access, and the dates and times of your visits.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect primarily to provide, maintain, and improve our discipleship platform. Specifically, we use your data to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and securely manage your user account.</li>
                <li>Deliver the video teachings, printables, and other discipleship materials you request.</li>
                <li>Send you necessary administrative emails, such as account verification, password resets, or updates to our terms.</li>
                <li>Monitor and analyze platform usage and trends to improve our user experience and content offerings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">3. How We Share Your Information</h2>
              <p className="mb-4">
                We value your trust and do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information only in the following limited situations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Service Providers:</span> We may share your data with trusted third-party vendors who perform essential services on our behalf, such as website hosting, email delivery, and secure data storage. These third parties are bound by strict confidentiality agreements.
                </li>
                <li>
                  <span className="font-semibold">Legal Requirements:</span> We may disclose your information if required to do so by applicable law or in response to valid requests by public authorities (such as a court or government agency).
                </li>
                <li>
                  <span className="font-semibold">Protection of Rights:</span> We may disclose your information when we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, or situations involving potential threats to the security of the platform or the safety of any person.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">4. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies and similar tracking technologies to access or store information. Cookies help us remember your login details so you don't have to re-enter them, understand how you interact with our platform, and provide a seamless experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent, though some features of the platform may not function properly without them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard administrative, technical, and physical security measures to protect your personal information. However, please understand that no transmission of data over the internet or method of electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">6. Children's Privacy</h2>
              <p>
                Our platform is not intended for use by children under the applicable age of digital consent in your jurisdiction. We do not knowingly solicit or collect personal information from children. If we learn that we have collected personal information from a child without verifiable parental consent, we will take steps to delete that information as quickly as possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">7. Your Privacy Rights</h2>
              <p className="mb-4">
                You have the following rights regarding your personal information on our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Access and Update:</span> You can review and change your personal information at any time by logging into your account settings.
                </li>
                <li>
                  <span className="font-semibold">Deletion:</span> You may request that we delete your account and the personal data associated with it by utilizing the account deletion tools provided within the platform.
                </li>
                <li>
                  <span className="font-semibold">Opt-Out:</span> You may opt out of receiving any non-essential promotional or newsletter emails from us by following the unsubscribe link in those emails. You will still receive essential account-related administrative communications.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by updating the "Last Updated" date at the top of this page. Your continued use of the platform after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
