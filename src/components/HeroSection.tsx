import { motion, easeOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Award } from "lucide-react";

const HeroSection = () => {
  const defaultTransition = { duration: 0.6, ease: easeOut };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: defaultTransition },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <section className="relative flex items-center py-10 md:py-14 overflow-hidden bg-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2C5F]/5 via-transparent to-[#1E5EFF]/5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#1E5EFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-[#0B2C5F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.div variants={containerVariants} initial="hidden" animate="visible">

              {/* BADGE */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-5 w-fit"
              >
                <Star className="h-3.5 w-3.5 text-[#1E5EFF]" />
                <span className="text-sm font-semibold text-[#1E5EFF]">Meet Pawan Tripathi</span>
              </motion.div>

              {/* HEADING */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-5 text-[#0F172A]"
              >
                Digital Marketing{" "}
                <br className="hidden sm:block" />
                <span className="text-[#1E5EFF]">Trainer &</span>
                <br />
                <span className="text-[#1E5EFF]">Consultant</span>
              </motion.h1>

              {/* DESC */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-[#6B7280] mb-7 max-w-xl leading-relaxed"
              >
                Results-driven Digital Marketing Consultant and Trainer with{" "}
                <strong className="text-[#0F172A]">10+ years of industry experience</strong>{" "}
                helping professionals and businesses achieve measurable growth.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <a href="/training">
                  <Button className="bg-[#1E5EFF] text-white hover:bg-[#0a4ae0] rounded-full px-7 w-full sm:w-auto font-semibold shadow-lg shadow-[#1E5EFF]/25 hover:shadow-[#1E5EFF]/40 hover:scale-105 transition-all">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Start Learning
                  </Button>
                </a>
                <a href="/consulting">
                  <Button
                    variant="outline"
                    className="bg-white text-[#1E5EFF] border-2 border-[#1E5EFF] hover:bg-[#1E5EFF] hover:text-white rounded-full px-7 w-full sm:w-auto font-semibold transition-all"
                  >
                    Grow Your Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>

              {/* STATS */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E2E8F0]"
              >
                {[
                  { num: "60+",  label: "Happy Clients" },
                  { num: "10+",  label: "Years Experience" },
                  { num: "500+", label: "Students Trained" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl md:text-3xl font-bold text-[#1E5EFF]">{s.num}</p>
                    <p className="text-xs md:text-sm text-[#6B7280] mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px]">

              {/* MAIN IMAGE */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E2E8F0] shadow-2xl">
                <img
                  src="/forbes.jpg"
                  alt="Pawan Tripathi Forbes Event"
                  className="w-full h-full object-cover"
                />

                {/* TOP RIGHT BADGE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute top-3 right-3 bg-white rounded-lg px-3 py-2 shadow-lg border border-[#E2E8F0]"
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#1E5EFF]" />
                    <span className="text-xs font-bold text-[#0F172A]">Top Rated</span>
                  </div>
                </motion.div>
              </div>

              {/* FLOATING CARD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, ...defaultTransition }}
                className="hidden md:block absolute -bottom-4 -left-6 bg-white rounded-xl p-4 shadow-xl border border-[#E2E8F0] max-w-[220px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <p className="text-xs font-bold text-[#0F172A]">Results-Driven</p>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Proven strategies that deliver measurable ROI
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;