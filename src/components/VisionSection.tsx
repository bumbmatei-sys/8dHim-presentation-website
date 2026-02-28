import React from "react";
import { motion } from "motion/react";
import { BookOpen, Compass, PlayCircle } from "lucide-react";

interface VisionCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const visionCards: VisionCard[] = [
  {
    id: "new-believers",
    title: "New Believers",
    description:
      "For new believers taking their first steps in faith, providing the foundation needed to grow and truly know God.",
    icon: BookOpen,
  },
  {
    id: "seasoned-christians",
    title: "Seasoned Christians",
    description:
      "For seasoned Christians seeking deeper maturity, guiding you to walk steadfastly in His ways and grow in faith.",
    icon: Compass,
  },
  {
    id: "engaging-resources",
    title: "Engaging Resources",
    description:
      "We provide high-quality teaching videos and engaging graphics to guide your daily journey into the Word.",
    icon: PlayCircle,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-[#DEE6E0] text-[#1D5450] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: The Graphic Carousel */}
        <div className="relative w-full h-full flex items-center justify-center lg:justify-start order-last lg:order-first">
          <motion.img
            src="https://github.com/bumbmatei-sys/8dHim-presentation-website/blob/main/Assets/graph-carousel.png?raw=true"
            alt="Biblical Truth Graphics"
            className="w-[90%] max-w-lg lg:max-w-[90%] rounded-3xl object-cover shadow-[0_20px_50px_rgba(36,134,128,0.25),0_0_0_1px_rgba(36,134,128,0.05)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>

        {/* Right Column: Content & Bento Cards */}
        <div className="flex flex-col space-y-10 order-first lg:order-last">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#1D5450] mb-6"
            >
              <span className="font-sans tracking-[-0.02em] block">Discipling Nations in</span>
              <span className="font-serif block mt-2">Biblical Truth.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-[#1D5450]/80 leading-relaxed"
            >
              Our vision is that all nations would be <span className="font-bold text-[#1D5450]">discipled in the Bible to truly know God</span> and walk in His ways.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {visionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#FFFFFF] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-6 cursor-pointer"
                >
                  <div className="w-14 h-14 shrink-0 bg-[#E6F5F2] rounded-full flex items-center justify-center text-[#248680]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D5450] mb-2">{card.title}</h3>
                    <p className="text-[#1D5450]/70 leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
