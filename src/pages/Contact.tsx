import React from "react";
import { motion } from "motion/react";
import { FadeIn } from "../components/FadeIn";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-forest pt-20">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest">Contact Us</h1>
            <p className="text-lg text-forest/70">
              Have questions or need support? We're here to help.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form className="space-y-6 bg-frost/30 p-8 rounded-3xl border border-forest/5 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-forest/80">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-forest/10 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-forest/80">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-forest/10 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-forest/80">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-xl bg-white border border-forest/10 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-forest/80">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-white border border-forest/10 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="button"
              className="w-full bg-teal text-white font-semibold py-4 rounded-xl hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
