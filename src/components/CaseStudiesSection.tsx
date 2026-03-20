import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Zap } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    metric: "300%",
    label: "Organic Traffic Growth",
    title: "AI SEO Strategy",
    desc: "Implemented AI-driven keyword research and programmatic SEO, resulting in 3x organic traffic growth within 6 months.",
    color: "bg-periwinkle"
  },
  {
    icon: TrendingDown,
    metric: "40%",
    label: "Ad Cost Reduction",
    title: "AI Ad Optimization",
    desc: "Used AI to optimize Meta and Google ad campaigns, reducing cost per acquisition by 40%.",
    color: "bg-sky"
  },
  {
    icon: Zap,
    metric: "10x",
    label: "Lead Generation",
    title: "AI Automation",
    desc: "Built AI-powered lead generation funnels with automated nurturing, increasing qualified leads by 10x.",
    color: "bg-accent"
  }
];

const CaseStudiesSection = () => (
  <section id="casestudies" className="py-16 md:py-24 lg:py-28 section-alt">

    <div className="container mx-auto px-4 max-w-7xl">

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >

        <div className="inline-flex items-center gap-2 bg-periwinkle/10 rounded-full px-4 py-1.5 mb-4">
          <span className="text-sm font-semibold text-periwinkle">
            Results
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Our AI Client Case Studies
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Real measurable results achieved through AI-powered marketing strategies.
        </p>

      </motion.div>


      {/* GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        {cases.map((c, i) => (

          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-background rounded-2xl p-6 md:p-8 border border-border/50 
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
            text-center group"
          >

            {/* ICON */}

            <div
              className={`${c.color} rounded-2xl p-4 w-fit mx-auto mb-6 
              group-hover:scale-110 transition`}
            >
              <c.icon className="h-7 w-7 md:h-8 md:w-8 text-primary-foreground" />
            </div>


            {/* METRIC */}

            <p className="text-4xl md:text-5xl font-bold mb-1 text-primary">
              {c.metric}
            </p>


            {/* LABEL */}

            <p className="text-sm text-muted-foreground mb-4">
              {c.label}
            </p>


            {/* TITLE */}

            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              {c.title}
            </h3>


            {/* DESCRIPTION */}

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {c.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </div>

  </section>
);

export default CaseStudiesSection;