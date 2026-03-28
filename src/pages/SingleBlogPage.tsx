import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_BASE from "../config/api";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content?: string;
  featured_image?: string | null;
  created_at?: string;
  meta_title?: string | null;
  meta_description?: string | null;
  author_name?: string;
  author_bio?: string;
  category_id?: string;
  status?: string;
}

const fixImageUrl = (url?: string | null): string => {
  if (!url) return "";
  return url.replace("/api/uploads/", "/uploads/");
};

// Plain text → HTML converter (fallback agar content HTML nahi hai)
const plainTextToHtml = (text?: string): string => {
  if (!text) return "";
  if (/<[a-z][\s\S]*>/i.test(text)) return text; // already HTML
  const lines = text.split(/\r?\n/);
  let html = "";
  let inList = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { if (inList) { html += "</ul>"; inList = false; } continue; }
    if (/^\d+\.\s+[A-Z]/.test(line) && line.length < 80) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h3>${line}</h3>`; continue;
    }
    if (line.length < 70 && !line.startsWith("✅") && !line.startsWith("•") && /^[A-Z]/.test(line) && !/[.!?]$/.test(line)) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h2>${line}</h2>`; continue;
    }
    if (/^[✅•\-\*→]\s+/.test(line)) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${line.replace(/^[✅•\-\*→]\s+/, "")}</li>`; continue;
    }
    if (inList) { html += "</ul>"; inList = false; }
    html += `<p>${line}</p>`;
  }
  if (inList) html += "</ul>";
  return html;
};

const SingleBlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/blogs`)
      .then((r) => r.json())
      .then((data) => {
        const all: Blog[] = Array.isArray(data) ? data : data.data || [];
        const found = all.find((b) => b.slug === slug);
        setBlog(found || null);
        setRelatedBlogs(
          all.filter((b) => b.slug !== slug && b.status === "publish").slice(0, 3)
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  const formatDate = (dateStr?: string) =>
    dateStr
      ? new Date(dateStr).toLocaleDateString("en-IN", {
          year: "numeric", month: "long", day: "numeric",
        })
      : "";

  // ── LOADING ──
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-9 h-9 border-4 border-[#1E5EFF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ── NOT FOUND ──
  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Blog not found</p>
        <Link to="/blog" className="text-[#1E5EFF] hover:underline text-sm font-medium">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO — matches site's navy header style ── */}
      <section className="bg-[#0B2C5F] pt-24 pb-10">
        <div className="max-w-4xl mx-auto px-4">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-white/80 line-clamp-1">{blog.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 max-w-3xl">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            {blog.created_at && (
              <span className="flex items-center gap-1.5">
                📅 {formatDate(blog.created_at)}
              </span>
            )}
            {blog.author_name && (
              <span className="flex items-center gap-1.5">
                ✍️ <span className="text-white/80">{blog.author_name}</span>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURED IMAGE ── */}
      {blog.featured_image && (
        <div className="max-w-4xl mx-auto px-4 mt-8 mb-0">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={fixImageUrl(blog.featured_image)}
              alt={blog.title}
              className="w-full h-64 md:h-[420px] object-cover"
            />
          </div>
        </div>
      )}

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-12">
        <div
          className="
            prose prose-lg max-w-none
            prose-headings:text-[#0B2C5F] prose-headings:font-extrabold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-3
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#1E5EFF]
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:my-4
            prose-a:text-[#1E5EFF] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#0B2C5F] prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ul:text-gray-600 prose-ul:my-4
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-gray-600
            prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#1E5EFF]
            prose-blockquote:bg-[#f0f4ff] prose-blockquote:px-5 prose-blockquote:py-3
            prose-blockquote:rounded-r-xl prose-blockquote:not-italic
            prose-img:rounded-xl prose-img:shadow-sm prose-img:my-6
            prose-hr:border-gray-100
            prose-code:text-[#1E5EFF] prose-code:bg-[#f0f4ff]
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          "
          dangerouslySetInnerHTML={{ __html: plainTextToHtml(blog.content) }}
        />

        {/* ── AUTHOR ── */}
        {(blog.author_name || blog.author_bio) && (
          <div className="mt-14 pt-10 border-t border-gray-100">
            <div className="flex gap-5 items-start">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #0B2C5F, #1E5EFF)" }}
              >
                {blog.author_name?.charAt(0) ?? "A"}
              </div>
              <div>
                {blog.author_name && (
                  <p className="font-bold text-[#0B2C5F] text-base mb-1">{blog.author_name}</p>
                )}
                {blog.author_bio && (
                  <p className="text-gray-500 text-sm leading-relaxed">{blog.author_bio}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── RELATED POSTS ── */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
              You May Also Like
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {relatedBlogs.map((b) => (
                <Link
                  key={b.id}
                  to={`/blog/${b.slug}`}
                  className="group block no-underline"
                >
                  <div className="rounded-xl overflow-hidden mb-3 shadow-sm bg-gray-50">
                    {b.featured_image ? (
                      <img
                        src={fixImageUrl(b.featured_image)}
                        alt={b.title}
                        className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div
                        className="w-full h-36 flex items-center justify-center text-2xl"
                        style={{ background: "linear-gradient(135deg, #0B2C5F, #1E5EFF)" }}
                      >
                        📝
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-bold text-[#0B2C5F] leading-snug line-clamp-2 group-hover:text-[#1E5EFF] transition-colors">
                    {b.title}
                  </p>
                  {b.created_at && (
                    <p className="text-xs text-gray-400 mt-1.5">{formatDate(b.created_at)}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SingleBlogPage;