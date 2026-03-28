import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Search, TrendingUp, Lightbulb,
  Bot, Calculator, GitBranch, CheckCircle,
  Zap, Clock, Users, X, Star, ChevronDown,
  Briefcase, GraduationCap, ShoppingBag, Building2, Quote,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useModal } from "@/context/ModalContext";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const tools = [
  { icon: Search,     title: "AI Website Audit",         desc: "Get instant AI-powered analysis of your SEO, speed, and marketing performance.",         badge: "Most Used", points: ["SEO Score", "Page Speed", "Mobile Check"] },
  { icon: TrendingUp, title: "AI Marketing Planner",     desc: "Generate a complete AI-powered marketing strategy tailored to your business.",           badge: "",          points: ["90-Day Roadmap", "Channel Strategy", "Budget Planning"] },
  { icon: Lightbulb,  title: "AI Content Generator",     desc: "Create high-converting blogs, captions, ad copy, and email sequences instantly.",        badge: "Popular",   points: ["Blog Posts", "Ad Copy", "Social Captions"] },
  { icon: Bot,        title: "AI Chatbot Consultant",    desc: "Ask any marketing question and get expert AI-powered answers in seconds.",               badge: "",          points: ["24/7 Available", "Marketing Advice", "Strategy Help"] },
  { icon: Calculator, title: "Marketing ROI Calculator", desc: "Calculate and predict your marketing ROI before spending a single rupee.",               badge: "",          points: ["ROI Prediction", "Budget Optimizer", "Channel Comparison"] },
  { icon: GitBranch,  title: "AI Funnel Planner",        desc: "Build optimized marketing funnels with AI-driven recommendations.",                      badge: "New",       points: ["Funnel Mapping", "Conversion Tips", "Lead Scoring"] },
];

const steps = [
  { num: "01", title: "Choose a Tool",      desc: "Pick the AI tool that matches your current marketing need." },
  { num: "02", title: "Enter Your Details", desc: "Provide basic information about your business or website." },
  { num: "03", title: "Get AI Insights",    desc: "Receive instant AI-powered analysis and recommendations." },
  { num: "04", title: "Implement & Grow",   desc: "Apply the insights to improve your marketing performance." },
];

const categories = [
  { icon: Search,     label: "SEO Tools",       count: "2 Tools" },
  { icon: TrendingUp, label: "Ads & Growth",    count: "2 Tools" },
  { icon: Lightbulb,  label: "Content & Copy",  count: "1 Tool" },
  { icon: Bot,        label: "AI Automation",   count: "1 Tool" },
];

const comparison = [
  { feature: "Time to get insights",    manual: "Hours/Days",    ai: "Seconds" },
  { feature: "Cost",                    manual: "₹5,000-50,000", ai: "Free" },
  { feature: "Data accuracy",           manual: "Human error",   ai: "AI Precision" },
  { feature: "Available 24/7",          manual: false,           ai: true },
  { feature: "Scalable",                manual: false,           ai: true },
  { feature: "Actionable suggestions",  manual: false,           ai: true },
];

const whoFor = [
  { icon: Briefcase,     title: "Business Owners",          desc: "Audit your website and find hidden growth opportunities without hiring an agency." },
  { icon: GraduationCap, title: "Marketing Students",       desc: "Learn AI marketing tools and build skills that employers are desperate for." },
  { icon: ShoppingBag,   title: "E-commerce Brands",        desc: "Optimize your product pages, ads, and funnels to drive more sales." },
  { icon: Building2,     title: "Agencies & Freelancers",   desc: "Use AI tools to deliver faster, better results for your clients." },
];

const testimonials = [
  { name: "Rahul Sharma",  role: "Business Owner",        text: "The AI Website Audit found issues I had no idea about. Fixed them and saw a 40% increase in organic traffic within 2 months.",   rating: 5 },
  { name: "Priya Mehta",   role: "Marketing Manager",     text: "The AI Content Generator saves me 10+ hours a week. The quality of content it produces is surprisingly good and on-brand.",        rating: 5 },
  { name: "Arjun Kapoor",  role: "Freelance Consultant",  text: "I use these tools for every new client audit. The ROI Calculator especially helps me justify marketing budgets to skeptical clients.", rating: 5 },
];

const faqs = [
  { q: "Are these tools really free?",                      a: "Yes — 100% free with no hidden charges, no credit card required, and no usage limits." },
  { q: "Do I need to create an account?",                   a: "No signup required. Just visit the page and start using any tool immediately." },
  { q: "How accurate are the AI results?",                  a: "Our tools use advanced AI models trained on millions of marketing data points. Results are highly actionable." },
  { q: "Can I use these tools for my clients?",             a: "Absolutely! Many agencies and freelancers use our tools to audit client websites and generate strategies." },
  { q: "Will these tools always be free?",                  a: "Our core tools will always remain free. We may add premium features in the future." },
];

const AIToolsPage = () => {
  const { setIsOpen } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="bg-[#0B2C5F] text-white pt-20 pb-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/25 border border-[#1E5EFF]/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="text-[#93C5FD]">AI Powered Marketing Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Free AI Marketing Tools</h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto mb-8">
              Leverage the power of AI to audit, plan, and optimize your marketing strategy — completely free.
            </p>
            <a href="#tools">
              <Button size="lg" className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition">
                Explore Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/15 max-w-lg mx-auto">
              {[{ v: "6", l: "AI Tools" }, { v: "Free", l: "No Signup" }, { v: "AI", l: "Powered" }].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold">{s.v}</div>
                  <div className="text-xs text-white/55 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="py-10 bg-[#1E5EFF]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[{ v: "10,000+", l: "Monthly Users" }, { v: "6", l: "Free AI Tools" }, { v: "50,000+", l: "Audits Done" }, { v: "4.9★", l: "User Rating" }].map((s, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }}>
                <div className="text-2xl md:text-3xl font-bold">{s.v}</div>
                <div className="text-xs text-white/70 mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Categories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0F172A]">Tool Categories</h2>
            <p className="text-[#6B7280]">Find the right AI tool for every marketing challenge.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <motion.div key={cat.label} {...fadeIn} transition={{ delay: i * 0.08 }} className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-5 text-center hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mx-auto mb-3 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <cat.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F172A] text-sm mb-1">{cat.label}</h3>
                <p className="text-xs text-[#6B7280]">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0F172A]">Get Results in 4 Simple Steps</h2>
            <p className="text-[#6B7280]">No signup required. Start using any tool instantly.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center group">
                <div className="bg-[#1E5EFF] text-white w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm mx-auto mb-4 group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  {step.num}
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ── */}
      <section id="tools" className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Our Tools</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A]">Our AI Tool Suite</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">6 powerful AI tools designed to improve every aspect of your digital marketing.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div key={tool.title} {...fadeIn} transition={{ delay: i * 0.08 }} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative flex flex-col">
                  {tool.badge && (
                    <span className="absolute top-4 right-4 bg-[#1E5EFF]/10 text-[#1E5EFF] text-xs font-bold rounded-full px-2.5 py-0.5">{tool.badge}</span>
                  )}
                  <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mb-4 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                    <Icon className="text-white h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">{tool.title}</h3>
                  <p className="text-sm text-[#6B7280] mb-5 leading-relaxed flex-1">{tool.desc}</p>
                  <div className="space-y-2 pt-4 border-t border-[#E2E8F0]">
                    {tool.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-xs text-[#6B7280]">
                        <CheckCircle className="h-3.5 w-3.5 text-[#1E5EFF] flex-shrink-0" />{point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="py-14 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Who Is This For?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0F172A]">Who Should Use These Tools?</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">Built for anyone who wants to grow their business with AI — no technical skills needed.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoFor.map((item, i) => (
              <motion.div key={item.title} {...fadeIn} transition={{ delay: i * 0.08 }} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center">
                <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Why AI?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0F172A]">Manual vs AI Marketing Tools</h2>
            <p className="text-[#6B7280]">See why thousands of marketers are switching to AI-powered tools.</p>
          </motion.div>
          <motion.div {...fadeIn} className="rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-[#0B2C5F] text-white text-sm font-semibold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center">Manual / Agency</div>
              <div className="p-4 text-center bg-[#1E5EFF]">AI Tools ✦</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 text-sm border-t border-[#E2E8F0] ${i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]"}`}>
                <div className="p-4 font-medium text-[#0F172A]">{row.feature}</div>
                <div className="p-4 flex items-center justify-center">
                  {typeof row.manual === "boolean"
                    ? (row.manual ? <CheckCircle className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-400" />)
                    : <span className="text-[#6B7280] text-xs font-medium">{row.manual}</span>}
                </div>
                <div className="p-4 flex items-center justify-center bg-[#1E5EFF]/5">
                  {typeof row.ai === "boolean"
                    ? (row.ai ? <CheckCircle className="h-5 w-5 text-[#1E5EFF]" /> : <X className="h-5 w-5 text-red-400" />)
                    : <span className="text-[#1E5EFF] text-xs font-bold">{row.ai}</span>}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0F172A]">What Users Say</h2>
            <p className="text-[#6B7280]">Real feedback from people who use our AI tools every day.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Quote className="h-8 w-8 text-[#1E5EFF]/20 mb-4" />
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />)}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-full bg-[#1E5EFF] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">{t.name}</p>
                    <p className="text-xs text-[#6B7280]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FREE ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Why Free?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0F172A]">Why Are These Tools Free?</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">We believe every business deserves access to AI-powered marketing insights.</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Democratize AI Marketing", desc: "AI marketing shouldn't be only for big companies. These tools level the playing field." },
              { icon: Zap,   title: "Instant Value",            desc: "Get actionable insights in seconds — no long onboarding, no credit card, no fees." },
              { icon: Clock, title: "Build Trust First",        desc: "We want you to experience the quality of our work before considering paid services." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 group text-center">
                <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0F172A]">Frequently Asked Questions</h2>
            <p className="text-[#6B7280]">Everything you need to know about our free AI tools.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }} className="border border-[#E2E8F0] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full flex justify-between items-center p-5 text-left font-medium transition-colors ${openFaq === i ? "bg-[#1E5EFF] text-white" : "bg-white text-[#0F172A] hover:bg-[#F4F7FB]"}`}
                >
                  <span className="pr-4 text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-white" : "text-[#6B7280]"}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="px-5 py-4 text-sm text-[#6B7280] leading-relaxed border-t border-[#E2E8F0] bg-white">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-[#0B2C5F] text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want Personalized AI Marketing Help?
            </h2>
            <p className="text-white/65 mb-8 text-lg">
              These free tools are just the beginning. Get a custom AI marketing strategy built for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsOpen(true)}
                className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition"
              >
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent text-white border-white/30 hover:bg-white hover:text-[#0B2C5F] transition font-semibold">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AIToolsPage;