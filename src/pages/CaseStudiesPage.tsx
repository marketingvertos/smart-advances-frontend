import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, TrendingUp, Users, Zap, BarChart3,
  Star, Quote, ShoppingBag, Laptop, Building2,
  GraduationCap, Home, Stethoscope, CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useModal } from "@/context/ModalContext";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const caseStudies = [
  { icon: TrendingUp,    title: "E-commerce Growth",       result: "10x Revenue",        tag: "E-commerce",  timeline: "8 Months", desc: "Scaled from ₹5L to ₹50L/month using AI-powered performance ads and funnel optimization.",             highlights: ["Meta Ads + Google Ads", "AI Funnel Optimization", "300% ROAS improvement"] },
  { icon: Users,         title: "SaaS Lead Generation",    result: "200+ Leads/Month",   tag: "SaaS",        timeline: "3 Months", desc: "Built a predictable lead system with ₹500 CPL using AI automation and content marketing.",            highlights: ["AI Lead Scoring", "Email Automation", "₹500 avg CPL"] },
  { icon: Zap,           title: "B2B Authority Building",  result: "50+ Leads/Quarter",  tag: "B2B",         timeline: "6 Months", desc: "Positioned founder as industry expert through AI content strategy and LinkedIn growth.",             highlights: ["LinkedIn Growth", "AI Content System", "3x inbound leads"] },
  { icon: BarChart3,     title: "Real Estate Growth",      result: "4x Inquiries",       tag: "Real Estate", timeline: "4 Months", desc: "Generated 4x more property inquiries using targeted Meta ads and AI-powered landing pages.",          highlights: ["Meta Lead Ads", "AI Landing Pages", "Cost per inquiry ↓60%"] },
  { icon: GraduationCap, title: "EdTech Enrollment Drive", result: "500+ Enrollments",   tag: "Education",   timeline: "2 Months", desc: "Drove 500+ course enrollments through AI content marketing and targeted Google campaigns.",           highlights: ["Google Search Ads", "AI Video Scripts", "40% conversion rate"] },
  { icon: ShoppingBag,   title: "D2C Brand Launch",        result: "₹20L in 30 Days",    tag: "D2C",         timeline: "1 Month",  desc: "Launched new D2C brand and hit ₹20L revenue in first 30 days using AI-powered strategy.",             highlights: ["Influencer Marketing", "Performance Ads", "AI Creative Testing"] },
];

const stats = [
  { value: "10x",  label: "Revenue Growth",  sub: "Average across e-commerce clients" },
  { value: "200+", label: "Leads/Month",      sub: "For SaaS and B2B clients" },
  { value: "₹500", label: "Avg CPL",          sub: "Cost per qualified lead" },
  { value: "3x",   label: "ROAS",             sub: "Return on ad spend" },
];

const steps = [
  { num: "01", title: "Market Research",         desc: "Deep dive into market, competitors, and audience insights." },
  { num: "02", title: "Funnel Strategy",          desc: "Design a conversion-optimized funnel architecture." },
  { num: "03", title: "Campaign Execution",       desc: "Launch AI-optimized campaigns across all channels." },
  { num: "04", title: "Continuous Optimization",  desc: "Data-driven iteration for maximum ROI." },
];

const testimonials = [
  { name: "Vikram Malhotra", role: "Founder, E-commerce Brand",    text: "The results were beyond what I imagined. We went from ₹5L/month to consistently hitting ₹50L. The AI systems Pawan built are still running beautifully.", rating: 5 },
  { name: "Sneha Agarwal",   role: "CEO, SaaS Startup",            text: "200+ qualified leads every single month. Our sales team is overwhelmed in the best possible way. Best marketing investment we've ever made.",               rating: 5 },
  { name: "Rajesh Kumar",    role: "Director, B2B Consulting Firm", text: "Premium clients now approach us. The authority system Pawan built through content has completely transformed our business.",                                 rating: 5 },
];

const industries = [
  { icon: ShoppingBag,   name: "E-commerce" },
  { icon: Laptop,        name: "SaaS & Tech" },
  { icon: Building2,     name: "B2B Services" },
  { icon: GraduationCap, name: "Education" },
  { icon: Home,          name: "Real Estate" },
  { icon: Stethoscope,   name: "Healthcare" },
];

const CaseStudiesPage = () => {
  const { setIsOpen } = useModal();

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="bg-[#0B2C5F] text-white pt-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/25 border border-[#1E5EFF]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-semibold text-[#93C5FD]">Real Results. Real Businesses.</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Case Studies That Prove Growth
            </h1>
            <p className="text-white/65 max-w-2xl mx-auto text-lg mb-10">
              Not theory. Not promises. Just real campaigns, real data, and real business growth.
            </p>
            <a href="#cases">
              <Button size="lg" className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition">
                View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/15 max-w-lg mx-auto">
              {[{ v: "500+", l: "Businesses Helped" }, { v: "10x", l: "Avg Revenue Growth" }, { v: "15+", l: "Industries Served" }].map((s, i) => (
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
            {stats.map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }}>
                <div className="text-2xl md:text-3xl font-bold">{item.value}</div>
                <div className="text-xs text-white/70 mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="cases" className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Featured Case Studies</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">Real campaigns with measurable outcomes across industries.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#1E5EFF]/10 text-[#1E5EFF] text-xs font-semibold rounded-full px-3 py-1">{item.tag}</span>
                    <span className="bg-[#F4F7FB] text-[#6B7280] text-xs rounded-full px-3 py-1">{item.timeline}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1 text-[#0F172A]">{item.title}</h3>
                <p className="text-[#1E5EFF] font-bold text-2xl mb-3">{item.result}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-5 flex-1">{item.desc}</p>
                <div className="space-y-1.5 pt-4 border-t border-[#E2E8F0]">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-[#6B7280]">
                      <CheckCircle className="h-3.5 w-3.5 text-[#1E5EFF] flex-shrink-0" />{h}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div {...fadeIn} className="mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">By The Numbers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Results Across Clients</h2>
            <p className="text-[#6B7280]">Aggregate numbers from 500+ client engagements.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                <h3 className="text-3xl font-bold text-[#1E5EFF] mb-1">{item.value}</h3>
                <p className="text-sm font-semibold text-[#0F172A] mb-1">{item.label}</p>
                <p className="text-xs text-[#6B7280]">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div {...fadeIn} className="mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">How These Results Were Achieved</h2>
            <p className="text-[#6B7280]">Every successful campaign follows this proven 4-step framework.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="bg-[#1E5EFF] text-white w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm mx-auto mb-4 group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  {step.num}
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Client Voices</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">What Clients Say</h2>
            <p className="text-[#6B7280]">Real feedback from businesses that achieved these results.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

      {/* ── INDUSTRIES ── */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Industries</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Industries We've Worked In</h2>
            <p className="text-[#6B7280]">We've delivered results across 15+ industries.</p>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} {...fadeIn} transition={{ delay: i * 0.06 }} className="bg-white border border-[#E2E8F0] rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="bg-[#1E5EFF] rounded-xl p-2.5 w-10 h-10 mx-auto mb-2.5 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <ind.icon className="h-4 w-4 text-white" />
                </div>
                <p className="text-xs font-semibold text-[#0F172A]">{ind.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0B2C5F] text-white py-16 md:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Similar Results?</h2>
            <p className="text-white/65 mb-8 text-lg">Let's build a growth system tailored to your business and industry.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsOpen(true)}
                className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition"
              >
                Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent text-white border-white/30 hover:bg-white hover:text-[#0B2C5F] transition font-semibold">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudiesPage;