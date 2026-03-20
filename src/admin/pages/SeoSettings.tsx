import { useEffect, useState } from "react";
import API_BASE from "../../config/api";

const SeoSettings = () => {
  const [form, setForm] = useState({
    meta_title: "",
    meta_description: "",
    og_image: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/seo-settings`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) setForm(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(`${API_BASE}/seo-settings/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) setMsg("Saved!");
    else setMsg("Error saving");
    setSaving(false);
    setTimeout(() => setMsg(""), 3000);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">SEO Settings</h1>
        <p className="text-sm text-gray-500">Configure default SEO metadata</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Default Meta Tags</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Default Meta Title
          </label>
          <input
            type="text"
            value={form.meta_title}
            onChange={(e) => setForm({ ...form, meta_title: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            placeholder="My Website | Best Service"
          />
          <p className="text-xs text-gray-400 mt-1">{form.meta_title.length}/60 characters</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Default Meta Description
          </label>
          <textarea
            value={form.meta_description}
            onChange={(e) => setForm({ ...form, meta_description: e.target.value })}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            placeholder="Brief description..."
          />
          <p className="text-xs text-gray-400 mt-1">{form.meta_description.length}/160 characters</p>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Default OG Image URL
          </label>
          <input
            type="text"
            value={form.og_image}
            onChange={(e) => setForm({ ...form, og_image: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        {msg && <p className="text-sm mb-4 text-green-600">{msg}</p>}
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </div>
  );
};

export default SeoSettings;