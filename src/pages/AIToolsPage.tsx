
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Search,
  TrendingUp,
  Lightbulb,
  Brain,
  Bot,
  Calculator,
  GitBranch,
  Zap,
  BarChart3,
  Globe,
  Palette,
  Video,
  Star
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

const AIToolsPage = () => {

  const [auditUrl, setAuditUrl] = useState("");

  return (
    <div className="min-h-screen bg-background">

      

      {/* HERO */}

      <section className="min-h-[80vh] flex items-center bg-primary text-primary-foreground">

        <div className="container mx-auto px-4 text-center py-20">

          <motion.div {...fadeIn}>

            <span className="inline-block bg-accent/20 text-accent rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              AI Powered Marketing Tools
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Free AI Marketing Tools
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
              Leverage the power of AI to audit, plan, and optimize your marketing strategy.
            </p>

            <Button size="lg" className="rounded-full px-8">
              Try Free Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

          </motion.div>

        </div>

      </section>

      {/* TOOLS */}

      <section className="py-24">

        <div className="container mx-auto px-4">

          <motion.div {...fadeIn} className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our AI Tool Suite
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto">
              Each tool provides powerful AI insights to improve marketing performance.
            </p>

          </motion.div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {[
              { icon: Search, title: "AI Website Audit", desc: "Analyze SEO, speed and marketing performance." },
              { icon: TrendingUp, title: "AI Marketing Planner", desc: "Generate a full marketing strategy." },
              { icon: Lightbulb, title: "AI Content Generator", desc: "Generate blogs, captions and ads." },
              { icon: Bot, title: "AI Chatbot Consultant", desc: "AI assistant for marketing questions." },
              { icon: Calculator, title: "Marketing ROI Calculator", desc: "Calculate marketing ROI." },
              { icon: GitBranch, title: "AI Funnel Planner", desc: "Build optimized marketing funnels." }
            ].map((tool, i) => {

              const Icon = tool.icon;

              return (

                <motion.div
                  key={tool.title}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border rounded-2xl p-6 text-center hover:shadow-xl transition"
                >

                  <div className="bg-primary rounded-xl p-4 w-fit mx-auto mb-4">

                    <Icon className="text-primary-foreground h-6 w-6" />

                  </div>

                  <h3 className="font-semibold mb-2">
                    {tool.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {tool.desc}
                  </p>

                  <Button variant="outline" size="sm">
                    Try Tool
                  </Button>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>


      {/* AUDIT TOOL */}

      <section className="py-24 bg-muted/40">

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.div {...fadeIn}>

            <h2 className="text-3xl font-bold mb-4">
              Try Our AI Website Audit
            </h2>

            <p className="text-muted-foreground mb-6">
              Enter your website URL and get instant SEO analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">

              <input
                type="url"
                value={auditUrl}
                onChange={(e) => setAuditUrl(e.target.value)}
                placeholder="https://yourwebsite.com"
                className="flex-1 px-4 py-3 rounded-full border"
              />

              <Button className="rounded-full px-6">
                Analyze
                <Search className="ml-2 h-4 w-4" />
              </Button>

            </div>

            <div className="space-y-2 text-sm text-muted-foreground">

              {[
                "SEO Score",
                "Page Speed",
                "Mobile Check",
                "Content Quality"
              ].map((item) => (

                <div key={item} className="flex items-center gap-2">

                  <Star className="h-3 w-3 text-accent" />
                  {item}

                </div>

              ))}

            </div>

          </motion.div>


          <motion.div {...fadeIn}>

            <div className="bg-primary/10 rounded-3xl h-80 flex items-center justify-center">

              <Search className="h-24 w-24 text-primary opacity-40" />

            </div>

          </motion.div>

        </div>

      </section>

      

    </div>
  );
};

export default AIToolsPage;