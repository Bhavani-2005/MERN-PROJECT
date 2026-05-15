import {
  LayoutDashboard,
  Package,
  CreditCard,
  Brain,
  User,
  LogOut,
  FileText,
  FolderOpen,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (

    <div
      style={{
        width: "240px",
        height: "100vh",
        background:
          "linear-gradient(to bottom,#020B3F,#08135C)",
        borderRight:
          "1px solid rgba(255,255,255,0.08)",
        padding: "24px 18px",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div
          style={{
            marginBottom: "40px",
          }}
        >

          <h1
            style={{
              color: "#38bdf8",
              fontSize: "26px",
              marginBottom: "6px",
              fontWeight: "700",
            }}
          >
            Smart Artisan
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "13px",
              lineHeight: "20px",
            }}
          >
            Empowering artisan communities
          </p>

        </div>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >

          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            text="Dashboard"
            path="/dashboard"
          />

          <SidebarItem
            icon={<Package size={18} />}
            text="Production"
            path="/products"
          />

          <SidebarItem
            icon={<CreditCard size={18} />}
            text="Wage Payments"
            path="/payments"
          />

          <SidebarItem
            icon={<Brain size={18} />}
            text="AI Advisory"
            path="/ai"
          />

          <SidebarItem
            icon={<FileText size={18} />}
            text="Government Schemes"
            path="/schemes"
          />

          <SidebarItem
            icon={<FolderOpen size={18} />}
            text="Documents"
            path="/documents"
          />

          <SidebarItem
            icon={<User size={18} />}
            text="Profile"
            path="/profile"
          />

        </div>

      </div>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          background:
            "linear-gradient(135deg,#ef4444,#dc2626)",
          color: "white",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >

        <LogOut size={18} />

        Logout

      </button>

    </div>
  );
}

function SidebarItem({
  icon,
  text,
  path,
}) {

  return (

    <Link
      to={path}
      style={{
        textDecoration: "none",
      }}
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "14px 16px",
          borderRadius: "12px",
          color: "white",
          background: "#111c63",
          transition: "0.3s",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >

        {icon}

        {text}

      </div>

    </Link>
  );
}