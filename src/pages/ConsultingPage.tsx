import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  TrendingUp,
  BarChart3,
  CheckCircle,
  Star,
  Zap,
  Shield,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const audiences = [
  "D2C Brands globally",
  "SaaS Founders worldwide",
  "Service Businesses across borders",
  "E-commerce Stores at scale",
  "Coaches & Consultants globally",
];

const heroImages = [
  { src: "/images/consulting-hero-1.webp", alt: "Consulting Event" },
  { src: "/images/consulting-hero-2.webp", alt: "Marketing Conference" },
  { src: "/images/consulting-hero-3.webp", alt: "Digital Marketing Consultant" },
];

const ConsultingPage = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [audienceIndex, setAudienceIndex] = useState(0);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(imgTimer);
  }, []);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setAudienceIndex((prev) => (prev + 1) % audiences.length);
    }, 2000);
    return () => clearInterval(textTimer);
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="pt-36 sm:pt-40 md:pt-48 lg:pt-52 pb-16 md:pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">

            <motion.div {...fadeIn}>
              <span className="inline-block bg-accent/20 text-accent rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold mb-6">
                Strategic Advisory • Q1 2026
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Data-Driven Revenue Systems.
              </h1>

              <p className="text-base sm:text-lg opacity-90 mb-8 max-w-xl">
                I help{" "}
                <motion.span
                  key={audienceIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent font-bold inline-block"
                >
                  {audiences[audienceIndex]}
                </motion.span>{" "}
                transition from chaotic ad spend to predictable growth.
                Specializing in <strong>high-ticket lead generation</strong> and{" "}
                <strong>full-funnel optimization</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8 bg-accent text-accent-foreground">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-primary-foreground/30"
                >
                  Explore Methodology
                </Button>
              </div>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div {...fadeIn} className="relative">

              <motion.img
                key={currentImg}
                src={heroImages[currentImg].src}
                alt={heroImages[currentImg].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl shadow-2xl w-full object-cover max-h-[260px] sm:max-h-[320px] md:max-h-[420px]"
              />

              {/* dots */}
              <div className="flex justify-center gap-2 mt-4">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === currentImg
                        ? "bg-accent w-6"
                        : "bg-white/40 w-2.5"
                    }`}
                  />
                ))}
              </div>

              {/* arrows */}
              <button
                onClick={() =>
                  setCurrentImg(
                    (p) => (p - 1 + heroImages.length) % heroImages.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={() =>
                  setCurrentImg((p) => (p + 1) % heroImages.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE COMPETENCIES */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Competencies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {[
              {
                icon: Target,
                title: "Performance Marketing",
                desc: "High-ROI Meta & Google Ads",
              },
              {
                icon: TrendingUp,
                title: "Conversion Optimization",
                desc: "Turn traffic into revenue",
              },
              {
                icon: Zap,
                title: "Marketing Automation",
                desc: "Automated growth systems",
              },
              {
                icon: BarChart3,
                title: "Data Analytics",
                desc: "Precision attribution models",
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border hover:shadow-xl text-center"
              >
                <div className="bg-accent rounded-xl p-4 w-fit mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-accent-foreground" />
                </div>

                <h3 className="font-semibold mb-2">{s.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {[
              {
                name: "Yogendra Thakur",
                quote: "We 3x our leads in 2 months.",
              },
              {
                name: "Sapan Jain",
                quote: "CAC dropped by 40%.",
              },
              {
                name: "Priya Patel",
                quote: "ROI clarity is incredible.",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 italic">
                  "{t.quote}"
                </p>

                <div className="font-semibold">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground text-center">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Scale Your Business?
            </h2>

            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              I take on a limited number of consulting projects per quarter.
            </p>

            <Button
              size="lg"
              className="rounded-full px-8 bg-accent text-accent-foreground"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default ConsultingPage;