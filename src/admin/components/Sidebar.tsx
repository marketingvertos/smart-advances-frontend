import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Folder,
  BarChart3,
  Image,
  Settings
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Blogs", path: "/admin/blogs", icon: <FileText size={18} /> },
    { name: "Categories", path: "/admin/categories", icon: <Folder size={18} /> },
    { name: "Leads", path: "/admin/leads", icon: <BarChart3 size={18} /> },
    { name: "Media", path: "/admin/media", icon: <Image size={18} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-64 bg-white border-r min-h-screen p-5">

      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <ul className="space-y-2">
        {menu.map((item) => {
          const active = location.pathname.startsWith(item.path);

          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  active
                    ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default Sidebar;