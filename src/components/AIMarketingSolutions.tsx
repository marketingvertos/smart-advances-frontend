import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Target,
  FileText,
  BarChart3,
  Route,
  ArrowRight,
  Briefcase,
  X,
} from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI Digital Marketing Automation",
    desc: "Automate your entire marketing pipeline with intelligent AI systems that learn and optimize.",
    color: "bg-periwinkle",
  },
  {
    icon: Target,
    title: "Predictive Customer Targeting",
    desc: "Reach the right audience at the right time with AI-powered predictive targeting models.",
    color: "bg-sky",
  },
  {
    icon: FileText,
    title: "AI Content Generation",
    desc: "Create high-converting content at scale with AI tools for blogs, ads, social media, and more.",
    color: "bg-accent",
  },
  {
    icon: BarChart3,
    title: "AI Ad Optimization",
    desc: "Maximize ROI with AI-driven ad strategies that continuously optimize bids and targeting.",
    color: "bg-primary",
  },
  {
    icon: Route,
    title: "AI SAAS Journey Mapping",
    desc: "Map and optimize every touchpoint with AI that predicts customer behavior and intent.",
    color: "bg-periwinkle",
  },
  {
    icon: Briefcase,
    title: "AI Business Consulting",
    desc: "Expert guidance to integrate AI into your marketing and business strategy.",
    color: "bg-sky",
  },
];

const AIMarketingSolutions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    number: "",
    requirement: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", form);

    setSubmitted(true);

    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);

      setForm({
        name: "",
        company: "",
        number: "",
        requirement: "",
        budget: "",
      });
    }, 2500);
  };

  return (
    <section id="solutions" className="py-16 md:py-24 lg:py-28 bg-background">

      <div className="container mx-auto px-4 max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-periwinkle/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-periwinkle">
              What We Offer
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            AI Digital Marketing Solutions
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Transform your business with AI-driven marketing strategies that
            deliver measurable growth and better customer engagement.
          </p>
        </motion.div>

        {/* SOLUTION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-6 md:p-7 border border-border/50 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`${s.color} rounded-xl p-3 w-fit mb-4 
                group-hover:scale-110 transition`}
              >
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
                {s.title}
              </h3>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="rounded-full px-8 shadow-lg"
          >
            Get AI Marketing Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-3xl shadow-2xl w-full max-w-lg p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
            >

              {/* CLOSE */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-foreground">
                      Get Your AI Marketing Strategy
                    </h3>

                    <p className="text-muted-foreground text-sm mt-1">
                      Fill in your details and our team will contact you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border px-4 py-2.5 text-sm"
                    />

                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Company Name"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border px-4 py-2.5 text-sm"
                    />

                    <input
                      type="tel"
                      name="number"
                      required
                      placeholder="Phone Number"
                      value={form.number}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border px-4 py-2.5 text-sm"
                    />

                    <textarea
                      name="requirement"
                      required
                      rows={3}
                      placeholder="Describe your requirement..."
                      value={form.requirement}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border px-4 py-2.5 text-sm resize-none"
                    />

                    <select
                      name="budget"
                      required
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border px-4 py-2.5 text-sm"
                    >
                      <option value="">Select Budget</option>
                      <option value="under-10k">Under ₹10,000</option>
                      <option value="10k-25k">₹10k – ₹25k</option>
                      <option value="25k-50k">₹25k – ₹50k</option>
                      <option value="50k-1l">₹50k – ₹1L</option>
                      <option value="above-1l">Above ₹1L</option>
                    </select>

                    <Button type="submit" size="lg" className="w-full rounded-xl">
                      Submit Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team will contact you soon.
                  </p>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default AIMarketingSolutions;