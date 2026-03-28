import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, BookOpen, Brain, BarChart3,
  Palette, Globe, ChevronDown, Target,
  Users, Trophy, Clock, Star,
  CheckCircle, XCircle, Quote, Briefcase,
} from "lucide-react";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const faqs = [
  { q: "How is this training different from other institutes?", a: "Most institutes teach tools. We focus on strategy, ROI thinking, and real business execution — you'll work on live campaigns from day one." },
  { q: "Do you offer placement assistance?",                    a: "Yes — we help with resume building, portfolio creation, mock interviews, and direct industry connections." },
  { q: "Will I get live project experience?",                   a: "Yes, you will work on real campaigns, ad accounts, and business case studies with actual budgets." },
  { q: "What is the course duration?",                          a: "3–6 months depending on your pace. We offer both weekday and weekend batches." },
  { q: "Do you cover AI tools?",                                a: "Yes — ChatGPT, Claude, Gemini, Make, n8n, and full AI marketing automation workflows." },
  { q: "What are the prerequisites?",                           a: "Just a laptop, internet connection, and willingness to learn. No prior experience required." },
  { q: "Is there a certificate on completion?",                 a: "Yes — you receive an industry-recognized certificate upon completing all modules and submitting your final project." },
];

const modules = [
  { icon: BarChart3, title: "SEO Mastery",            desc: "AI-powered keyword research, on-page SEO, link building and ranking strategies." },
  { icon: Target,    title: "Performance Ads",         desc: "Meta & Google Ads optimization, AI bidding, and campaign scaling techniques." },
  { icon: Globe,     title: "Social Media Growth",     desc: "Content strategy, organic growth, and community building across platforms." },
  { icon: Palette,   title: "Conversion Optimization", desc: "Landing page design, A/B testing, and funnel optimization for maximum ROI." },
  { icon: Brain,     title: "AI Marketing Systems",    desc: "Build AI automation workflows, chatbots, and content generation pipelines." },
  { icon: BookOpen,  title: "Content Strategy",        desc: "Create high-converting content for blogs, social media, ads, and email campaigns." },
];

const outcomes = [
  { icon: Briefcase, title: "Job Ready",        desc: "Land your first digital marketing job or freelance client within 90 days of completion." },
  { icon: Brain,     title: "AI Proficient",    desc: "Master 10+ AI tools and build automation systems that save hours every week." },
  { icon: Trophy,    title: "Certified Expert", desc: "Earn an industry-recognized certification that stands out to employers and clients." },
  { icon: Users,     title: "Network Access",   desc: "Join our community of 500+ alumni, get referrals, and access exclusive job postings." },
];

const testimonials = [
  { name: "Anjali Verma",  role: "Digital Marketing Executive",    text: "Pawan's training completely changed my career. I went from zero knowledge to landing a ₹6 LPA job within 3 months of completing the course.", rating: 5 },
  { name: "Rohit Gupta",   role: "Freelance Marketing Consultant", text: "The AI tools and automation techniques I learned here help me charge 3x more for my freelance work. Best investment in my career.",            rating: 5 },
  { name: "Sneha Joshi",   role: "Social Media Manager",           text: "What I loved most was the hands-on approach. We worked on real client accounts, not just theory. I felt job-ready from day one.",                rating: 5 },
];

const TrainingPage = () => {
  const { setIsOpen } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 bg-[#0B2C5F] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-[#1E5EFF]/25 text-[#93C5FD] border border-[#1E5EFF]/30 px-4 py-1.5 rounded-full text-sm font-semibold">
            Enrollments Open 2025
          </span>
          <motion.h1 {...fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Become a <span className="text-[#60A5FA]">Digital Marketing Expert</span>
          </motion.h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
            Learn real-world digital marketing, AI tools, and business growth strategies — not just theory.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="#modules">
              <Button className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition">
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-full px-8 border border-white/30 bg-transparent text-white hover:bg-white hover:text-[#0B2C5F] transition"
            >
              Talk to Advisor
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/15 max-w-xl mx-auto">
            {[{ v: "500+", l: "Students Trained" }, { v: "90%", l: "Placement Rate" }, { v: "6", l: "Months Program" }].map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold">{s.v}</div>
                <div className="text-xs text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY COURSES FAIL ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">The Problem</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0F172A]">Why Most Courses Fail</h2>
            <p className="text-[#6B7280]">The gap between learning and real-world execution</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Only certificates, no real skills",  desc: "Certificates don't get jobs — practical skills do. Most courses stop at theory." },
              { title: "Too much theory, no execution",      desc: "You need to run real campaigns, not just watch videos and take notes." },
              { title: "Outdated marketing strategies",      desc: "AI is changing everything. Old tactics no longer work in 2025 and beyond." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="bg-[#1E5EFF] rounded-xl w-11 h-11 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <span className="text-white font-bold text-sm">0{i + 1}</span>
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section id="modules" className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Curriculum</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">What You'll Learn</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">6 comprehensive modules covering everything you need to become a modern digital marketing expert.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="bg-[#1E5EFF] p-3 w-11 h-11 rounded-xl mb-4 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <m.icon className="text-white h-5 w-5" />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{m.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">After Completion</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">What You'll Achieve</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">By the end of this program, here's exactly what you'll be able to do.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o, i) => (
              <motion.div key={o.title} {...fadeIn} transition={{ delay: i * 0.08 }} className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all group">
                <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <o.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{o.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Is This For You?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Who Should Enroll</h2>
            <p className="text-[#6B7280]">This program is designed for specific people. See if you're a fit.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white border border-[#E2E8F0] border-l-4 border-l-[#1E5EFF] rounded-2xl p-6">
              <h3 className="font-bold text-lg text-[#0F172A] mb-5 flex items-center gap-2">
                <div className="bg-[#1E5EFF]/10 rounded-full p-1.5"><CheckCircle className="text-[#1E5EFF] h-4 w-4" /></div>
                This Is For You If...
              </h3>
              <ul className="space-y-3">
                {["You want to start a career in digital marketing", "You're a business owner wanting to grow online", "You want to freelance and work from anywhere", "You're tired of outdated courses with no results", "You want to master AI tools for marketing"].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-[#6B7280]">
                    <CheckCircle className="text-[#1E5EFF] h-4 w-4 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white border border-[#E2E8F0] border-l-4 border-l-red-400 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-[#0F172A] mb-5 flex items-center gap-2">
                <div className="bg-red-50 rounded-full p-1.5"><XCircle className="text-red-500 h-4 w-4" /></div>
                Not For You If...
              </h3>
              <ul className="space-y-3">
                {["You're looking for a get-rich-quick solution", "You're not willing to put in the work", "You want theory only with no practice", "You're expecting results without consistency", "You're not open to learning new AI tools"].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-[#6B7280]">
                    <XCircle className="text-red-400 h-4 w-4 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Student Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">What Students Say</h2>
            <p className="text-[#6B7280]">Real feedback from students who've transformed their careers.</p>
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

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#6B7280]">Everything you need to know before enrolling.</p>
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

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-20 bg-[#0B2C5F] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Career?</h2>
            <p className="text-white/65 mb-8 text-lg">Join a program designed to make you industry-ready in 90 days.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsOpen(true)}
                className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition"
              >
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                onClick={() => setIsOpen(true)}
                className="rounded-full px-8 border border-white/30 bg-transparent text-white hover:bg-white hover:text-[#0B2C5F] transition font-semibold"
              >
                Talk to Advisor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default TrainingPage;