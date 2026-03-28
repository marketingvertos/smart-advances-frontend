import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import API_BASE from "../config/api";

interface Blog {
  id: number;
  title: string;
  slug: string;
  content?: string;
  featured_image?: string;
  category_id?: string;
  created_at?: string;
  meta_description?: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const categories = ["All", "AI Tools", "SEO", "Ads", "Content", "Strategy", "Automation"];

// API deta hai: https://domain.com/api/uploads/blogs/xyz.png
// Sahi URL hai: https://domain.com/uploads/blogs/xyz.png
const fixImageUrl = (url?: string | null): string => {
  if (!url) return "";
  return url.replace("/api/uploads/", "/uploads/");
};

const BlogPage = () => {
  const [blogs, setBlogs]         = useState<Blog[]>([]);
  const [search, setSearch]       = useState("");
  const [loading, setLoading]     = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail]         = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/blogs`)
      .then((r) => r.json())
      .then((data) => {
        const published = (Array.isArray(data) ? data : data.data || [])
          .filter((b: any) => b.status === "publish");
        setBlogs(published);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  const getImage = (blog: Blog) =>
    blog.featured_image
      ? fixImageUrl(blog.featured_image)
      : "https://placehold.co/600x400?text=No+Image";

  const getExcerpt = (content?: string) =>
    content ? content.replace(/<[^>]+>/g, "").slice(0, 120) + "..." : "";

  const getReadTime = (content?: string) => {
    const words = content ? content.replace(/<[^>]+>/g, "").split(" ").length : 300;
    return `${Math.max(2, Math.ceil(words / 200))} min read`;
  };

  const featuredBlog = filtered[0];
  const restBlogs    = filtered.slice(1);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="bg-[#0B2C5F] pt-20 pb-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/25 border border-[#1E5EFF]/30 rounded-full px-4 py-1.5 mb-5">
              <span className="text-sm font-semibold text-[#93C5FD]">AI Marketing Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI Marketing Blog
            </h1>
            <p className="text-white/65 text-lg max-w-xl mx-auto mb-10">
              Latest insights, strategies, and guides on AI-powered digital marketing.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15 max-w-md mx-auto">
              {[
                { v: "50+",    l: "Articles" },
                { v: "10k+",   l: "Monthly Readers" },
                { v: "Weekly", l: "New Posts" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-xl md:text-2xl font-bold text-white">{s.v}</div>
                  <div className="text-xs text-white/55 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SEARCH + FILTER ── */}
      <section className="bg-[#F4F7FB] py-6 border-b border-[#E2E8F0] sticky top-[68px] z-40">
        <div className="container mx-auto px-4">

          {/* SEARCH */}
          <div className="max-w-xl mx-auto relative mb-5">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-[#E2E8F0] rounded-full px-5 py-3 pl-12 focus:outline-none focus:border-[#1E5EFF] focus:ring-2 focus:ring-[#1E5EFF]/20 bg-white text-[#0F172A] transition text-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1E5EFF] text-xs font-medium transition"
              >
                Clear
              </button>
            )}
          </div>

          {/* CATEGORY PILLS */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-[#1E5EFF] text-white border-[#1E5EFF] shadow-sm"
                    : "bg-white border-[#E2E8F0] text-[#6B7280] hover:border-[#1E5EFF]/40 hover:text-[#1E5EFF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── BLOG CONTENT ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">

          {loading ? (
            <div className="text-center py-20">
              <div className="w-10 h-10 border-4 border-[#1E5EFF] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-[#6B7280]">Loading articles...</p>
            </div>

          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-[#F4F7FB] rounded-2xl p-12 max-w-md mx-auto">
                <Search className="h-12 w-12 text-[#6B7280]/40 mx-auto mb-4" />
                <p className="text-[#0F172A] font-semibold mb-2">No articles found</p>
                <p className="text-[#6B7280] text-sm mb-4">No results for "{search}"</p>
                <button
                  onClick={() => setSearch("")}
                  className="text-[#1E5EFF] text-sm font-medium hover:underline"
                >
                  Clear search
                </button>
              </div>
            </div>

          ) : (
            <>
              {/* FEATURED BLOG */}
              {featuredBlog && !search && (
                <motion.div {...fadeIn} className="mb-12">
                  <Link
                    to={`/blog/${featuredBlog.slug}`}
                    className="group grid md:grid-cols-2 gap-0 bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* IMAGE */}
                    <div className="overflow-hidden h-64 md:h-full bg-[#F4F7FB]">
                      <img
                        src={getImage(featuredBlog)}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#1E5EFF]/10 text-[#1E5EFF] text-xs font-bold rounded-full px-3 py-1">
                          Featured
                        </span>
                        <span className="bg-[#0B2C5F]/8 text-[#0B2C5F] text-xs font-semibold rounded-full px-3 py-1">
                          AI Marketing
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4 group-hover:text-[#1E5EFF] transition-colors leading-snug">
                        {featuredBlog.title}
                      </h2>

                      <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                        {getExcerpt(featuredBlog.content || featuredBlog.meta_description)}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {featuredBlog.created_at
                              ? new Date(featuredBlog.created_at).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })
                              : ""}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {getReadTime(featuredBlog.content)}
                          </span>
                        </div>
                        <span className="text-sm text-[#1E5EFF] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* REST OF BLOGS */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(search ? filtered : restBlogs).map((blog, i) => (
                  <motion.div
                    key={blog.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                    >
                      {/* IMAGE */}
                      <div className="overflow-hidden h-48 bg-[#F4F7FB] flex-shrink-0">
                        <img
                          src={getImage(blog)}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-[#1E5EFF]/10 text-[#1E5EFF] text-xs font-semibold rounded-full px-2.5 py-0.5">
                            AI Marketing
                          </span>
                          <span className="flex items-center gap-1 text-xs text-[#6B7280]">
                            <Clock className="h-3 w-3" />
                            {getReadTime(blog.content)}
                          </span>
                        </div>

                        <h2 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#1E5EFF] transition-colors line-clamp-2 flex-1">
                          {blog.title}
                        </h2>

                        <p className="text-sm text-[#6B7280] line-clamp-2 mb-4">
                          {getExcerpt(blog.content || blog.meta_description)}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
                          <span className="flex items-center gap-1 text-xs text-[#6B7280]">
                            <Calendar className="h-3 w-3" />
                            {blog.created_at
                              ? new Date(blog.created_at).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })
                              : ""}
                          </span>
                          <span className="text-xs text-[#1E5EFF] font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all">
                            Read more <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="py-14 md:py-20 bg-[#F4F7FB]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div {...fadeIn}>
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-12 shadow-sm">

              <div className="inline-flex items-center bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-sm font-semibold text-[#1E5EFF]">Newsletter</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">
                Get AI Marketing Tips Weekly
              </h2>
              <p className="text-[#6B7280] mb-8">
                Join 10,000+ marketers getting actionable AI strategies every week — no fluff, only results.
              </p>

              {subscribed ? (
                <div className="bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-xl p-4">
                  <p className="text-[#1E5EFF] font-semibold">🎉 You're subscribed! Check your inbox.</p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 border border-[#E2E8F0] rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#1E5EFF] focus:ring-2 focus:ring-[#1E5EFF]/20 transition"
                  />
                  <Button
                    onClick={() => { if (email) setSubscribed(true); }}
                    className="bg-[#1E5EFF] text-white rounded-full px-6 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/25 transition whitespace-nowrap"
                  >
                    Subscribe <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              )}

              <p className="text-xs text-[#6B7280] mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;