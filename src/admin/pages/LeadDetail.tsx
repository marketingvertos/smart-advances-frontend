import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_BASE from "../../config/api";

const LeadDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lead, setLead] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/leads/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setLead(data);
        setStatus(data.status || "new");
        setLoading(false);
      });
  }, [id]);

  const updateStatus = async () => {
    await fetch(`${API_BASE}/leads/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    alert("Status updated!");
  };

  if (loading) return <div className="text-gray-400 text-sm">Loading...</div>;
  if (!lead) return <div className="text-gray-400 text-sm">Lead not found</div>;

  const STATUS_COLOR: Record<string, string> = {
    new:       "bg-blue-100 text-blue-700",
    contacted: "bg-yellow-100 text-yellow-700",
    converted: "bg-green-100 text-green-700",
  };

  const fields = [
    { label: "Full Name",    value: lead.name },
    { label: "Email",        value: lead.email },
    { label: "Phone",        value: lead.phone || "—" },
    { label: "Message",      value: lead.message || "—" },
    { label: "Submitted On", value: lead.created_at ? new Date(lead.created_at).toLocaleString() : "—" },
  ];

  return (
    <div className="max-w-2xl">

      <button
        onClick={() => navigate("/admin/leads")}
        className="text-sm text-gray-500 hover:text-gray-800 mb-5 flex items-center gap-1 transition-colors"
      >
        ← Back to Leads
      </button>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-5">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
            {lead.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{lead.name}</h1>
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_COLOR[lead.status || "new"]}`}>
              {lead.status || "new"}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5 space-y-4">
          {fields.map((f) => (
            <div key={f.label} className="grid grid-cols-3 gap-4">
              <span className="text-sm text-gray-500 font-medium">{f.label}</span>
              <span className="col-span-2 text-sm text-gray-800">{f.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Update Status</h2>
        <div className="flex gap-3">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="flex-1 border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
          </select>
          <button
            onClick={updateStatus}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            Update
          </button>
        </div>
      </div>

    </div>
  );
};

export default LeadDetail;