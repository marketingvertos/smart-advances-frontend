import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Target, FileText, BarChart3, Route, ArrowRight, Briefcase } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const solutions = [
  { icon: Brain,     title: "AI Marketing Automation",   desc: "Automate your entire marketing funnel using AI-driven workflows that continuously learn and improve performance." },
  { icon: Target,    title: "Predictive Targeting",       desc: "Use AI to identify high-intent users and target them at the perfect moment for maximum conversions." },
  { icon: FileText,  title: "AI Content Systems",         desc: "Generate high-converting content for ads, blogs, and social media at scale with AI tools." },
  { icon: BarChart3, title: "AI Ad Optimization",         desc: "Improve ROI with AI-powered bidding, targeting, and campaign optimization strategies." },
  { icon: Route,     title: "Customer Journey Mapping",   desc: "Track and optimize every touchpoint using AI insights to improve user experience and conversions." },
  { icon: Briefcase, title: "AI Business Consulting",     desc: "Get expert guidance on implementing AI systems into your marketing and business processes." },
];

const AIMarketingSolutions = () => {
  const { setIsOpen } = useModal();

  return (
    <section className="py-16 md:py-24 bg-[#F4F7FB]">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-[#1E5EFF]">AI-Powered Growth Systems</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            AI Digital Marketing Solutions
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-base md:text-lg">
            Scale your business faster with AI-driven marketing strategies designed for automation, performance, and predictable growth.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mb-4 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="bg-[#1E5EFF] text-white hover:bg-[#0B2C5F] rounded-full px-8 font-semibold shadow-lg shadow-[#1E5EFF]/25 transition-all"
          >
            Get AI Marketing Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default AIMarketingSolutions;