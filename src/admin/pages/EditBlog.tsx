import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_BASE from "../../config/api";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/categories`)
      .then((r) => r.json())
      .then(setCategories);

    fetch(`${API_BASE}/blogs/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setTitle(data.title || "");
        setSlug(data.slug || "");
        setContent(data.content || "");
        setCategory(data.category_id || "");
        setStatus(data.status || "draft");
        setMetaTitle(data.meta_title || "");
        setMetaDescription(data.meta_description || "");
        if (data.featured_image) {
          setImagePreview(`http://localhost:8080/${data.featured_image}`);
        }
      });
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const updateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("category_id", category);
    formData.append("status", status);
    formData.append("meta_title", metaTitle);
    formData.append("meta_description", metaDescription);
    if (image) formData.append("featured_image", image);
    await fetch(`${API_BASE}/blogs/${id}`, { method: "POST", body: formData });
    setLoading(false);
    navigate("/admin/blogs");
  };

  const inputClass = "w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Edit Blog</h1>
        <p className="text-sm text-gray-500 mt-1">Update your blog post</p>
      </div>

      <form onSubmit={updateBlog} className="space-y-5">

        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Basic Info</h2>
          <div>
            <label className={labelClass}>Title *</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} required />
          </div>
          <div>
            <label className={labelClass}>Slug</label>
            <div className="flex items-center">
              <span className="text-xs text-gray-400 bg-gray-100 px-3 py-2.5 rounded-l-lg border border-r-0 border-gray-200">/blog/</span>
              <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)}
                className="flex-1 border border-gray-200 rounded-r-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Settings</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
                <option value="">Select Category</option>
                {categories.map((cat: any) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className={inputClass}>
                <option value="draft">Draft</option>
                <option value="publish">Published</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Featured Image</h2>
          {imagePreview ? (
            <div className="relative">
              <img src={imagePreview} alt="Preview" className="w-full h-52 object-cover rounded-lg border border-gray-200" />
              <button type="button" onClick={() => { setImage(null); setImagePreview(null); }}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2.5 py-1 rounded-lg">Remove</button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all">
              <span className="text-2xl text-gray-300 mb-2">↑</span>
              <span className="text-sm text-gray-500">Click to upload image</span>
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Content</h2>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={10} className={inputClass} required />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">SEO</h2>
          <div>
            <label className={labelClass}>Meta Title</label>
            <input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className={inputClass} maxLength={60} />
            <p className="text-xs text-gray-400 mt-1">{metaTitle.length}/60</p>
          </div>
          <div>
            <label className={labelClass}>Meta Description</label>
            <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={3} className={inputClass} maxLength={160} />
            <p className="text-xs text-gray-400 mt-1">{metaDescription.length}/160</p>
          </div>
        </div>

        <div className="flex gap-3 pb-8">
          <button type="submit" disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium disabled:opacity-50 transition-colors">
            {loading ? "Updating..." : "Update Blog"}
          </button>
          <button type="button" onClick={() => navigate("/admin/blogs")}
            className="border border-gray-300 text-gray-600 px-6 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;