import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, MapPin, Users, Award, Calendar, GraduationCap, Mic, Trophy } from "lucide-react";

type TabKey = "events" | "training" | "awards";

const tabs = [
  { key: "events",   label: "Events",   icon: Calendar },
  { key: "training", label: "Training", icon: GraduationCap },
  { key: "awards",   label: "Awards",   icon: Award },
];

const events = [
  { title: "AI Marketing Summit",       location: "Delhi",     year: "2024", desc: "Spoke about AI powered marketing systems and automation.", gradient: "from-[#0B2C5F] to-[#1E5EFF]", cardIcon: Mic },
  { title: "Digital Growth Conference", location: "Mumbai",    year: "2023", desc: "Shared strategies for AI driven business growth.",          gradient: "from-[#1E5EFF] to-[#60A5FA]", cardIcon: Mic },
  { title: "Startup AI Meetup",         location: "Bangalore", year: "2023", desc: "Workshop on AI tools for startup founders.",                gradient: "from-[#0B2C5F] to-[#1E5EFF]", cardIcon: Mic },
];

const trainings = [
  { title: "AI Marketing Bootcamp",       students: "200+ students", duration: "3 Days", desc: "Hands-on AI marketing training program.",       gradient: "from-[#1E5EFF] to-[#60A5FA]", cardIcon: Users },
  { title: "AI SEO Masterclass",          students: "150+ students", duration: "2 Days", desc: "Deep dive into AI SEO and ranking automation.",  gradient: "from-[#0B2C5F] to-[#1E5EFF]", cardIcon: Users },
  { title: "AI Ads Automation Workshop",  students: "100+ students", duration: "1 Day",  desc: "Automating Meta & Google ads using AI.",        gradient: "from-[#1E5EFF] to-[#60A5FA]", cardIcon: Users },
];

const awards = [
  { title: "Top AI Marketing Consultant",    org: "Marketing Association", year: "2024", desc: "Recognized for innovation in AI marketing.",  gradient: "from-[#0B2C5F] to-[#1E5EFF]", cardIcon: Trophy },
  { title: "Best Digital Growth Strategist", org: "Startup Summit",        year: "2023", desc: "Award for helping startups scale with AI.",   gradient: "from-[#1E5EFF] to-[#60A5FA]", cardIcon: Trophy },
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("events");

  const data = activeTab === "events" ? events : activeTab === "training" ? trainings : awards;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
            <Camera className="h-4 w-4 text-[#1E5EFF]" />
            <span className="text-sm font-semibold text-[#1E5EFF]">Gallery</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0F172A]">
            Moments & Milestones
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Highlights from events, trainings and industry recognitions.
          </p>
        </motion.div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabKey)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === tab.key
                  ? "bg-[#1E5EFF] text-white border-[#1E5EFF] shadow-md shadow-[#1E5EFF]/25"
                  : "bg-white border-[#E2E8F0] text-[#6B7280] hover:border-[#1E5EFF]/40 hover:text-[#1E5EFF]"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item: any, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-[#E2E8F0] overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* GRADIENT IMAGE AREA */}
              <div className={`bg-gradient-to-br ${item.gradient} h-40 flex items-center justify-center relative overflow-hidden`}>
                {/* BG pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-full border-2 border-white" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border-2 border-white" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-white" />
                </div>
                <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <item.cardIcon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="text-xs text-[#6B7280] flex items-center gap-2 mb-2">
                  {activeTab === "events" && (
                    <><MapPin className="h-3 w-3 text-[#1E5EFF]" />{item.location} • {item.year}</>
                  )}
                  {activeTab === "training" && (
                    <><Users className="h-3 w-3 text-[#1E5EFF]" />{item.students} • {item.duration}</>
                  )}
                  {activeTab === "awards" && (
                    <><Award className="h-3 w-3 text-[#1E5EFF]" />{item.org} • {item.year}</>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0F172A] group-hover:text-[#1E5EFF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;