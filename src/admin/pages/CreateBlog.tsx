import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE from "../../config/api";

interface Category {
  id: string;
  name: string;
}

const CreateBlog = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/categories`)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    setSlug(generateSlug(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("category_id", category);
    formData.append("meta_title", metaTitle);
    formData.append("meta_description", metaDescription);
    if (image) {
      formData.append("featured_image", image);
    }

    await fetch(`${API_BASE}/blogs`, {
      method: "POST",
      body: formData
    });

    alert("Blog Created Successfully");
    navigate("/admin/blogs");
  };

  return (
    <div className="max-w-4xl">

      <h1 className="text-2xl font-bold mb-6">
        Create Blog
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow space-y-4"
      >

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block mb-1 font-medium">Slug</label>
          <input
            type="text"
            value={slug}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Image */}
        <div>
          <label className="block mb-1 font-medium">Featured Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Meta Title */}
        <div>
          <label className="block mb-1 font-medium">Meta Title (SEO)</label>
          <input
            type="text"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Meta Description */}
        <div>
          <label className="block mb-1 font-medium">Meta Description (SEO)</label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            rows={3}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Publish Blog
        </button>

      </form>
    </div>
  );
};

export default CreateBlog;