import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_BASE from "../config/api";

interface Blog {
  id: number;
  title: string;
  slug: string;
  content?: string;
  featured_image?: string;
  created_at?: string;
  meta_title?: string;
  meta_description?: string;
}

const SingleBlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/blogs`)
      .then((r) => r.json())
      .then((data) => {
        const all = Array.isArray(data) ? data : data.data || [];
        const found = all.find((b: Blog) => b.slug === slug);
        setBlog(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="pt-32 text-center text-gray-400">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="pt-32 text-center">
        <p className="text-gray-400 text-lg mb-4">Blog not found</p>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Back */}
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800 mb-8 transition-colors"
          >
            ← Back to Blogs
          </Link>

          {/* Featured Image */}
          {blog.featured_image && (
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={`http://localhost:8080/${blog.featured_image}`}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {blog.title}
          </h1>

          {/* Date */}
          <p className="text-sm text-gray-400 mb-8">
            {blog.created_at
              ? new Date(blog.created_at).toLocaleDateString("en-IN", {
                  year: "numeric", month: "long", day: "numeric"
                })
              : ""}
          </p>

          {/* Divider */}
          <hr className="border-gray-200 mb-8" />

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content || "" }}
          />

        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;