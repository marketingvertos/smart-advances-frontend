import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

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
      ? `http://localhost:8080/${blog.featured_image}`
      : "https://placehold.co/600x400?text=No+Image";

  const getExcerpt = (content?: string) =>
    content ? content.replace(/<[^>]+>/g, "").slice(0, 120) + "..." : "";

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">

          <h1 className="text-4xl font-bold mb-8 text-center">
            AI Marketing Blog
          </h1>

          <div className="max-w-xl mx-auto mb-10">
            <input
              type="text"
              placeholder="Search blog..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {loading ? (
            <div className="text-center py-20 text-gray-400">Loading blogs...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">No blogs found</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((blog) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={getImage(blog)}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-2">
                      {blog.created_at
                        ? new Date(blog.created_at).toLocaleDateString("en-IN", {
                            year: "numeric", month: "short", day: "numeric"
                          })
                        : ""}
                    </p>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      {getExcerpt(blog.content || blog.meta_description)}
                    </p>
                    <span className="inline-block mt-4 text-sm text-blue-600 font-medium">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default BlogPage;