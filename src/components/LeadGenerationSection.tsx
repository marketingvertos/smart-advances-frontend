import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowDown,
  CheckCircle,
  Mail,
  FileText,
  CalendarCheck,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import API_BASE from "../config/api";

type FunnelStep = {
  icon: any;
  label: string;
  color: string;
};

const funnelSteps: FunnelStep[] = [
  { icon: CheckCircle, label: "Free AI Marketing Audit", color: "bg-periwinkle" },
  { icon: Mail, label: "Email Capture", color: "bg-sky" },
  { icon: FileText, label: "AI Strategy Report", color: "bg-accent" },
  { icon: CalendarCheck, label: "Consultation Booking", color: "bg-primary" }
];

const LeadGenerationSection = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !name) return;

    setLoading(true);

    try {
      await fetch(`${API_BASE}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          status: "new",
        }),
      });

      setSubmitted(true);

      toast({
        title: "🎉 Success!",
        description: "Your free AI marketing audit is on its way!"
      });

    } catch (err) {
      console.error("Lead submit error:", err);
      toast({
        title: "❌ Error",
        description: "Something went wrong. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead" className="py-20 md:py-28 section-alt">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-accent-foreground">
              Free Offer
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
            Get Your Free AI Marketing Audit
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Discover hidden growth opportunities using AI powered marketing analysis.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Funnel Steps */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            {funnelSteps.map((step, i) => (
              <div key={step.label}>
                <div className="bg-background border border-border/50 rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`${step.color} rounded-xl p-2 flex items-center justify-center`}>
                    <step.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{step.label}</span>
                </div>

                {i < funnelSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-5 w-5 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="bg-background border border-border/50 rounded-2xl p-10 text-center shadow-xl">
                <CheckCircle className="h-16 w-16 text-periwinkle mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your free AI marketing audit report will be delivered within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-background border border-border/50 rounded-2xl p-8 shadow-xl space-y-5 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  Claim Your Free AI Audit
                </h3>

                <p className="text-sm text-muted-foreground">
                  Get a personalized AI powered marketing strategy analysis.
                </p>

                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-full"
                  required
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                  required
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-accent-foreground font-semibold py-6 text-lg rounded-full hover:bg-accent/90 shadow-lg transition-all"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    "Get Free AI Audit →"
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LeadGenerationSection;