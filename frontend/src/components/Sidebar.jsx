import {
  LayoutDashboard,
  Package,
  CreditCard,
  Brain,
  User,
  LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <div
      style={{
        width: "240px",
        height: "100vh",
        background:
          "linear-gradient(to bottom,#020B3F,#08135C)",
        borderRight:
          "1px solid rgba(255,255,255,0.08)",
        padding: "30px 20px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >

      {/* LOGO */}
      <h1
        style={{
          color: "#38bdf8",
          fontSize: "36px",
          marginBottom: "50px",
        }}
      >
        Smart Artisan
      </h1>

      {/* MENU */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >

        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          path="/dashboard"
        />

        <SidebarItem
          icon={<Package size={20} />}
          text="Products"
          path="/products"
        />

        <SidebarItem
          icon={<CreditCard size={20} />}
          text="Payments"
          path="/payments"
        />

        <SidebarItem
          icon={<Brain size={20} />}
          text="AI Insights"
          path="/ai"
        />

        <SidebarItem
          icon={<User size={20} />}
          text="Profile"
          path="/profile"
        />

      </div>

      {/* LOGOUT */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          width: "80%",
        }}
      >

        <button
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "14px",
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
          }}
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

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
          gap: "14px",
          padding: "16px",
          borderRadius: "14px",
          color: "white",
          background: "#111c63",
          transition: "0.3s",
        }}
      >

        {icon}

        {text}

      </div>

    </Link>
  );
}