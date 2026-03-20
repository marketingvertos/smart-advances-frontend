import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE from "../../config/api";

const API = `${API_BASE}/leads`;

const STATUS_STYLES: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  converted: "bg-green-100 text-green-700",
};

const Leads = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", message: "", status: "new"
  });

  const [editModal, setEditModal] = useState(false);
  const [editForm, setEditForm] = useState<any>(null);

  const fetchLeads = async () => {
  try {
    const res = await fetch(API, {
      cache: 'no-store',
    });
    const data = await res.json();
    setLeads(Array.isArray(data) ? data : data.data || []);
  } catch (err) {
    console.error("Fetch error:", err);
  }
};

  useEffect(() => {
    fetchLeads().finally(() => setLoading(false));
  }, []);

  const deleteLead = async (id: number) => {
    if (!confirm("Delete this lead?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    await fetchLeads();
  };

  const updateStatus = async (id: number, status: string) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  const addLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setShowModal(false);
      setForm({ name: "", email: "", phone: "", message: "", status: "new" });
      await fetchLeads();
    } catch (err) {
      console.error("Add error:", err);
      alert("Failed to add lead!");
    }
  };

  const openEdit = (lead: any) => {
    setEditForm({ ...lead });
    setEditModal(true);
  };

  const saveLead = async (e: React.FormEvent) => {
    e.preventDefault();

    const updateData = {
      name:    editForm.name    || "",
      email:   editForm.email   || "",
      phone:   editForm.phone   || "",
      message: editForm.message || "",
      status:  editForm.status  || "new",
    };

    try {
      await fetch(`${API_BASE}/leads/${editForm.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
});

      setEditModal(false);
      setEditForm(null);

      await fetchLeads();

    } catch (err) {
      console.error("Save error:", err);
      alert("Update failed!");
    }
  };

  const exportCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Message", "Status", "Date"];
    const rows = filtered.map((l) => [
      l.id, l.name, l.email, l.phone || "",
      `"${(l.message || "").replace(/"/g, "'")}"`,
      l.status || "new",
      l.created_at || "",
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "leads.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  const filtered = leads.filter((l) => {
    const matchSearch =
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.email?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone?.includes(search);
    const matchStatus = statusFilter === "all" || (l.status || "new") === statusFilter;
    return matchSearch && matchStatus;
  });

  const countByStatus = (s: string) =>
    leads.filter((l) => (l.status || "new") === s).length;

  const inputClass = "w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-sm text-gray-500 mt-1">{leads.length} total leads</p>
        </div>
        <div className="flex gap-3">
          <button onClick={exportCSV}
            className="border border-gray-300 text-gray-600 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Export CSV
          </button>
          <button onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            + Add Lead
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "New",       key: "new",       color: "text-blue-600"   },
          { label: "Contacted", key: "contacted", color: "text-yellow-600" },
          { label: "Converted", key: "converted", color: "text-green-600"  },
        ].map((s) => (
          <div key={s.key}
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:border-gray-300 transition-colors"
            onClick={() => setStatusFilter(statusFilter === s.key ? "all" : s.key)}>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{s.label}</p>
            <p className={`text-2xl font-bold mt-1 ${s.color}`}>{countByStatus(s.key)}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-4">
        <input type="text" placeholder="Search by name, email or phone..."
          value={search} onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        {loading ? (
          <div className="text-center py-16 text-gray-400 text-sm">Loading leads...</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {["#", "Name", "Email", "Phone", "Message", "Status", "Date", "Actions"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={8} className="text-center py-16 text-gray-400">No leads found</td></tr>
              ) : (
                filtered.map((lead) => (
                  <tr key={lead.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5 text-gray-400">{lead.id}</td>
                    <td className="px-4 py-3.5 font-medium text-gray-800 whitespace-nowrap">{lead.name}</td>
                    <td className="px-4 py-3.5 text-gray-500">{lead.email}</td>
                    <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{lead.phone || "—"}</td>
                    <td className="px-4 py-3.5 text-gray-400 max-w-xs truncate">{lead.message || "—"}</td>
                    <td className="px-4 py-3.5">
                      <select value={lead.status || "new"}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium border-0 cursor-pointer focus:outline-none ${STATUS_STYLES[lead.status || "new"]}`}>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                      </select>
                    </td>
                    <td className="px-4 py-3.5 text-gray-400 text-xs whitespace-nowrap">
                      {lead.created_at ? new Date(lead.created_at).toLocaleDateString("en-IN") : "—"}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex gap-2 whitespace-nowrap">
                        <Link to={`/admin/leads/${lead.id}`}
                          className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-xs hover:bg-blue-100 transition-colors">
                          View
                        </Link>
                        <button onClick={() => openEdit(lead)}
                          className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-xs hover:bg-yellow-500 transition-colors">
                          Edit
                        </button>
                        <button onClick={() => deleteLead(lead.id)}
                          className="bg-red-50 text-red-500 px-3 py-1 rounded-lg text-xs hover:bg-red-100 transition-colors">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Lead Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold text-gray-900">Add New Lead</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
            </div>
            <form onSubmit={addLead} className="space-y-4">
              <div>
                <label className={labelClass}>Name *</label>
                <input type="text" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass} required placeholder="Full name" />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass} required placeholder="email@example.com" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input type="text" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass} placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass} rows={3} placeholder="Lead message..." />
              </div>
              <div>
                <label className={labelClass}>Status</label>
                <select value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className={inputClass}>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="converted">Converted</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit"
                  className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Add Lead
                </button>
                <button type="button" onClick={() => setShowModal(false)}
                  className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Lead Modal */}
      {editModal && editForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold text-gray-900">Edit Lead</h2>
              <button onClick={() => setEditModal(false)} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
            </div>
            <form onSubmit={saveLead} className="space-y-4">
              <div>
                <label className={labelClass}>Name *</label>
                <input type="text" value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input type="text" value={editForm.phone || ""}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea value={editForm.message || ""}
                  onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                  className={inputClass} rows={3} />
              </div>
              <div>
                <label className={labelClass}>Status</label>
                <select value={editForm.status || "new"}
                  onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                  className={inputClass}>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="converted">Converted</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit"
                  className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Save Changes
                </button>
                <button type="button" onClick={() => setEditModal(false)}
                  className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Leads;