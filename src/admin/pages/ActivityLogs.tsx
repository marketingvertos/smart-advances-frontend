import { useEffect, useState } from "react";

interface Log {
  id: number;
  user: string;
  action: string;
  details: string;
  created_at: string;
}

const ActivityLogs = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API ready hone tak dummy data
    setLogs([
      { id: 1, user: "Admin", action: "LOGIN", details: "Admin logged in", created_at: new Date().toISOString() },
      { id: 2, user: "Admin", action: "CREATE", details: "New blog created", created_at: new Date().toISOString() },
    ]);
    setLoading(false);
  }, []);

  if (loading) return <div className="text-sm text-gray-400">Loading...</div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Activity Logs</h1>
        <p className="text-sm text-gray-500">Track all admin actions</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">User</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Action</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Details</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{log.user}</td>
                <td className="px-4 py-3">
                  <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium">
                    {log.action}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{log.details}</td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(log.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLogs;