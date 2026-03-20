import { motion } from "framer-motion";
import { Brain, Cog, BarChart3 } from "lucide-react";

const stacks = [
  {
    icon: Brain,
    title: "AI Stack",
    tools: [
      {
        name: "OpenAI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      },
      {
        name: "Claude AI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
      },
      {
        name: "Gemini",
        logo: "https://pawantripathi.in/wp-content/uploads/2026/01/10-150x150.png",
        logoHeight: "34px",
      },
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cog,
    title: "Automation Stack",
    tools: [
      {
        name: "N8N",
        logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/n8n-icon.svg",
        logoHeight: "28px",
      },
      {
        name: "Make",
        logo: "https://cdn.worldvectorlogo.com/logos/make-logo-rgb-3.svg",
      },
      {
        name: "Zapier",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg",
      },
    ],
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Marketing Stack",
    tools: [
      {
        name: "HubSpot",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
      },
      {
        name: "Google Ads",
        logo: "https://www.vectorlogo.zone/logos/google_ads/google_ads-ar21.svg",
        logoHeight: "32px",
      },
      {
        name: "Meta Ads",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      },
    ],
    gradient: "from-orange-500 to-pink-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ToolRow = ({
  tool,
}: {
  tool: { name: string; logo: string; logoHeight?: string };
}) => {
  return (
    <div className="bg-secondary rounded-xl py-3 px-6 flex items-center justify-center min-h-[56px] hover:bg-muted transition">
      <img
        src={tool.logo}
        alt={tool.name}
        style={{
          height: tool.logoHeight ?? "24px",
          width: "auto",
          maxWidth: "140px",
          objectFit: "contain",
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentNode as HTMLElement | null;
          if (parent && !parent.querySelector("span")) {
            const span = document.createElement("span");
            span.textContent = tool.name;
            span.style.cssText =
              "font-size:13px;font-weight:600;color:#64748b;";
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
};

const TechStackSection = () => {
  return (
    <section id="techstack" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-primary">
              Technology
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our Tech Stack
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We leverage cutting-edge AI, automation and marketing platforms
            to scale growth and build powerful marketing ecosystems.
          </p>
        </motion.div>

        {/* Stack Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >

          {stacks.map((stack) => (

            <motion.div
              key={stack.title}
              variants={card}
              className="group bg-background rounded-2xl p-8 text-center border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative"
            >

              {/* Icon */}

              <div
                className={`bg-gradient-to-r ${stack.gradient} rounded-2xl p-4 w-fit mx-auto mb-6`}
              >
                <stack.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {stack.title}
              </h3>

              {/* Tools */}

              <div className="space-y-3">
                {stack.tools.map((tool) => (
                  <ToolRow key={tool.name} tool={tool} />
                ))}
              </div>

              {/* Hover Glow */}

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-primary/5 to-transparent" />

            </motion.div>

          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;