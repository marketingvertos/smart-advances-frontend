import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Award } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center py-16 md:py-24 overflow-hidden bg-background">

    <div className="container mx-auto px-4 max-w-7xl">

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-1.5 mb-6">
            <Star className="h-4 w-4" />
            <span className="text-sm font-semibold">Meet Pawan Tripathi</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Digital Marketing <br />
            <span className="gradient-text">Trainer &</span> <br />
            <span className="gradient-text">Consultant</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg leading-relaxed">
            Results-driven Digital Marketing Consultant and Trainer with
            <strong className="text-foreground">
              {" "}10+ years of industry experience
            </strong>{" "}
            helping professionals and businesses achieve measurable growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">

            <a href="/training">
              <Button size="lg" className="rounded-full px-8">
                <Sparkles className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </a>

            <a href="/consulting">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Grow Your Business
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">

            <div>
              <p className="text-2xl font-bold text-primary">60+</p>
              <p className="text-xs text-muted-foreground">Happy Clients</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-primary">10+</p>
              <p className="text-xs text-muted-foreground">Years Experience</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-xs text-muted-foreground">Students Trained</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div className="rounded-3xl overflow-hidden aspect-[4/3] relative border shadow-lg">

            <img
              src="/forbes.jpg"
              alt="Pawan Tripathi Forbes Event"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Badge */}
            <div className="absolute top-6 right-6 bg-white rounded-xl px-3 py-2 shadow">

              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-black">
                  Top Rated
                </span>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  </section>
);

export default HeroSection;