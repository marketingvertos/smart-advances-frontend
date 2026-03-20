const Dashboard = () => {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Total Leads</p>
          <h3 className="text-2xl font-bold mt-2">3</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Blogs</p>
          <h3 className="text-2xl font-bold mt-2">2</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Categories</p>
          <h3 className="text-2xl font-bold mt-2">3</h3>
        </div>

      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-4">Recent Activity</h3>

        <ul className="text-sm text-gray-600 space-y-2">
          <li>✅ Blog created</li>
          <li>📁 Category added</li>
          <li>📩 New lead received</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;