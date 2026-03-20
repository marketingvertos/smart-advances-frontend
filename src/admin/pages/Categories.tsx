import { useState, useEffect } from "react";
import API_BASE from "../../config/api";

interface Category {
  id: number;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [loading, setLoading] = useState(true);

  const load = () => {
    fetch(`${API_BASE}/categories`)
      .then((r) => r.json())
      .then((data) => { setCategories(data); setLoading(false); });
  };

  useEffect(() => { load(); }, []);

  const addCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    await fetch(`${API_BASE}/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setName("");
    load();
  };

  const updateCategory = async (id: number) => {
    await fetch(`${API_BASE}/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName }),
    });
    setEditId(null);
    load();
  };

  const deleteCategory = async (id: number) => {
    if (!confirm("Delete this category?")) return;
    await fetch(`${API_BASE}/categories/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your blog categories</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Add New Category</h2>
        <form onSubmit={addCategory} className="flex gap-3">
          <input
            type="text" value={name} onChange={(e) => setName(e.target.value)}
            className="flex-1 border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Category name..." required
          />
          <button type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Add
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
          <span className="text-xs font-semibold text-gray-500 uppercase">
            {categories.length} Categories
          </span>
        </div>
        {loading ? (
          <div className="text-center py-12 text-gray-400 text-sm">Loading...</div>
        ) : categories.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-sm">No categories yet!</div>
        ) : (
          <ul>
            {categories.map((cat, i) => (
              <li key={cat.id}
                className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-5">{i + 1}</span>
                  {editId === cat.id ? (
                    <input autoFocus value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border border-blue-400 rounded-lg px-2.5 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") updateCategory(cat.id);
                        if (e.key === "Escape") setEditId(null);
                      }}
                    />
                  ) : (
                    <span className="text-sm font-medium text-gray-800">{cat.name}</span>
                  )}
                </div>
                <div className="flex gap-2">
                  {editId === cat.id ? (
                    <>
                      <button onClick={() => updateCategory(cat.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-green-600">
                        Save
                      </button>
                      <button onClick={() => setEditId(null)}
                        className="border border-gray-300 text-gray-500 px-3 py-1 rounded-lg text-xs">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => { setEditId(cat.id); setEditName(cat.name); }}
                        className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-xs hover:bg-yellow-500">
                        Edit
                      </button>
                      <button onClick={() => deleteCategory(cat.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-red-600">
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Categories;