import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Megaphone, Users, Zap, BarChart3, CheckCircle, Star, Monitor, Mail, Shield } from "lucide-react";

const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const ServicesPage = () => (
  <div className="min-h-screen bg-background">


    {/* 1. Hero */}
    <section className="pt-52 pb-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent/20 text-accent rounded-full px-4 py-1.5 text-sm font-semibold mb-6">Digital Marketing Services in Indore</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Growth-Focused Digital Solutions for Businesses That Want Results</h1>
          <p className="text-lg opacity-90 mb-8">I help businesses grow through strategy-led digital marketing, performance campaigns, and intelligent automation — not random tactics.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground rounded-full px-8 font-semibold">Request Strategy Consultation <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
          {[
            { v: "94%", l: "ROI Focus" }, { v: "100+", l: "Systems Built" }, { v: "Direct", l: "Founder Led" }, { v: "24/7", l: "Live Reporting" },
          ].map((s, i) => (
            <motion.div key={s.l} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-2xl font-bold">{s.v}</div>
              <div className="text-sm opacity-80">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 2. Is This For You */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Is This For You?</h2>
          <p className="text-muted-foreground">Marketing is an investment. Let's see if we're a good fit.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="bg-background rounded-2xl p-8 border border-border/50">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-accent" /> Ideal For</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Want qualified leads, not just vanity traffic", "Ready to invest in structured digital growth", "Need end-to-end execution, not isolated tasks", "Value transparency, reporting, and ROI accountability", "Seek long-term brand value over quick hacks"].map(i => (
                <li key={i} className="flex items-start gap-2"><Star className="h-3 w-3 text-accent mt-1 shrink-0" />{i}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-background rounded-2xl p-8 border border-border/50">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Shield className="h-5 w-5 text-destructive" /> Not Ideal For</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Looking for shortcuts or 'viral' hacks", "Looking for free audits or trial periods", "Not ready to commit to a 3-month cycle", "Budget-only mindset without growth goals", "Hands-off without strategic alignment"].map(i => (
                <li key={i} className="flex items-start gap-2"><Star className="h-3 w-3 text-destructive mt-1 shrink-0" />{i}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* 3. Complete Services Grid */}
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Digital Marketing Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Each service is delivered with a business-first mindset — standalone or as part of a comprehensive growth plan.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Monitor, title: "Website & CRO", items: ["High-converting website architecture", "Dedicated landing pages for lead gen", "Core Web Vitals optimization", "Mobile-first responsive builds"], color: "bg-periwinkle" },
            { icon: Search, title: "SEO & Content Marketing", items: ["Technical & On-page SEO audits", "Local SEO & national keyword strategy", "Content cluster planning", "Backlink profile monitoring"], color: "bg-sky" },
            { icon: Megaphone, title: "Google & Meta Paid Ads", items: ["Google Search, Display & YouTube Ads", "Meta funnel-based ad campaigns", "Advanced conversion tracking", "A/B creative testing"], color: "bg-accent" },
            { icon: Users, title: "Lead Generation Systems", items: ["Multi-step lead magnet funnels", "Automated lead scoring", "CRM & sales pipeline integration", "Lead-to-sales handoff workflows"], color: "bg-primary" },
            { icon: Zap, title: "AI & Marketing Automation", items: ["AI-powered content workflows", "WhatsApp & Email automation", "Custom CRM automation", "Process optimization"], color: "bg-periwinkle" },
            { icon: BarChart3, title: "Performance & Scaling", items: ["Cost-per-Lead & ROI analysis", "Scaling profitable campaigns", "Full-funnel performance audit", "Data-backed weekly reporting"], color: "bg-sky" },
          ].map((s, i) => (
            <motion.div key={s.title} {...fadeIn} transition={{ delay: i * 0.08 }}
              className="bg-background rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`${s.color} rounded-xl p-3 w-fit mb-4`}><s.icon className="h-6 w-6 text-primary-foreground" /></div>
              <h3 className="font-bold text-foreground mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="h-3 w-3 text-accent mt-1 shrink-0" />{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. Your Partner - Image Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="md:order-last">
            <h2 className="text-3xl font-bold text-foreground mb-2">Your Digital Marketing Partner in Indore</h2>
            <p className="text-primary font-semibold mb-4">Expert Partner. Direct founder involvement. No junior account managers.</p>
            <p className="text-muted-foreground mb-6">With years of hands-on experience, I work directly with business owners, founders, and marketing heads to design and implement custom digital marketing systems.</p>
            <div className="space-y-4">
              {[
                { title: "Business Understanding", desc: "I dive deep into your unique business model before touching a single campaign." },
                { title: "Data-Driven Execution", desc: "Decisions based on conversion data and ROI spreadsheets, not gut feelings." },
                { title: "Continuous Optimization", desc: "We test, break, and rebuild to find the winning formula." },
              ].map(item => (
                <div key={item.title} className="border-l-4 border-accent pl-4">
                  <div className="font-semibold text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="md:order-first">
            <img src="/images/services-partner.png" alt="Digital Marketing Services Partner" className="rounded-2xl shadow-lg w-full" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* 5. Structured Growth Process */}
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">A Structured Growth Process</h2>
          <p className="text-muted-foreground">No guesswork. No generic templates. Just a proven framework.</p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { step: "01", title: "Diagnosis", desc: "Business & market analysis to find your leverage.", color: "bg-periwinkle" },
            { step: "02", title: "Strategy", desc: "A custom roadmap built for ROI, not just clicks.", color: "bg-sky" },
            { step: "03", title: "Execution", desc: "System setup, campaign launch, and funnel builds.", color: "bg-accent" },
            { step: "04", title: "Optimization", desc: "Performance monitoring and scaling what works.", color: "bg-primary" },
          ].map((s, i) => (
            <motion.div key={s.step} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center">
              <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary-foreground`}>{s.step}</div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 6. Why Choose Me - Image Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <img src="/images/about-pawan.png" alt="Pawan Tripathi - Why Choose" className="rounded-2xl shadow-lg w-full" />
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.15 }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Me?</h2>
            <div className="space-y-5">
              {[
                { emoji: "🚀", title: "Proven Expertise", desc: "10+ years of hands-on experience boosting revenue and digital presence." },
                { emoji: "🎯", title: "Tailored Plans", desc: "Bespoke solutions for Content, SEO, Social Media, and Performance Marketing." },
                { emoji: "🔍", title: "Data-Driven Strategies", desc: "Latest tools and analytics to optimize campaigns for maximum ROI." },
                { emoji: "💡", title: "Practical Approach", desc: "Actionable, results-driven execution that stays ahead of competition." },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* 7. Stats */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {[
            { value: "60+", label: "Satisfied Clients" }, { value: "1500+", label: "Students Trained" },
            { value: "15+", label: "Corporate Trainings" }, { value: "10+", label: "Years Experience" },
          ].map((s, i) => (
            <motion.div key={s.label} {...fadeIn} transition={{ delay: i * 0.1 }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">{s.value}</div>
              <div className="text-sm opacity-80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 8. Quote */}
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
        <motion.div {...fadeIn}>
          <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-6">
            "Marketing without data is just noise. <span className="text-primary">I bring the signal.</span>"
          </blockquote>
          <p className="text-muted-foreground">My clients don't pay for hours. They pay for clarity, direction, and tangible business results.</p>
        </motion.div>
      </div>
    </section>

    {/* 9. Contact CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-background rounded-2xl p-8 md:p-12 border border-border/50 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6">Ready to transform your digital presence? Let's discuss how I can help you achieve your goals.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> dm@pawantripathi.in</span>
              <span className="flex items-center gap-2"><Globe className="h-4 w-4" /> +91 9815064617</span>
            </div>
            <Button size="lg" className="bg-accent text-accent-foreground rounded-full px-8 font-semibold">Request a Consultation <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* 10. Trust Banner */}
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div {...fadeIn}>
          <p className="text-lg font-semibold mb-2">Serving Indore & ambitious businesses across India.</p>
          <p className="text-sm opacity-70">Prefer email? Reach out at hello@pawantripathi.in</p>
        </motion.div>
      </div>
    </section>

  
  </div>
);

export default ServicesPage;
