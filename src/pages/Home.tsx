import React from "react";
import { ArrowRight } from "lucide-react";
import { VisionSection } from "../components/VisionSection";
import { ChallengeSection } from "../components/ChallengeSection";
import { BelieversJourneySection } from "../components/BelieversJourneySection";
import { FadeIn } from "../components/FadeIn";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <img 
          src="https://github.com/bumbmatei-sys/8dHim-presentation-website/blob/main/Assets/8dhim-hero-img.png?raw=true"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold leading-[1.1] text-white mb-6 drop-shadow-md">
              <span className="font-sans tracking-[-0.02em] block">Discover Your New</span>
              <span className="font-serif text-mint block mt-2">Beginning in Christ.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A confident expectation based on God’s goodness. Join a global Christian discipleship platform designed to help you grow in faith and biblical truth.
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <button className="group relative inline-flex items-center justify-center bg-teal text-frost px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(130,228,208,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                ENROLL FOR FREE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Welcome / About Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-forest mb-6">
                <span className="font-sans block">The 8th Day:</span>
                <span className="font-serif block mt-2">A Confident Expectation.</span>
              </h2>
              <div className="space-y-6 text-lg text-forest/70 leading-relaxed">
                <p>
                  In the Bible, the number eight means a new beginning.
                </p>
                <p>
                  We have all wished for a fresh start. Through the cross of Jesus Christ, God offers us exactly that.
                </p>
                <p className="italic font-medium text-forest">
                  "Behold, I am making all things new." — Revelation 21:5
                </p>
                <p>
                  Biblical hope is not wishful thinking. It is a confident expectation rooted in God’s goodness. It is faith looking forward.
                </p>
                <p className="font-bold text-forest">
                  Welcome to 8TH DAY HOPE INTERNATIONAL MINISTRIES. Your space for spiritual renewal.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-black">
                <img 
                  src="https://github.com/bumbmatei-sys/8dHim-presentation-website/blob/main/Assets/8dhim-image.jpeg?raw=true"
                  alt="Spiritual Renewal"
                  className="absolute inset-0 w-full h-full object-cover scale-105 blur-[1px]"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <VisionSection />

      {/* The Challenge Section */}
      <ChallengeSection />

      {/* Who This Is For Section (Moved Above Solution) */}
      <BelieversJourneySection />

      {/* The Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-forest mb-8">
              <span className="font-sans tracking-[-0.02em] block">Transform Your Faith</span>
              <span className="font-serif block mt-2">Through Daily Growth.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 flex justify-center">
              <img 
                src="https://github.com/bumbmatei-sys/8dHim-presentation-website/blob/main/Assets/transform%20your%20faith.jpeg?raw=true"
                alt="Transform Your Faith"
                className="rounded-3xl shadow-[0_0_40px_rgba(130,228,208,0.5)] max-w-full h-auto object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;
