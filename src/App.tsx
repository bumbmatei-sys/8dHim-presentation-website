import React from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Users, Heart, Compass, PlayCircle } from "lucide-react";

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-frost text-forest selection:bg-mint selection:text-forest overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-frost/70 backdrop-blur-md border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-forest">8Dhim</div>
          <div className="hidden md:flex items-center gap-8 font-medium text-forest/80">
            <a href="#vision" className="hover:text-teal transition-colors">Vision</a>
            <a href="#challenge" className="hover:text-teal transition-colors">Challenge</a>
            <a href="#solution" className="hover:text-teal transition-colors">Solution</a>
            <a href="#who" className="hover:text-teal transition-colors">Who It's For</a>
          </div>
          <button className="bg-teal text-frost px-6 py-2.5 rounded-full font-medium hover:bg-teal/90 hover:shadow-[0_0_20px_rgba(130,228,208,0.4)] transition-all duration-300">
            Enroll Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frost via-frost to-mint/20 opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-forest mb-6 leading-tight">
              Discover Your New <br/><span className="text-teal">Beginning in Christ.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-xl md:text-2xl text-forest/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              A confident expectation based on God’s goodness. Join a global Christian discipleship platform designed to help you grow in faith and biblical truth.
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <button className="group relative inline-flex items-center justify-center bg-teal text-frost px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(130,228,208,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                ENROLL IN THE PLATFORM FOR FREE
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
                The 8th Day: <br/>A Confident Expectation.
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
                <p>
                  Welcome to 8dHim. Your space for spiritual renewal.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-frost">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-mint/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-teal shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section id="vision" className="py-24 md:py-32 bg-frost">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-forest mb-6">
                Discipling Nations in Biblical Truth.
              </h2>
              <p className="text-xl text-forest/70 leading-relaxed">
                Our vision is that all nations would be discipled in the Bible to truly know God and walk in His ways.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 rounded-3xl h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-mint/20 rounded-2xl flex items-center justify-center text-teal mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-4">New Believers</h3>
                <p className="text-forest/70">For new believers taking their first steps in faith, providing the foundation needed to grow and truly know God.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-3xl h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-mint/20 rounded-2xl flex items-center justify-center text-teal mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-4">Seasoned Christians</h3>
                <p className="text-forest/70">For seasoned Christians seeking deeper maturity, guiding you to walk steadfastly in His ways and grow in faith.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-10 rounded-3xl h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-mint/20 rounded-2xl flex items-center justify-center text-teal mb-6">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-4">Engaging Resources</h3>
                <p className="text-forest/70">We provide high-quality teaching videos and engaging graphics to guide your daily journey into the Word.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-forest text-frost">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Bridging the Gap Between Faith and Daily Life.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-lg text-frost/80 leading-relaxed">
                <p>
                  Christianity isn't merely a religion; it is an active relationship with the Creator of the universe. Yet, many believers want to follow God but don't know what to do next.
                </p>
                <p>
                  Humanity's separation from God means we cannot earn our way back through "good deeds." As Jesus said:
                </p>
                <p className="py-3 leading-loose">
                  <span className="bg-teal text-frost px-3 py-1.5 rounded-md italic font-medium shadow-sm">
                    "That which is born of the flesh is flesh, and that which is born of the Spirit is spirit"
                  </span>
                  <span className="ml-2 font-medium whitespace-nowrap">(John 3:6)</span>
                </p>
                <p>
                  We must be born again.
                </p>
                <p>
                  Our platform exists to help you navigate this spiritual rebirth, understand your identity in Christ, and live confidently as God’s child.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-forest mb-8">
              Transform Your Faith Through Daily Growth.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-forest/70 leading-relaxed">
              <p>
                Faith requires nourishment. Romans 10:17 reminds us:
              </p>
              <p className="italic font-medium text-forest text-xl py-2">
                "So faith comes from hearing, and hearing through the word of Christ."
              </p>
              <p>
                As you read the Bible, the Holy Spirit provides insight, teaching you and strengthening your faith. Our platform jumpstarts this process with curated teaching videos.
              </p>
              <p>
                If you are new, start with the Gospel of John and the New Testament. Let our resources guide you as you build a lifelong habit of daily Scripture reading.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section id="who" className="py-24 md:py-32 bg-frost">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-forest mb-6">
                Designed for Every Believer's Journey.
              </h2>
              <p className="text-xl text-forest/70 max-w-2xl mx-auto">
                Any believer can benefit from these teachings. Our visually engaging graphics and discussion-based videos bring key truths to life for:
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Personal Study",
                desc: "Deepen your private walk with God."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Small Groups & Churches",
                desc: "Prompt meaningful discussion and community growth."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Discipleship & Mentoring",
                desc: "Equip yourself to guide others in the faith."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1}>
                <div className="group bg-white p-10 rounded-3xl h-full hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(130,228,208,0.2)] transition-all duration-300 border border-transparent hover:border-mint/30">
                  <div className="w-16 h-16 bg-frost rounded-2xl flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-forest mb-4">{item.title}</h3>
                  <p className="text-forest/70 text-lg">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-frost py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold tracking-tight">8Dhim</div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-frost/80">Ready for your new beginning?</span>
            <button className="bg-teal text-white px-6 py-2 rounded-full font-medium hover:bg-mint hover:text-forest transition-colors duration-300">
              Enroll for Free
            </button>
          </div>
          <div className="text-frost/50 text-sm">
            &copy; 2026 8Dhim. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
