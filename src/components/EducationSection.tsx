import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";

const modules = [
  {
    num: 1,
    title: "AI Fundamentals",
    desc: "Understanding AI, ML, and their applications in modern marketing."
  },
  {
    num: 2,
    title: "AI Content Creation",
    desc: "Master AI tools to produce high-converting marketing content."
  },
  {
    num: 3,
    title: "AI SEO",
    desc: "Implement advanced AI-powered SEO strategies and ranking systems."
  },
  {
    num: 4,
    title: "AI Ads Automation",
    desc: "Automate and scale advertising campaigns using AI algorithms."
  },
  {
    num: 5,
    title: "AI Marketing Analytics",
    desc: "Use AI analytics for smarter marketing decisions and insights."
  },
  {
    num: 6,
    title: "AI Lead Generation Systems",
    desc: "Build automated lead generation funnels powered by AI."
  }
];

const colors = [
  "bg-periwinkle",
  "bg-sky",
  "bg-accent",
  "bg-primary",
  "bg-periwinkle",
  "bg-sky"
];

const EducationSection = () => (
  <section id="academy" className="py-16 md:py-24 lg:py-28 bg-background">

    <div className="container mx-auto px-4 max-w-6xl">

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >

        <div className="inline-flex items-center gap-2 bg-sky/15 rounded-full px-4 py-1.5 mb-6">

          <GraduationCap className="h-4 w-4 text-primary" />

          <span className="text-sm text-primary font-semibold">
            AI Academy
          </span>

        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          AI Digital Marketing Mastery
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Learn how to leverage AI tools, automation, and data-driven strategies to grow businesses faster.
        </p>

      </motion.div>


      {/* MODULE LIST */}

      <div className="max-w-4xl mx-auto grid gap-4 md:gap-5">

        {modules.map((m, i) => (

          <motion.div
            key={m.num}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-background rounded-2xl p-5 md:p-6 flex items-center gap-5 
            border border-border/50 hover:shadow-xl hover:-translate-y-1 
            transition-all duration-300"
          >

            {/* NUMBER BADGE */}

            <div
              className={`${colors[i]} rounded-xl w-11 h-11 md:w-12 md:h-12 
              flex items-center justify-center flex-shrink-0 
              group-hover:scale-110 transition`}
            >

              <span className="text-primary-foreground font-bold text-lg">
                {m.num}
              </span>

            </div>


            {/* TEXT */}

            <div className="flex-1">

              <h3 className="font-semibold text-foreground text-base md:text-lg mb-1">
                {m.title}
              </h3>

              <p className="text-sm md:text-base text-muted-foreground">
                {m.desc}
              </p>

            </div>


            {/* ICON */}

            <BookOpen className="h-5 w-5 text-muted-foreground ml-auto flex-shrink-0 group-hover:text-primary transition" />

          </motion.div>

        ))}

      </div>


      {/* CTA */}

      <div className="text-center mt-12 md:mt-14">

        <Button
          size="lg"
          className="bg-accent text-accent-foreground font-semibold 
          rounded-full px-8 md:px-10 shadow-lg hover:bg-accent/90 
          hover:shadow-xl transition"
        >
          Enroll Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

      </div>

    </div>

  </section>
);

export default EducationSection;