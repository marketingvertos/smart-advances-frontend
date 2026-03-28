import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE from "@/config/api";

const fixImageUrl = (url?: string | null): string => {
  if (!url) return "";
  return url.replace("/api/uploads/", "/uploads/");
};

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs]       = useState<any[]>([]);
  const [loading, setLoading]   = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchBlogs = () => {
    setLoading(true);
    fetch(`${API_BASE}/blogs`)
      .then((r) => r.json())
      .then((data) => {
        const all = Array.isArray(data) ? data : data.data || [];
        setBlogs(all);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    setDeleting(id);
    await fetch(`${API_BASE}/blogs/${id}`, { method: "DELETE" });
    setDeleting(null);
    fetchBlogs();
  };

  return (
    <div>
      {/* ── HEADER ── */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blogs</h1>
          <p className="text-sm text-gray-500 mt-0.5">{blogs.length} total posts</p>
        </div>
        <button
          onClick={() => navigate("/admin/blogs/create")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          + New Blog
        </button>
      </div>

      {/* ── LOADING ── */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>

      ) : blogs.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-400 text-4xl mb-3">📝</p>
          <p className="text-gray-600 font-medium mb-1">No blogs yet</p>
          <p className="text-gray-400 text-sm mb-4">Create your first blog post</p>
          <button
            onClick={() => navigate("/admin/blogs/create")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            + Create Blog
          </button>
        </div>

      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Blog</th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Status</th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Date</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50 transition-colors">

                  {/* ── BLOG INFO ── */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {blog.featured_image ? (
                        <img
                          src={fixImageUrl(blog.featured_image)}
                          alt={blog.title}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-gray-100"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 text-lg">
                          📝
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 truncate max-w-xs">{blog.title}</p>
                        <p className="text-xs text-gray-400 truncate max-w-xs mt-0.5">/blog/{blog.slug}</p>
                      </div>
                    </div>
                  </td>

                  {/* ── STATUS ── */}
                  <td className="px-4 py-4 hidden md:table-cell">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      blog.status === "publish"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                    }`}>
                      {blog.status === "publish" ? "● Published" : "○ Draft"}
                    </span>
                  </td>

                  {/* ── DATE ── */}
                  <td className="px-4 py-4 hidden md:table-cell text-xs text-gray-400">
                    {blog.created_at
                      ? new Date(blog.created_at).toLocaleDateString("en-IN", {
                          day: "numeric", month: "short", year: "numeric"
                        })
                      : "—"}
                  </td>

                  {/* ── ACTIONS ── */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => navigate(`/admin/blogs/edit/${blog.id}`)}
                        className="px-3 py-1.5 text-xs font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        disabled={deleting === blog.id}
                        className="px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
                      >
                        {deleting === blog.id ? "..." : "Delete"}
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Blogs;