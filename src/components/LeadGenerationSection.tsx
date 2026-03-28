import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDown, CheckCircle, Mail, FileText, CalendarCheck, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import API_BASE from "../config/api";

const funnelSteps = [
  { icon: CheckCircle, label: "Free AI Marketing Audit",  color: "bg-[#1E5EFF]" },
  { icon: Mail,        label: "Email Capture",            color: "bg-[#0B2C5F]" },
  { icon: FileText,    label: "AI Strategy Report",       color: "bg-[#1E5EFF]" },
  { icon: CalendarCheck, label: "Consultation Booking",   color: "bg-[#0B2C5F]" },
];

const LeadGenerationSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !name) return;
    setLoading(true);
    try {
      await fetch(`${API_BASE}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, status: "new" }),
      });
      setSubmitted(true);
      toast({ title: "🎉 Success!", description: "Your free AI marketing audit is on its way!" });
    } catch (err) {
      toast({ title: "❌ Error", description: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead" className="py-20 md:py-28 bg-[#F4F7FB]">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-[#1E5EFF]">Free Offer</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0F172A] leading-tight">
            Get Your Free AI Marketing Audit
          </h2>

          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto">
            Discover hidden growth opportunities using AI powered marketing analysis.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* FUNNEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            {funnelSteps.map((step, i) => (
              <div key={step.label}>
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`${step.color} rounded-xl p-2.5 flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-[#0F172A] font-medium">{step.label}</span>
                </div>
                {i < funnelSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-5 w-5 text-[#6B7280]/40" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-10 text-center shadow-xl">
                <CheckCircle className="h-16 w-16 text-[#1E5EFF] mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Thank You!</h3>
                <p className="text-[#6B7280]">Your free AI marketing audit report will be delivered within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-xl space-y-5 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#0F172A]">Claim Your Free AI Audit</h3>
                <p className="text-sm text-[#6B7280]">Get a personalized AI powered marketing strategy analysis.</p>

                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-full border-[#E2E8F0] focus:border-[#1E5EFF]"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full border-[#E2E8F0] focus:border-[#1E5EFF]"
                  required
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1E5EFF] text-white font-semibold py-6 text-lg rounded-full hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/25 transition-all"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Get Free AI Audit →"}
                </Button>

                <p className="text-xs text-[#6B7280] text-center">No spam. Unsubscribe anytime.</p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LeadGenerationSection;