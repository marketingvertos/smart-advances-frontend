import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const blogs = [
  {
    title: "AI Marketing Tools for 2026: The Complete Guide",
    date: "Mar 5, 2026",
    tag: "AI Tools",
    color: "bg-periwinkle/10 text-periwinkle"
  },
  {
    title: "AI SEO Strategies That Actually Work",
    date: "Mar 1, 2026",
    tag: "SEO",
    color: "bg-sky/15 text-primary"
  },
  {
    title: "How to Automate Content Creation with AI",
    date: "Feb 25, 2026",
    tag: "Content",
    color: "bg-accent/20 text-accent-foreground"
  },
  {
    title: "AI Ads Optimization: Cut Costs, Boost ROI",
    date: "Feb 20, 2026",
    tag: "Advertising",
    color: "bg-primary/10 text-primary"
  },
  {
    title: "AI for Small Business Marketing: A Starter Guide",
    date: "Feb 15, 2026",
    tag: "Strategy",
    color: "bg-periwinkle/10 text-periwinkle"
  },
  {
    title: "How AI is Changing the Future of Digital Marketing",
    date: "Feb 10, 2026",
    tag: "Trends",
    color: "bg-sky/15 text-primary"
  }
];

const ContentHubSection = () => (
  <section id="blog" className="py-16 md:py-24 lg:py-28 bg-background">

    <div className="container mx-auto px-4 max-w-7xl">

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >

        <div className="inline-flex items-center gap-2 bg-sky/15 rounded-full px-4 py-1.5 mb-4">
          <span className="text-sm font-semibold text-primary">
            Latest Insights
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          AI Content Hub
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Latest insights on AI-powered marketing strategies, automation, and growth tools.
        </p>

      </motion.div>


      {/* BLOG GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        {blogs.map((b, i) => (

          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-background rounded-2xl p-6 md:p-7 border border-border/50 
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >

            {/* TAG */}

            <div
              className={`inline-block ${b.color} text-xs font-semibold rounded-full px-3 py-1 mb-4`}
            >
              {b.tag}
            </div>


            {/* TITLE */}

            <h3
              className="text-foreground font-semibold text-base md:text-lg mb-4 
              leading-snug group-hover:text-primary transition-colors"
            >
              {b.title}
            </h3>


            {/* DATE */}

            <div className="flex items-center gap-2 text-xs text-muted-foreground">

              <Calendar className="h-3.5 w-3.5" />

              {b.date}

            </div>

          </motion.div>

        ))}

      </div>


      {/* VIEW ALL BUTTON */}

      <div className="text-center mt-12 md:mt-14">

        <a href="/blog">

          <Button
            variant="outline"
            className="rounded-full px-6 md:px-8 border-primary/20 hover:border-primary/40 hover:shadow-md transition"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </a>

      </div>

    </div>

  </section>
);

export default ContentHubSection;