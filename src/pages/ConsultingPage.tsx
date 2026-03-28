import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, ChevronLeft, ChevronRight, CheckCircle,
  TrendingUp, Users, Award, ChevronDown, X,
  ShieldCheck, Star, Building2, Stethoscope,
  GraduationCap, ShoppingBag, Laptop, Home, Quote,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useModal } from "@/context/ModalContext";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const slides = [
  { icon: TrendingUp, title: "E-commerce Acceleration", desc: "Scaled revenue from ₹5L to ₹50L monthly through funnel optimization and performance ads.", metrics: "10x Growth",        tag: "E-commerce" },
  { icon: Users,      title: "SaaS Lead Machine",        desc: "Built a system generating 200+ qualified leads/month at ₹500 CPL.",                         metrics: "200+ Leads/Month", tag: "SaaS" },
  { icon: Award,      title: "B2B Authority Build",      desc: "Positioned founder as industry expert, generating premium inbound leads.",                  metrics: "50+ Leads/Quarter", tag: "B2B" },
];

const packages = [
  { name: "Starter", price: "₹50,000+",   popular: false, duration: "1 Month",  features: ["1 Marketing Channel", "Strategy Session", "Monthly Report", "Email Support", "Basic AI Setup"] },
  { name: "Growth",  price: "₹1,00,000+", popular: true,  duration: "3 Months", features: ["3 Marketing Channels", "Weekly Strategy Calls", "Live Dashboard Access", "AI Tool Integration", "Priority Support"] },
  { name: "Premium", price: "₹2,00,000+", popular: false, duration: "6 Months", features: ["All Marketing Channels", "Daily Availability", "Custom AI Workflows", "Full Team Training", "Dedicated Manager"] },
];

const included = [
  { num: "01", title: "Discovery",  items: ["Business deep-dive audit", "Market & competitor analysis", "Goal setting & KPIs"] },
  { num: "02", title: "Strategy",   items: ["Custom growth roadmap", "Channel selection & budget", "Funnel architecture"] },
  { num: "03", title: "Execution",  items: ["Campaign setup & launch", "Content & creative strategy", "AI tool integration"] },
  { num: "04", title: "Support",    items: ["Weekly progress calls", "Real-time reporting dashboard", "Ongoing optimization"] },
];

const faqs = [
  { q: "How is 1-on-1 consulting different from hiring an agency?",  a: "With 1-on-1 consulting, you get direct access to a senior strategist — not a junior account manager. Every decision is made with full context of your business." },
  { q: "How many hours per week do I get?",                          a: "Depending on the package, you get 2-10 hours per week of direct access via calls, WhatsApp, and async feedback." },
  { q: "Can I upgrade my package mid-way?",                         a: "Yes — you can upgrade at any time. We'll simply pro-rate the difference and adjust your scope accordingly." },
  { q: "Do you sign an NDA?",                                       a: "Yes, we sign a mutual NDA before starting any engagement to protect your business information." },
  { q: "What industries do you specialize in?",                     a: "E-commerce, SaaS, B2B services, education, real estate, and professional services. We've worked across 15+ industries." },
];

const testimonials = [
  { name: "Rahul Sharma",   role: "Founder, E-commerce Brand",    text: "The results were beyond what I imagined. We went from struggling at ₹5L/month to consistently hitting ₹50L. The AI systems Pawan built are still running beautifully.", rating: 5 },
  { name: "Sneha Agarwal",  role: "CEO, SaaS Startup",            text: "200+ qualified leads every single month. Our sales team is overwhelmed in the best possible way. Best marketing investment we've ever made.", rating: 5 },
  { name: "Rajesh Kumar",   role: "Director, B2B Consulting Firm", text: "Premium clients now approach us instead of us chasing them. The authority system Pawan built through content has completely transformed our business.", rating: 5 },
];

const industries = [
  { icon: ShoppingBag,    name: "E-commerce" },
  { icon: Laptop,         name: "SaaS & Tech" },
  { icon: Building2,      name: "B2B Services" },
  { icon: GraduationCap,  name: "Education" },
  { icon: Home,           name: "Real Estate" },
  { icon: Stethoscope,    name: "Healthcare" },
];

const comparison = [
  { feature: "Personalized Strategy",      diy: false, agency: false, consulting: true },
  { feature: "Direct Expert Access",       diy: false, agency: false, consulting: true },
  { feature: "AI-Powered Systems",         diy: false, agency: true,  consulting: true },
  { feature: "Full Transparency",          diy: true,  agency: false, consulting: true },
  { feature: "You Own All Assets",         diy: true,  agency: false, consulting: true },
  { feature: "Fast Execution (< 14 days)", diy: false, agency: false, consulting: true },
  { feature: "Cost Effective",             diy: true,  agency: false, consulting: true },
  { feature: "Ongoing Optimization",       diy: false, agency: true,  consulting: true },
];

const ConsultingPage = () => {
  const { setIsOpen } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1));

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 text-center bg-[#0B2C5F] text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeIn}>
            <span className="inline-block bg-[#1E5EFF]/25 text-[#93C5FD] border border-[#1E5EFF]/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              1-on-1 Strategic Consulting
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Done-With-You Business Growth Strategy
            </h1>
            <p className="text-white/75 mb-8 text-lg max-w-2xl mx-auto">
              Direct access to a strategist. No templates — only custom growth systems built for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsOpen(true)}
                className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition"
              >
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="#packages">
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent text-white border-white/30 hover:bg-white hover:text-[#0B2C5F] transition">
                  View Packages
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/15 max-w-xl mx-auto">
              {[{ v: "500+", l: "Businesses Helped" }, { v: "10+", l: "Years Experience" }, { v: "10x", l: "Avg. ROI" }].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold">{s.v}</div>
                  <div className="text-xs text-white/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS SLIDER ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Client Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Real Results</h2>
            <p className="text-[#6B7280]">Not promises — actual outcomes from real consulting engagements.</p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
                className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-8 md:p-10 text-center"
              >
                <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mx-auto mb-4 flex items-center justify-center">
                  {(() => { const Icon = slides[currentSlide].icon; return <Icon className="h-5 w-5 text-white" />; })()}
                </div>
                <span className="inline-block bg-[#1E5EFF]/10 text-[#1E5EFF] text-xs font-semibold rounded-full px-3 py-1 mb-4">
                  {slides[currentSlide].tag}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-[#0F172A]">{slides[currentSlide].title}</h3>
                <p className="text-[#6B7280] mb-6 leading-relaxed">{slides[currentSlide].desc}</p>
                <div className="bg-[#1E5EFF] text-white px-6 py-2 rounded-full font-bold inline-block text-sm">
                  {slides[currentSlide].metrics}
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:bg-[#1E5EFF] hover:text-white hover:border-[#1E5EFF] transition">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} className={`rounded-full transition-all duration-300 ${i === currentSlide ? "w-6 h-2.5 bg-[#1E5EFF]" : "w-2.5 h-2.5 bg-[#E2E8F0]"}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:bg-[#1E5EFF] hover:text-white hover:border-[#1E5EFF] transition">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">What Clients Say</h2>
            <p className="text-[#6B7280]">Real feedback from real clients who've experienced the results.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Quote className="h-8 w-8 text-[#1E5EFF]/20 mb-4" />
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
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

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">The Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">What's Included</h2>
            <p className="text-[#6B7280]">Every engagement follows this proven 4-step framework.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {included.map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }} className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg hover:bg-white transition group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1E5EFF] text-white w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:bg-[#0B2C5F] transition-colors duration-300">
                    {item.num}
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-lg">{item.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#6B7280]">
                  {item.items.map((li) => (
                    <li key={li} className="flex gap-2 items-center">
                      <CheckCircle className="text-[#1E5EFF] w-4 h-4 flex-shrink-0" />{li}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Industries</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Industries We Serve</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">We've built growth systems across 15+ industries.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} {...fadeIn} transition={{ delay: i * 0.08 }} className="bg-white border border-[#E2E8F0] rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-[#1E5EFF] rounded-xl p-3 w-11 h-11 mb-3 flex items-center justify-center group-hover:bg-[#0B2C5F] transition-colors duration-300">
                  <ind.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F172A] text-sm mb-1">{ind.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Comparison</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Why Consulting Wins</h2>
            <p className="text-[#6B7280]">See how 1-on-1 consulting compares to DIY or agency.</p>
          </motion.div>
          <motion.div {...fadeIn} className="rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 bg-[#0B2C5F] text-white text-sm font-semibold">
              <div className="p-4 col-span-1">Feature</div>
              <div className="p-4 text-center">DIY</div>
              <div className="p-4 text-center">Agency</div>
              <div className="p-4 text-center bg-[#1E5EFF]">Consulting ✦</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-4 text-sm border-t border-[#E2E8F0] ${i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]"}`}>
                <div className="p-4 font-medium text-[#0F172A] col-span-1">{row.feature}</div>
                <div className="p-4 flex items-center justify-center">
                  {row.diy ? <CheckCircle className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-400" />}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.agency ? <CheckCircle className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-400" />}
                </div>
                <div className="p-4 flex items-center justify-center bg-[#1E5EFF]/5">
                  {row.consulting ? <CheckCircle className="h-5 w-5 text-[#1E5EFF]" /> : <X className="h-5 w-5 text-red-400" />}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Consulting Packages</h2>
            <p className="text-[#6B7280]">Choose the engagement level that fits your growth goals.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }} className={`relative border rounded-2xl p-7 flex flex-col hover:shadow-xl transition-all duration-300 ${pkg.popular ? "border-[#1E5EFF] bg-[#1E5EFF] shadow-lg shadow-[#1E5EFF]/25" : "border-[#E2E8F0] bg-white"}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B2C5F] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <span className={`text-xs font-semibold rounded-full px-3 py-1 w-fit mb-4 ${pkg.popular ? "bg-white/20 text-white" : "bg-[#1E5EFF]/10 text-[#1E5EFF]"}`}>
                  {pkg.duration}
                </span>
                <h3 className={`text-xl font-bold mb-1 ${pkg.popular ? "text-white" : "text-[#0F172A]"}`}>{pkg.name}</h3>
                <p className={`text-3xl font-bold mb-6 ${pkg.popular ? "text-white" : "text-[#1E5EFF]"}`}>{pkg.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${pkg.popular ? "text-white" : "text-[#1E5EFF]"}`} />
                      <span className={pkg.popular ? "text-white/90" : "text-[#6B7280]"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => setIsOpen(true)}
                  className={`w-full rounded-full font-semibold transition ${pkg.popular ? "bg-white text-[#1E5EFF] hover:bg-[#F4F7FB]" : "bg-[#1E5EFF] text-white hover:bg-[#0B2C5F]"}`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fadeIn}>
            <div className="bg-[#1E5EFF]/5 border-2 border-[#1E5EFF]/20 rounded-3xl p-8 md:p-12">
              <div className="bg-[#1E5EFF] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm font-semibold text-[#1E5EFF]">Our Guarantee</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Zero-Risk Engagement</h2>
              <p className="text-[#6B7280] leading-relaxed mb-6 text-lg">
                If after the first 2 weeks you feel the consulting isn't delivering value, we'll refund your investment — no questions asked.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ v: "2 Weeks", l: "Free Trial Period" }, { v: "100%", l: "Money Back" }, { v: "0", l: "Questions Asked" }].map((item) => (
                  <div key={item.l} className="bg-white border border-[#E2E8F0] rounded-xl p-4">
                    <p className="text-2xl font-bold text-[#1E5EFF]">{item.v}</p>
                    <p className="text-xs text-[#6B7280] mt-1">{item.l}</p>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                onClick={() => setIsOpen(true)}
                className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition"
              >
                Start Risk-Free Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[#1E5EFF]">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Common Questions</h2>
            <p className="text-[#6B7280]">Everything you need to know about working together.</p>
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
      <section className="py-16 md:py-20 bg-[#0B2C5F] text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow?</h2>
            <p className="text-white/65 mb-8 text-lg">Let's build your growth system together. Book a free strategy call today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setIsOpen(true)} className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/30 transition">
                Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent text-white border-white/30 hover:bg-white hover:text-[#0B2C5F] transition font-semibold">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ConsultingPage;