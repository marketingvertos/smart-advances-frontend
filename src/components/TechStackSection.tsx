import { motion } from "framer-motion";
import { Brain, Cog, BarChart3 } from "lucide-react";

const stacks = [
  {
    icon: Brain,
    title: "AI Stack",
    gradient: "from-[#0B2C5F] to-[#1E5EFF]",
    tools: [
      { name: "ChatGPT",  emoji: "🤖", color: "text-[#10a37f]",  bg: "bg-[#10a37f]/8" },
      { name: "Claude",   emoji: "✦",  color: "text-[#c17f3e]",  bg: "bg-[#c17f3e]/8" },
      { name: "Gemini",   emoji: "✦",  color: "text-[#1E5EFF]",  bg: "bg-[#1E5EFF]/8" },
    ],
  },
  {
    icon: Cog,
    title: "Automation Stack",
    gradient: "from-[#1E5EFF] to-[#60A5FA]",
    tools: [
      { name: "n8n",    emoji: "⚡", color: "text-[#ea4b71]",  bg: "bg-[#ea4b71]/8" },
      { name: "Make",   emoji: "◆",  color: "text-[#6d00cc]",  bg: "bg-[#6d00cc]/8" },
      { name: "Zapier", emoji: "⚡", color: "text-[#ff4a00]",  bg: "bg-[#ff4a00]/8" },
    ],
  },
  {
    icon: BarChart3,
    title: "Marketing Stack",
    gradient: "from-[#0B2C5F] to-[#1E5EFF]",
    tools: [
      { name: "HubSpot",    emoji: "🔶", color: "text-[#ff7a59]",  bg: "bg-[#ff7a59]/8" },
      { name: "Google Ads", emoji: "◆",  color: "text-[#4285F4]",  bg: "bg-[#4285F4]/8" },
      { name: "Meta Ads",   emoji: "◆",  color: "text-[#1877F2]",  bg: "bg-[#1877F2]/8" },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="py-16 md:py-24 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-[#1E5EFF]">Technology</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0F172A]">
            Our Tech Stack
          </h2>

          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            We leverage cutting-edge AI, automation and marketing platforms to
            scale growth and build powerful marketing ecosystems.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-7 text-center border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* ICON */}
              <div className={`bg-gradient-to-br ${stack.gradient} rounded-2xl p-4 w-14 h-14 mx-auto mb-4 flex items-center justify-center`}>
                <stack.icon className="h-7 w-7 text-white" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-5 text-[#0F172A]">
                {stack.title}
              </h3>

              {/* TOOL ROWS */}
              <div className="space-y-3">
                {stack.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-xl h-[52px] flex items-center justify-center px-5 hover:border-[#1E5EFF]/30 hover:bg-white hover:shadow-sm transition-all duration-200 group/tool"
                  >
                    <span className={`font-semibold text-base ${tool.color} group-hover/tool:scale-105 transition-transform`}>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;