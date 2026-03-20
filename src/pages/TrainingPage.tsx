import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Star,
  Briefcase,
  Brain,
  BarChart3,
  Palette,
  Globe,
  Shield,
  ChevronDown,
  Target,
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const faqs = [
  {
    q: "How is this training different from other institutes?",
    a: "Most institutes teach tools. We teach strategy, ROI thinking, and real business marketing.",
  },
  {
    q: "Do you offer placement assistance?",
    a: "Yes. Resume building, mock interviews, and connections with agencies.",
  },
  {
    q: "Will I get to work on live projects?",
    a: "Yes. You will manage real ad accounts and campaigns.",
  },
  {
    q: "What is the duration of the course?",
    a: "3–6 months depending on pace.",
  },
  {
    q: "Do you cover AI tools?",
    a: "Yes — ChatGPT, Midjourney, automation systems.",
  },
  {
    q: "What prerequisites are needed?",
    a: "Just a laptop and curiosity.",
  },
];

const TrainingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="pt-36 sm:pt-40 md:pt-48 lg:pt-52 pb-16 md:pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">

            <span className="inline-block bg-accent/20 text-accent rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold mb-6">
              Accepting Enrolments for 2025
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master the Art of{" "}
              <span className="text-accent">Digital Influence</span>
            </h1>

            <p className="text-base sm:text-lg opacity-90 mb-8">
              Indore's premier training ecosystem for future CMOs and
              entrepreneurs. Learn strategy, psychology, and revenue-driven
              marketing.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <Button
                size="lg"
                className="bg-accent text-accent-foreground rounded-full px-8 font-semibold"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary-foreground/30"
              >
                Quick Inquiry
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRY GAP */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              The Industry Gap
            </h2>
            <p className="text-primary font-semibold">
              Why Standard Courses Fail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {[
              {
                title: "Certificate Trap",
                desc: "Certificates don't get you hired. Skills do.",
              },
              {
                title: "Theory Over Execution",
                desc: "Knowing SEO definition isn't enough to rank.",
              },
              {
                title: "Outdated Tactics",
                desc: "Old marketing strategies don't work in AI era.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 text-center border"
              >
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* MENTOR */}
      <section className="py-16 md:py-20 section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center max-w-5xl mx-auto">

            <motion.div {...fadeIn}>

              <img
                src="/images/pawan-profile.jpg"
                alt="Pawan Tripathi"
                className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md mx-auto"
              />

              <div className="grid grid-cols-3 gap-3 mt-6 max-w-sm mx-auto">

                {[
                  { v: "10+", l: "Years" },
                  { v: "1500+", l: "Students" },
                  { v: "50L+", l: "Revenue" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="bg-background rounded-xl p-3 text-center border"
                  >
                    <div className="font-bold text-primary">{s.v}</div>
                    <div className="text-xs text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}

              </div>
            </motion.div>

            <motion.div {...fadeIn}>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Meet The Mentor
              </h2>

              <p className="text-muted-foreground mb-4">
                Pawan Tripathi teaches real-world marketing strategies used
                to grow businesses and startups.
              </p>

              <div className="space-y-3 text-sm">

                {[
                  "Strategic marketing thinking",
                  "Data driven decisions",
                  "AI & automation tools",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    {item}
                  </div>
                ))}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeIn} className="text-center mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Comprehensive Modules
            </h2>

            <p className="text-muted-foreground">
              Blueprint for your marketing career
            </p>

          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { icon: BarChart3, title: "Advanced SEO" },
              { icon: Target, title: "Performance Ads" },
              { icon: Globe, title: "Social Media Marketing" },
              { icon: Palette, title: "Website CRO" },
              { icon: Brain, title: "AI & Automation" },
              { icon: BookOpen, title: "Content Strategy" },
              { icon: Shield, title: "Brand Reputation" },
              { icon: Briefcase, title: "Freelancing Business" },
            ].map((m, i) => (
              <motion.div
                key={m.title}
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                className="bg-background rounded-2xl p-6 border hover:shadow-xl"
              >

                <div className="bg-accent rounded-lg p-3 w-fit mb-4">
                  <m.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="font-semibold">{m.title}</h3>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeIn} className="text-center mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>

          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">

            {faqs.map((faq, i) => (

              <div
                key={i}
                className="border rounded-xl overflow-hidden"
              >

                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >

                  <span className="text-sm sm:text-base font-medium">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    {faq.a}
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.div {...fadeIn}>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Secure Your Future
            </h2>

            <p className="mb-8 opacity-90">
              Batch size is limited for personalized mentorship.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <Button
                size="lg"
                className="bg-accent text-accent-foreground rounded-full px-8"
              >
                Call Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary-foreground/30"
              >
                WhatsApp
              </Button>

            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default TrainingPage;