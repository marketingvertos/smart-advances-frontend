import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE from "../../config/api";

interface Blog {
  id: number;
  title: string;
  slug: string;
  status?: string;
  created_at?: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API_BASE}/blogs`);
      const data = await res.json();
      if (Array.isArray(data)) setBlogs(data);
      else if (data.data) setBlogs(data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: number) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await fetch(`${API_BASE}/blogs/${id}`, { method: "DELETE" });
      fetchBlogs();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blogs</h1>
          <p className="text-sm text-gray-500 mt-1">{blogs.length} total posts</p>
        </div>
        <Link
          to="/admin/blogs/create"
          className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          + Create Blog
        </Link>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="text-center py-16 text-gray-400 text-sm">Loading blogs...</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {["#", "Title", "Slug", "Status", "Date", "Actions"].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-16 text-gray-400">
                    No blogs found
                  </td>
                </tr>
              ) : (
                filtered.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-gray-400">{blog.id}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-800">{blog.title}</td>
                    <td className="px-5 py-3.5 text-gray-400 font-mono text-xs">{blog.slug}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        blog.status === "publish"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {blog.status === "publish" ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-400 text-xs">
                      {blog.created_at
                        ? new Date(blog.created_at).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="px-5 py-3.5 space-x-2">
                      <Link
                        to={`/admin/blogs/edit/${blog.id}`}
                        className="bg-yellow-400 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-yellow-500 transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteBlog(blog.id)}
                        className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
};

export default Blogs;