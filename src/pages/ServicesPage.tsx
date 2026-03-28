import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Search, Megaphone, Users, Zap,
  BarChart3, CheckCircle, Star, Monitor, Shield,
  ChevronDown, Trophy, Clock, HeartHandshake,
  LineChart, Lightbulb, ShieldCheck,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const faqs = [
  { q: "How is your approach different from other agencies?",          a: "We don't use cookie-cutter strategies. Every client gets a custom AI-powered marketing system built specifically for their business goals, industry, and budget." },
  { q: "How long does it take to see results?",                        a: "Most clients start seeing measurable improvements within 30-60 days. Full results from SEO and content strategies typically emerge within 3-6 months." },
  { q: "Do you work with small businesses or only large companies?",   a: "We work with businesses of all sizes — from startups to established companies. What matters is your commitment to growth, not your current size." },
  { q: "What makes AI marketing better than traditional marketing?",   a: "AI enables precise targeting, predictive analytics, automated optimization, and personalized campaigns at scale — delivering better ROI with less manual effort." },
  { q: "Will I get regular updates and reports?",                      a: "Yes — you get weekly performance reports, monthly strategy reviews, and 24/7 access to live dashboards so you always know what's working." },
  { q: "What is the minimum contract duration?",                       a: "We recommend a minimum of 3 months to see meaningful results. However, we offer flexible engagement models based on your needs." },
];

const whyUs = [
  { icon: Trophy,         title: "Proven Track Record",   desc: "500+ businesses helped with measurable ROI. Our strategies are backed by real data, not guesswork." },
  { icon: Lightbulb,      title: "AI-First Approach",     desc: "We integrate cutting-edge AI tools into every strategy — from content creation to campaign optimization." },
  { icon: HeartHandshake, title: "Founder-Led Service",   desc: "You work directly with Pawan Tripathi — no junior account managers or outsourced work." },
  { icon: LineChart,      title: "Data-Driven Decisions", desc: "Every decision is backed by analytics. We track, measure, and optimize continuously for maximum results." },
  { icon: Clock,          title: "Fast Execution",        desc: "We move quickly. Most campaigns are live within 7-14 days of onboarding — no long wait times." },
  { icon: ShieldCheck,    title: "Full Transparency",     desc: "You own all assets, accounts, and data. We provide complete transparency in everything we do." },
];

const ServicesPage = () => {
  const { setIsOpen } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-20 md:pt-24 pb-16 bg-[#0B2C5F] text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">

            <span className="inline-block bg-[#1E5EFF]/25 text-[#93C5FD] border border-[#1E5EFF]/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              Digital Marketing Services in Indore
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Growth-Focused Digital Solutions for Businesses That Want Results
            </h1>

            <p className="text-base md:text-lg text-white/75 mb-8 max-w-2xl mx-auto">
              I help businesses grow through strategy-led digital marketing,
              performance campaigns, and intelligent automation — not random tactics.
            </p>

            <Button
              size="lg"
              onClick={() => setIsOpen(true)}
              className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition"
            >
              Request Strategy Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/15">
              {[
                { v: "94%",    l: "ROI Focus" },
                { v: "100+",   l: "Systems Built" },
                { v: "Direct", l: "Founder Led" },
                { v: "24/7",   l: "Live Reporting" },
              ].map((s, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{s.v}</div>
                  <div className="text-sm text-white/60 mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── IS THIS FOR YOU ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">

          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Good Fit?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A]">Is This For You?</h2>
            <p className="text-[#6B7280]">Marketing is an investment. Let's see if we're a good fit.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Ideal */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="border border-[#E2E8F0] border-l-4 border-l-[#1E5EFF] rounded-2xl p-6 hover:shadow-lg transition bg-white"
            >
              <h3 className="font-bold mb-5 flex items-center gap-2 text-[#0F172A] text-lg">
                <div className="bg-[#1E5EFF]/10 rounded-full p-1.5">
                  <CheckCircle className="text-[#1E5EFF] h-4 w-4" />
                </div>
                Ideal For
              </h3>
              <ul className="space-y-3">
                {["Want qualified leads consistently", "Ready to invest in sustainable growth", "Need full execution & strategy", "Value transparency & reporting", "Long-term business mindset"].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-[#6B7280]">
                    <Star className="text-[#1E5EFF] h-4 w-4 mt-0.5 flex-shrink-0 fill-[#1E5EFF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not Ideal */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="border border-[#E2E8F0] border-l-4 border-l-red-400 rounded-2xl p-6 hover:shadow-lg transition bg-white"
            >
              <h3 className="font-bold mb-5 flex items-center gap-2 text-[#0F172A] text-lg">
                <div className="bg-red-50 rounded-full p-1.5">
                  <Shield className="text-red-500 h-4 w-4" />
                </div>
                Not Ideal For
              </h3>
              <ul className="space-y-3">
                {["Looking for overnight shortcuts", "Want free trials with no commitment", "No long-term business plan", "Only focused on cutting costs", "No interest in strategy alignment"].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-[#6B7280]">
                    <Star className="text-red-400 h-4 w-4 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4">

          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Complete Digital Marketing Services
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              End-to-end digital marketing solutions designed to drive measurable results for your business.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Monitor,   title: "Website & CRO",  desc: "Conversion-optimized websites that turn visitors into customers." },
              { icon: Search,    title: "SEO & Content",   desc: "AI-powered SEO strategies that drive organic traffic growth." },
              { icon: Megaphone, title: "Paid Ads",        desc: "Meta & Google campaigns optimized for maximum ROAS." },
              { icon: Users,     title: "Lead Systems",    desc: "Automated funnels that generate and nurture qualified leads." },
              { icon: Zap,       title: "AI Automation",   desc: "Marketing workflows powered by cutting-edge AI tools." },
              { icon: BarChart3, title: "Performance",     desc: "Data-driven analytics and real-time reporting dashboards." },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6 border border-[#E2E8F0] rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mb-4 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">

          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Why Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Why Choose Pawan Tripathi?
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Not just another agency. Here's what makes our approach different and results consistent.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeIn}
                transition={{ delay: i * 0.08 }}
                className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all duration-300 group"
              >
                <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mb-4 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-5xl">

          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Our Process</h2>
            <p className="text-[#6B7280]">A simple 4-step process to get you started on your growth journey.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discovery Call",   desc: "We understand your business goals and current marketing setup." },
              { num: "02", title: "Strategy Plan",    desc: "Custom AI marketing roadmap designed for your business." },
              { num: "03", title: "Execution",        desc: "We build and launch your campaigns and AI systems." },
              { num: "04", title: "Optimize & Scale", desc: "Continuous improvement and scaling for maximum ROI." },
            ].map((step, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="bg-[#1E5EFF] text-white w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm mx-auto mb-4 group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  {step.num}
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6B7280]">Everything you need to know before getting started.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                className="border border-[#E2E8F0] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full flex justify-between items-center p-5 text-left font-medium transition-colors ${
                    openFaq === i
                      ? "bg-[#1E5EFF] text-white"
                      : "bg-white text-[#0F172A] hover:bg-[#F4F7FB]"
                  }`}
                >
                  <span className="pr-4 text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                    openFaq === i ? "rotate-180 text-white" : "text-[#6B7280]"
                  }`} />
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 text-sm text-[#6B7280] leading-relaxed border-t border-[#E2E8F0] bg-white">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[#0B2C5F] text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/65 mb-8 text-lg">
              Let's build an AI-powered marketing system that delivers real, measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsOpen(true)}
                className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsOpen(true)}
                className="rounded-full px-8 font-semibold bg-transparent text-white border-white/30 hover:bg-white hover:text-[#0B2C5F] transition"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;