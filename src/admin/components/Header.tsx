import { LogOut } from "lucide-react";

const Header = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="bg-white border-b px-6 py-4 flex justify-between items-center">

      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
            A
          </div>
          <span className="text-sm">Admin</span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 text-red-500 hover:text-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </div>
  );
};

export default Header;