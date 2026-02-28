import React from "react";
import { motion } from "motion/react";

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export const BelieversJourneySection: React.FC = () => {
  const cards = [
    {
      title: "Personal Study",
      desc: "Deepen your private walk with God.",
      image: "https://github.com/bumbmatei-sys/8dHim-presentation-website/blob/main/Assets/personal%20study.jpeg?raw=true"
    },
    {
      title: "Small Groups & Churches",
      desc: "Prompt meaningful discussion and community growth.",
      image: "https://github.com/bumbmatei-sys/8dHim-presentation-website/blob/main/Assets/study%20group.jpeg?raw=true"
    },
    {
      title: "Discipleship & Mentoring",
      desc: "Equip yourself to guide others in the faith.",
      image: "https://github.com/bumbmatei-sys/8dHim-presentation-website/blob/main/Assets/mentoring.png?raw=true"
    }
  ];

  return (
    <section id="who" className="py-24 md:py-32 bg-frost">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-forest mb-6">
              <span className="font-sans tracking-[-0.02em] block">Designed for Every</span>
              <span className="font-serif block mt-2">Believer's Journey.</span>
            </h2>
            <p className="text-xl text-forest/70 max-w-2xl mx-auto">
              Any believer can benefit from these teachings. Our visually engaging graphics and discussion-based videos bring key truths to life for:
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.1}>
              <div className="group relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Gradient Overlay (Bottom to Top) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
