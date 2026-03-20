import { motion } from "framer-motion";
import { Bot, Search, Calculator, GitBranch, Video, Sparkles } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chatbot Consultant",
    desc: "24/7 AI-powered chatbot that answers marketing questions and qualifies leads.",
    color: "bg-periwinkle",
  },
  {
    icon: Search,
    title: "AI Marketing Audit",
    desc: "Instant AI analysis of your website, SEO, and marketing performance.",
    color: "bg-sky",
  },
  {
    icon: Calculator,
    title: "Marketing ROI Calculator",
    desc: "Calculate expected ROI from AI marketing investments with precision.",
    color: "bg-accent",
  },
  {
    icon: GitBranch,
    title: "AI Funnel Planner",
    desc: "Design optimized marketing funnels using AI recommendations.",
    color: "bg-primary",
  },
  {
    icon: Video,
    title: "Live Webinar System",
    desc: "Join live AI marketing webinars and workshops with industry experts.",
    color: "bg-periwinkle",
  },
  {
    icon: Sparkles,
    title: "AI Content Generator",
    desc: "Generate high-converting marketing copy, ads, and social posts instantly with AI.",
    color: "bg-sky",
  },
];

const AdvancedFeaturesSection = () => (
  <section className="py-16 md:py-24 lg:py-28 bg-background">

    <div className="container mx-auto px-4 max-w-7xl">

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
          <span className="text-sm font-semibold text-primary">
            Platform Features
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Advanced Website Features
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Powerful AI-powered features designed to enhance your marketing
          experience and accelerate business growth.
        </p>
      </motion.div>

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl p-6 md:p-7 border border-border/50 
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
            text-center group"
          >

            {/* ICON */}
            <div
              className={`${f.color} rounded-2xl p-4 w-fit mx-auto mb-4 
              group-hover:scale-110 transition`}
            >
              <f.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
            </div>

            {/* TITLE */}
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
              {f.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {f.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </div>

  </section>
);

export default AdvancedFeaturesSection;