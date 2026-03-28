import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Search, TrendingUp, Lightbulb, Loader2 } from "lucide-react";

const AIToolsSection = () => {
  const [auditUrl, setAuditUrl] = useState("");
  const [auditResult, setAuditResult] = useState<any>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const [plannerData, setPlannerData] = useState({
    industry: "",
    budget: "",
    goal: "",
  });
  const [planResult, setPlanResult] = useState<any>(null);

  const [contentTopic, setContentTopic] = useState("");
  const [contentResult, setContentResult] = useState<string[] | null>(null);

  const runAudit = () => {
    if (!auditUrl) return;
    setLoading("audit");

    setTimeout(() => {
      setAuditResult({
        seo: 72,
        contentGap: 45,
        competitor: 68,
        suggestions: [
          "Optimize meta tags with AI keywords",
          "Add schema markup",
          "Improve page load speed",
          "Create AI blog strategy",
        ],
      });
      setLoading(null);
    }, 2000);
  };

  const runPlanner = () => {
    if (!plannerData.industry) return;
    setLoading("planner");

    setTimeout(() => {
      setPlanResult({
        plan: "AI Optimized Growth Strategy",
        funnel: "Awareness → Interest → AI Lead Scoring → Conversion",
        adPlan: "Meta Ads + Google Performance Max",
        timeline: "90 Day AI Marketing Plan",
      });
      setLoading(null);
    }, 2000);
  };

  const runContent = () => {
    if (!contentTopic) return;
    setLoading("content");

    setTimeout(() => {
      setContentResult([
        `Blog: How AI is Transforming ${contentTopic}`,
        `Reel: 3 AI Hacks for ${contentTopic}`,
        `YouTube: Complete AI ${contentTopic} Strategy`,
        `Blog: Top 10 AI Tools for ${contentTopic}`,
        `Reel: Before vs After AI in ${contentTopic}`,
      ]);
      setLoading(null);
    }, 1500);
  };

  return (
    <section id="tools" className="py-16 md:py-24 lg:py-28 section-sky">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sky/15 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-semibold text-primary">
              Try For Free
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            AI Tools for Business Growth
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Try our AI-powered tools to get instant insights and improve your marketing performance.
          </p>
        </motion.div>

        {/* TABS */}
        <Tabs defaultValue="audit" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 bg-secondary/80 mb-8 rounded-full p-1">
            <TabsTrigger value="audit" className="gap-2 rounded-full">
              <Search className="h-4 w-4" /> Audit
            </TabsTrigger>

            <TabsTrigger value="planner" className="gap-2 rounded-full">
              <TrendingUp className="h-4 w-4" /> Planner
            </TabsTrigger>

            <TabsTrigger value="content" className="gap-2 rounded-full">
              <Lightbulb className="h-4 w-4" /> Content
            </TabsTrigger>
          </TabsList>

          {/* AUDIT */}
          <TabsContent value="audit">
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg">
              
              <h3 className="text-lg font-semibold mb-2">AI Marketing Audit</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Enter your website URL to analyze your marketing performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="https://yourwebsite.com"
                  value={auditUrl}
                  onChange={(e) => setAuditUrl(e.target.value)}
                  className="rounded-full"
                />

                <Button onClick={runAudit} disabled={loading === "audit"}>
                  {loading === "audit" ? (
                    <Loader2 className="animate-spin h-4 w-4" />
                  ) : (
                    "Analyze"
                  )}
                </Button>
              </div>

              {auditResult && (
                <motion.div className="mt-8 space-y-5">
                  {[
                    { label: "SEO Score", value: auditResult.seo },
                    { label: "Content Gap", value: auditResult.contentGap },
                    { label: "Competitor Score", value: auditResult.competitor },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.label}</span>
                        <span className="font-bold text-primary">
                          {item.value}%
                        </span>
                      </div>
                      <Progress value={item.value} />
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </TabsContent>

          {/* PLANNER */}
          <TabsContent value="planner">
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg">
              
              <h3 className="text-lg font-semibold mb-2">
                AI Business Growth Planner
              </h3>

              <div className="grid gap-3">
                <Input
                  placeholder="Industry"
                  value={plannerData.industry}
                  onChange={(e) =>
                    setPlannerData({ ...plannerData, industry: e.target.value })
                  }
                />

                <Input
                  placeholder="Monthly Budget"
                  value={plannerData.budget}
                  onChange={(e) =>
                    setPlannerData({ ...plannerData, budget: e.target.value })
                  }
                />

                <Input
                  placeholder="Business Goal"
                  value={plannerData.goal}
                  onChange={(e) =>
                    setPlannerData({ ...plannerData, goal: e.target.value })
                  }
                />

                <Button onClick={runPlanner}>
                  Generate Plan
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* CONTENT */}
          <TabsContent value="content">
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg">
              
              <h3 className="text-lg font-semibold mb-2">
                AI Content Idea Generator
              </h3>

              <div className="flex gap-3">
                <Input
                  placeholder="Topic"
                  value={contentTopic}
                  onChange={(e) => setContentTopic(e.target.value)}
                />

                <Button onClick={runContent}>
                  Generate
                </Button>
              </div>

              {contentResult && (
                <div className="mt-6 space-y-2">
                  {contentResult.map((idea, i) => (
                    <div key={i} className="bg-secondary p-3 rounded-xl">
                      {idea}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

export default AIToolsSection;