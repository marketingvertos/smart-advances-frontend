import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  X, CheckCircle, Loader2,
  User, Mail, Phone, MapPin, MessageSquare,
} from "lucide-react";
import API_BASE from "../config/api";

type Props = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const businessTypes = [
  "Startup",
  "Small Business",
  "E-commerce",
  "Agency",
  "Freelancer",
  "Enterprise",
];

const revenues = [
  "Just Starting",
  "Under ₹5L/month",
  "₹5L - ₹25L/month",
  "₹25L+/month",
];

const services = [
  "AI Growth Consulting",
  "AI SEO",
  "AI Ads Management",
  "AI Lead Generation",
  "Training / Academy",
  "Other",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
];

const goals = [
  "More Leads",
  "More Sales",
  "Brand Awareness",
  "Automate Marketing",
];

const ConsultationModal = ({ isOpen, setIsOpen }: Props) => {
  const [step, setStep]           = useState(1);
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]       = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name:         "",
    email:        "",
    whatsapp:     "",
    city:         "",
    businessType: "",
    revenue:      "",
    service:      "",
    budget:       "",
    goal:         "",
    message:      "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const select = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())     e.name     = "Name is required";
    if (!form.email.trim())    e.email    = "Email is required";
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp number is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!form.businessType) e.businessType = "Please select business type";
    if (!form.revenue)      e.revenue      = "Please select revenue";
    if (!form.service)      e.service      = "Please select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e: Record<string, string> = {};
    if (!form.budget) e.budget = "Please select a budget";
    if (!form.goal)   e.goal   = "Please select your main goal";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) handleSubmit();
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          phone:   form.whatsapp,
          status:  "new",
          source:  "consultation_modal",
          // extra fields as note
          note: `City: ${form.city} | Business: ${form.businessType} | Revenue: ${form.revenue} | Service: ${form.service} | Budget: ${form.budget} | Goal: ${form.goal} | Message: ${form.message}`,
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setForm({
        name: "", email: "", whatsapp: "", city: "",
        businessType: "", revenue: "", service: "",
        budget: "", goal: "", message: "",
      });
      setErrors({});
    }, 300);
  };

  const stepLabels = ["Contact Info", "Business Details", "Goals"];

  // ── Option Button helper ──
  const OptionBtn = ({
    value, field, label,
  }: { value: string; field: string; label: string }) => (
    <button
      type="button"
      onClick={() => select(field, value)}
      className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-all text-left ${
        (form as any)[field] === value
          ? "bg-[#1E5EFF] text-white border-[#1E5EFF]"
          : "bg-white text-[#6B7280] border-[#E2E8F0] hover:border-[#1E5EFF]/40 hover:text-[#0F172A]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >

            {/* ── HEADER ── */}
            <div className="bg-[#0B2C5F] px-7 pt-7 pb-6 relative flex-shrink-0">
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 text-white/60 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition"
              >
                <X className="h-5 w-5" />
              </button>

              {!submitted ? (
                <>
                  <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/25 border border-[#1E5EFF]/30 rounded-full px-3 py-1 mb-3">
                    <span className="text-xs font-semibold text-[#93C5FD]">
                      Free Consultation
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    Book Your Strategy Call
                  </h2>
                  <p className="text-white/60 text-sm">
                    Tell us about your business — we'll create a custom growth plan.
                  </p>

                  {/* PROGRESS */}
                  <div className="mt-5">
                    <div className="flex justify-between text-xs text-white/50 mb-2">
                      <span>Step {step} of 3</span>
                      <span>{Math.round(((step - 1) / 2) * 100)}% complete</span>
                    </div>
                    <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: `${((step - 1) / 2) * 100}%` }}
                        transition={{ duration: 0.4 }}
                        className="h-full bg-[#1E5EFF] rounded-full"
                      />
                    </div>

                    {/* STEP DOTS */}
                    <div className="flex justify-between mt-3">
                      {stepLabels.map((label, i) => (
                        <div key={label} className="flex flex-col items-center gap-1">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            step > i + 1
                              ? "bg-[#1E5EFF] text-white"
                              : step === i + 1
                              ? "bg-white text-[#0B2C5F]"
                              : "bg-white/20 text-white/50"
                          }`}>
                            {step > i + 1 ? "✓" : i + 1}
                          </div>
                          <span className={`text-xs ${step === i + 1 ? "text-white" : "text-white/40"}`}>
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-2">
                  <div className="w-14 h-14 bg-[#1E5EFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">You're All Set! 🎉</h2>
                  <p className="text-white/60 text-sm">
                    We'll reach out within 24 hours to schedule your call.
                  </p>
                </div>
              )}
            </div>

            {/* ── BODY ── */}
            <div className="px-7 py-6 overflow-y-auto flex-1">

              {/* SUCCESS */}
              {submitted ? (
                <div className="space-y-4">
                  <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-5">
                    <h3 className="font-semibold text-[#0F172A] mb-3 text-sm">
                      What happens next?
                    </h3>
                    <div className="space-y-3">
                      {[
                        "We'll review your requirements within 2 hours",
                        "Our team will WhatsApp you to confirm the appointment",
                        "You'll receive a custom growth plan before the call",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-[#6B7280]">
                          <div className="w-5 h-5 rounded-full bg-[#1E5EFF] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={handleClose}
                    className="w-full bg-[#1E5EFF] text-white rounded-full font-semibold hover:bg-[#0a4ae0] transition"
                  >
                    Close
                  </Button>
                </div>

              ) : (
                <AnimatePresence mode="wait">

                  {/* ── STEP 1 — Contact Info ── */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.22 }}
                      className="space-y-4"
                    >
                      {/* Name */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-1.5 block">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                          <Input
                            name="name"
                            placeholder="Enter your full name"
                            value={form.name}
                            onChange={handleChange}
                            className={`pl-10 rounded-xl border-[#E2E8F0] focus:border-[#1E5EFF] ${errors.name ? "border-red-400" : ""}`}
                          />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-1.5 block">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                          <Input
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                            className={`pl-10 rounded-xl border-[#E2E8F0] focus:border-[#1E5EFF] ${errors.email ? "border-red-400" : ""}`}
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-1.5 block">WhatsApp Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                          <Input
                            name="whatsapp"
                            placeholder="+91 98765 43210"
                            value={form.whatsapp}
                            onChange={handleChange}
                            className={`pl-10 rounded-xl border-[#E2E8F0] focus:border-[#1E5EFF] ${errors.whatsapp ? "border-red-400" : ""}`}
                          />
                        </div>
                        {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                      </div>

                      {/* City */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-1.5 block">
                          City <span className="text-[#6B7280] font-normal">(optional)</span>
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                          <Input
                            name="city"
                            placeholder="e.g. Mumbai, Delhi, Indore"
                            value={form.city}
                            onChange={handleChange}
                            className="pl-10 rounded-xl border-[#E2E8F0] focus:border-[#1E5EFF]"
                          />
                        </div>
                      </div>

                      <Button
                        onClick={handleNext}
                        className="w-full bg-[#1E5EFF] text-white rounded-full font-semibold hover:bg-[#0a4ae0] transition"
                      >
                        Next Step →
                      </Button>
                    </motion.div>
                  )}

                  {/* ── STEP 2 — Business Details ── */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.22 }}
                      className="space-y-5"
                    >
                      {/* Business Type */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-2 block">
                          Business Type *
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {businessTypes.map((b) => (
                            <OptionBtn key={b} value={b} field="businessType" label={b} />
                          ))}
                        </div>
                        {errors.businessType && <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>}
                      </div>

                      {/* Monthly Revenue */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-2 block">
                          Current Monthly Revenue *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {revenues.map((r) => (
                            <OptionBtn key={r} value={r} field="revenue" label={r} />
                          ))}
                        </div>
                        {errors.revenue && <p className="text-red-500 text-xs mt-1">{errors.revenue}</p>}
                      </div>

                      {/* Service */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-2 block">
                          Service Interested In *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((s) => (
                            <OptionBtn key={s} value={s} field="service" label={s} />
                          ))}
                        </div>
                        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="flex-1 rounded-full border-[#E2E8F0] text-[#6B7280] hover:border-[#1E5EFF] hover:text-[#1E5EFF] transition"
                        >
                          ← Back
                        </Button>
                        <Button
                          onClick={handleNext}
                          className="flex-1 bg-[#1E5EFF] text-white rounded-full font-semibold hover:bg-[#0a4ae0] transition"
                        >
                          Next Step →
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 3 — Goals ── */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.22 }}
                      className="space-y-5"
                    >
                      {/* Budget */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-2 block">
                          Monthly Marketing Budget *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {budgets.map((b) => (
                            <OptionBtn key={b} value={b} field="budget" label={b} />
                          ))}
                        </div>
                        {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
                      </div>

                      {/* Main Goal */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-2 block">
                          Main Goal *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {goals.map((g) => (
                            <OptionBtn key={g} value={g} field="goal" label={g} />
                          ))}
                        </div>
                        {errors.goal && <p className="text-red-500 text-xs mt-1">{errors.goal}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-xs font-semibold text-[#0F172A] mb-1.5 block">
                          Message{" "}
                          <span className="text-[#6B7280] font-normal">(optional)</span>
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6B7280]" />
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Tell us about your goals or any specific challenges..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#1E5EFF] focus:ring-2 focus:ring-[#1E5EFF]/20 text-sm text-[#0F172A] resize-none transition"
                          />
                        </div>
                      </div>

                      {/* SUMMARY */}
                      <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-xl p-4">
                        <p className="font-semibold text-[#0F172A] mb-3 text-sm">Booking Summary</p>
                        <div className="space-y-1.5">
                          {[
                            { label: "Name",     value: form.name },
                            { label: "WhatsApp", value: form.whatsapp },
                            { label: "Business", value: form.businessType },
                            { label: "Service",  value: form.service },
                            { label: "Budget",   value: form.budget },
                            { label: "Goal",     value: form.goal },
                          ].map((item) => (
                            <div key={item.label} className="flex justify-between text-xs">
                              <span className="text-[#6B7280]">{item.label}</span>
                              <span className="font-medium text-[#0F172A]">{item.value || "—"}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          onClick={() => setStep(2)}
                          className="flex-1 rounded-full border-[#E2E8F0] text-[#6B7280] hover:border-[#1E5EFF] hover:text-[#1E5EFF] transition"
                        >
                          ← Back
                        </Button>
                        <Button
                          onClick={handleNext}
                          disabled={loading}
                          className="flex-1 bg-[#1E5EFF] text-white rounded-full font-semibold hover:bg-[#0a4ae0] transition"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Booking...
                            </span>
                          ) : (
                            "Confirm Booking ✓"
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;