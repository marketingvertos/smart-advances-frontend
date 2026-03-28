import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Search, Megaphone, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: TrendingUp,
    title: "AI Growth Consulting",
    items: ["AI marketing strategy", "Marketing automation", "Funnel optimization"],
    gradient: "from-[#0B2C5F] to-[#1E5EFF]",
  },
  {
    icon: Search,
    title: "AI SEO Consulting",
    items: ["AI keyword research", "Programmatic SEO", "AI content strategy"],
    gradient: "from-[#1E5EFF] to-[#60A5FA]",
  },
  {
    icon: Megaphone,
    title: "AI Ads Management",
    items: ["Meta AI ad optimization", "Google AI ads", "Predictive targeting"],
    gradient: "from-[#0B2C5F] to-[#1E5EFF]",
  },
  {
    icon: Users,
    title: "AI Lead Generation",
    items: ["Automated funnels", "CRM automation", "WhatsApp automation"],
    gradient: "from-[#1E5EFF] to-[#60A5FA]",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-[#1E5EFF]">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
            Advanced AI Marketing Services
          </h2>
          <p className="text-[#6B7280] text-lg">
            End-to-end AI-powered marketing services designed to accelerate business growth and automate your marketing ecosystem.
          </p>
        </motion.div>

        {/* CARDS — 2 cols on md, 4 on xl */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={card}
                className="group relative flex flex-col justify-between bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  {/* ICON */}
                  <div className={`bg-gradient-to-r ${service.gradient} rounded-xl p-3 w-11 h-11 mb-5 flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold mb-4 text-[#0F172A]">{service.title}</h3>

                  <ul className="space-y-2 mb-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E5EFF] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1E5EFF] opacity-0 group-hover:opacity-100 transition"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-[#1E5EFF]/5 to-transparent" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;