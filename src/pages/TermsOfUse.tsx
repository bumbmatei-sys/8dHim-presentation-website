import React from "react";
import { motion } from "motion/react";

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-forest">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-forest">Terms of Use</h1>
          <p className="text-lg text-forest/70 mb-12">Last Updated: 02.26.2026</p>

          <div className="space-y-12 text-lg leading-relaxed text-forest/80">
            <section>
              <p className="mb-6">Welcome to 8th Day Hope International Ministries.</p>
              <p>
                These Terms of Use ("Terms") govern your access to and use of our website, platform, and any related materials, including teaching videos, graphics, and discussion guides (collectively, the "Services"). By enrolling, accessing, or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">1. Purpose and Nature of the Platform</h2>
              <p>
                8th Day Hope International Ministries is a Christian discipleship platform designed to provide biblical teaching, graphics, and resources to help believers grow in their faith. The content provided is for educational, spiritual growth, and informational purposes only. It is not a substitute for professional mental health, medical, financial, or legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">2. User Accounts and Enrollment</h2>
              <p className="mb-4">To access the full suite of discipleship materials, users may enroll in the platform for free.</p>
              <p className="mb-4">You agree to provide accurate, current, and complete information during the registration process.</p>
              <p className="mb-4">You are responsible for safeguarding the password you use to access the platform and for any activities or actions under your account.</p>
              <p>You must be of the applicable age of digital consent in your jurisdiction to create an account.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">3. Intellectual Property and Permitted Use</h2>
              <p className="mb-4">
                We want these resources to be used for your spiritual growth and the growth of others. All videos, graphics, text, and materials provided on the platform are owned by or licensed to 8th Day Hope International Ministries and are protected by applicable copyright and intellectual property laws.
              </p>
              <p className="mb-4">We gladly grant you a limited, non-exclusive, non-transferable license to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Access and view the teaching videos for personal study, small group study, or church-wide discipleship.</li>
                <li>Download and print the provided graphic pages and discussion questions specifically for use in personal study, mentoring sessions, or small group environments.</li>
              </ul>
              <p className="mb-4">You may NOT:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sell, rent, or commercially distribute any of the materials from the platform.</li>
                <li>Alter, modify, or create derivative works from our videos or graphics without explicit written permission.</li>
                <li>Re-upload our videos to your own public channels (e.g., YouTube, Vimeo) or websites.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">4. User Conduct</h2>
              <p className="mb-4">Our platform is built on Christian values. We expect all users to interact with the platform with respect and grace. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the platform for any unlawful purpose.</li>
                <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the platform.</li>
                <li>Upload invalid data, viruses, worms, or other software agents through the platform.</li>
                <li>Use automated systems (such as bots or scrapers) to access the platform or extract content.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">5. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites or resources. We provide these links for your convenience only and are not responsible for the content, products, or services on or available from those websites or resources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">6. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account and your access to the Services at our sole discretion, without notice and liability, for any reason, including if you breach any of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">7. Disclaimer of Warranties</h2>
              <p>
                The Services are provided "AS IS" and "AS AVAILABLE." 8th Day Hope International Ministries makes no warranties, expressed or implied, regarding the platform's availability, reliability, or the accuracy of the content. Your use of the platform is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall 8th Day Hope International Ministries, its directors, employees, partners, or contributors be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of data, use, or goodwill) arising out of your access to or use of (or inability to access or use) the platform and its resources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest mb-4">9. Changes to These Terms</h2>
              <p>
                We may modify these Terms at any time. If we make material changes, we will notify you by updating the "Last Updated" date at the top of this page. Your continued use of the platform after any changes indicates your acceptance of the new Terms.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse;
