import { motion } from "framer-motion";
import { Bot, Search, Calculator, GitBranch, Video, Sparkles } from "lucide-react";

const features = [
  { icon: Bot,        title: "AI Chatbot Consultant",     desc: "24/7 AI-powered chatbot that answers marketing questions and qualifies leads." },
  { icon: Search,     title: "AI Marketing Audit",        desc: "Instant AI analysis of your website, SEO, and marketing performance." },
  { icon: Calculator, title: "Marketing ROI Calculator",  desc: "Calculate expected ROI from AI marketing investments with precision." },
  { icon: GitBranch,  title: "AI Funnel Planner",         desc: "Design optimized marketing funnels using AI recommendations." },
  { icon: Video,      title: "Live Webinar System",       desc: "Join live AI marketing webinars and workshops with industry experts." },
  { icon: Sparkles,   title: "AI Content Generator",      desc: "Generate high-converting marketing copy, ads, and social posts instantly with AI." },
];

const AdvancedFeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-[#1E5EFF]">Platform Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0F172A]">
            Advanced Website Features
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto">
            Powerful AI-powered features designed to enhance your marketing experience and accelerate business growth.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-7 border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              {/* ICON — w-11 h-11, h-5 w-5 */}
              <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#0F172A]">{f.title}</h3>
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;