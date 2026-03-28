import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Zap } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    metric: "300%",
    label: "Organic Traffic Growth",
    title: "AI SEO Strategy",
    desc: "Implemented AI-driven keyword research and programmatic SEO, resulting in 3x organic traffic growth within 6 months.",
  },
  {
    icon: TrendingDown,
    metric: "40%",
    label: "Ad Cost Reduction",
    title: "AI Ad Optimization",
    desc: "Used AI to optimize Meta and Google ad campaigns, reducing cost per acquisition by 40%.",
  },
  {
    icon: Zap,
    metric: "10x",
    label: "Lead Generation",
    title: "AI Automation",
    desc: "Built AI-powered lead generation funnels with automated nurturing, increasing qualified leads by 10x.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="casestudies" className="py-16 md:py-24 lg:py-28 bg-[#F4F7FB]">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-[#1E5EFF]">Results</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0F172A]">
            Our AI Client Case Studies
          </h2>

          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto">
            Real measurable results achieved through AI-powered marketing strategies.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              {/* ICON — uniform Royal Blue */}
              <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mx-auto mb-6 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                <c.icon className="h-5 w-5 text-white" />
              </div>

              {/* METRIC */}
              <p className="text-4xl md:text-5xl font-bold mb-1 text-[#1E5EFF]">
                {c.metric}
              </p>

              {/* LABEL */}
              <p className="text-sm text-[#6B7280] mb-4">{c.label}</p>

              {/* TITLE */}
              <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-2">
                {c.title}
              </h3>

              {/* DESC */}
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;