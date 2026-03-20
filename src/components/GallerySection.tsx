import { useState } from "react";
import { motion } from "framer-motion";

import {
  Camera,
  MapPin,
  Users,
  Award,
  Calendar,
  GraduationCap
} from "lucide-react";

type TabKey = "events" | "training" | "awards";

const tabs = [
  { key: "events", label: "Events", icon: Calendar },
  { key: "training", label: "Training", icon: GraduationCap },
  { key: "awards", label: "Awards", icon: Award }
];

const events = [
  {
    title: "AI Marketing Summit",
    location: "Delhi",
    year: "2024",
    desc: "Spoke about AI powered marketing systems and automation.",
    color: "bg-sky"
  },
  {
    title: "Digital Growth Conference",
    location: "Mumbai",
    year: "2023",
    desc: "Shared strategies for AI driven business growth.",
    color: "bg-periwinkle"
  },
  {
    title: "Startup AI Meetup",
    location: "Bangalore",
    year: "2023",
    desc: "Workshop on AI tools for startup founders.",
    color: "bg-accent"
  }
];

const trainings = [
  {
    title: "AI Marketing Bootcamp",
    students: "200+ students",
    duration: "3 Days",
    desc: "Hands-on AI marketing training program.",
    color: "bg-primary"
  },
  {
    title: "AI SEO Masterclass",
    students: "150+ students",
    duration: "2 Days",
    desc: "Deep dive into AI SEO and ranking automation.",
    color: "bg-periwinkle"
  },
  {
    title: "AI Ads Automation Workshop",
    students: "100+ students",
    duration: "1 Day",
    desc: "Automating Meta & Google ads using AI.",
    color: "bg-sky"
  }
];

const awards = [
  {
    title: "Top AI Marketing Consultant",
    org: "Marketing Association",
    year: "2024",
    desc: "Recognized for innovation in AI marketing.",
    color: "bg-accent"
  },
  {
    title: "Best Digital Growth Strategist",
    org: "Startup Summit",
    year: "2023",
    desc: "Award for helping startups scale with AI.",
    color: "bg-primary"
  }
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("events");

  const data =
    activeTab === "events"
      ? events
      : activeTab === "training"
      ? trainings
      : awards;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Gallery
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Moments & Milestones
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Highlights from events, trainings and industry recognitions.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabKey)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
              ${
                activeTab === tab.key
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-background border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((item: any, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border/50 overflow-hidden bg-background hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Image placeholder */}

              <div
                className={`${item.color} h-40 flex items-center justify-center`}
              >
                <Camera className="h-10 w-10 text-white/90" />
              </div>

              {/* Content */}

              <div className="p-6">

                <div className="text-xs text-muted-foreground flex items-center gap-2 mb-2">

                  {activeTab === "events" && (
                    <>
                      <MapPin className="h-3 w-3" />
                      {item.location} • {item.year}
                    </>
                  )}

                  {activeTab === "training" && (
                    <>
                      <Users className="h-3 w-3" />
                      {item.students} • {item.duration}
                    </>
                  )}

                  {activeTab === "awards" && (
                    <>
                      <Award className="h-3 w-3" />
                      {item.org} • {item.year}
                    </>
                  )}

                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;