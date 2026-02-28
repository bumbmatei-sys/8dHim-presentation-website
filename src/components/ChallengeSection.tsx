import React from "react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

export const ChallengeSection: React.FC = () => {
  return (
    <section 
      id="challenge" 
      className="relative bg-[#1B4D43] text-white overflow-hidden py-16 md:py-20 lg:py-24"
    >
      {/* Premium Finishes */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top left, rgba(255,255,255,0.03) 0%, transparent 60%)"
        }}
      />

      <div className="relative z-10 w-full pl-[10%] pr-[12%] mx-auto">
        <div className="flex flex-col md:flex-row relative">
          
          {/* Vertical Rule (Desktop/Tablet only) */}
          <div className="hidden md:block absolute left-[38%] top-1/2 -translate-y-1/2 w-px h-[50%] bg-white/12" />

          {/* Headline Column (38%) */}
          <div className="w-full md:w-[38%] flex flex-col justify-start mb-12 md:mb-0 pt-2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className="text-[40px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.1] text-white"
            >
              <span className="font-sans tracking-[-0.02em] block">Bridging the Gap</span>
              <span className="font-sans tracking-[-0.02em] block">Between</span>
              <span className="font-serif block mt-2">Faith and Daily Life.</span>
            </motion.h2>
          </div>

          {/* Content Column (62%) */}
          <div className="w-full md:w-[62%] md:pl-[100px] flex flex-col justify-start">
            <div className="max-w-[480px] space-y-8 text-[18px] leading-[1.5] text-white/90">
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
              >
                Christianity isn't merely a religion; it is an active relationship with the Creator of the universe. Yet, many believers want to follow God but don't know what to do next.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease, delay: 0.3 }}
              >
                Humanity's separation from God means we cannot earn our way back through "good deeds." As Jesus said:
              </motion.p>

              <div className="relative pt-2 pb-2">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease, delay: 0.4 }}
                  className="absolute left-0 top-0 w-[2px] bg-white/25"
                />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease, delay: 0.45 }}
                  className="pl-[28px]"
                >
                  <p className="font-serif italic text-[21px] text-white leading-relaxed">
                    "That which is born of the flesh is flesh, and that which is born of the Spirit is spirit"
                  </p>
                  <p className="text-[13px] uppercase tracking-[0.1em] text-white/70 mt-3 font-sans">
                    (John 3:6)
                  </p>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease, delay: 0.6 }}
              >
                We must be born again.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease, delay: 0.75 }}
              >
                Our platform exists to help you navigate this spiritual rebirth, understand your identity in Christ, and live confidently as God’s child.
              </motion.p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
