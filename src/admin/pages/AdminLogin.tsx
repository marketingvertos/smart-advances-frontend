import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8080/api";

const AdminLogin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      console.log("LOGIN RESPONSE:", data); // ✅ debug

      if (data.success) {

        // ✅ Proper storage
        localStorage.setItem("admin", "true");
        localStorage.setItem("admin_email", email);

        // 👉 agar backend token bhej raha hai to use bhi save karo
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        navigate("/admin/dashboard");

      } else {
        alert(data.message || "Invalid login");
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow rounded w-[350px]"
      >

        <h2 className="text-xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bg-black text-white w-full p-2">
          Login
        </button>

      </form>

    </div>
  );
};

export default AdminLogin;