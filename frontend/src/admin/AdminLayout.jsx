import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  Factory,
  CreditCard,
  BarChart3,
} from "lucide-react";

export default function AdminLayout() {

  const location =
    useLocation();

  const menus = [

    {
      title: "Overview",
      path: "/admin",
      icon: <LayoutDashboard size={18} />,
    },

    {
      title: "Artisan View",
      path: "/admin/artisans",
      icon: <Users size={18} />,
    },

    {
      title: "Cluster View",
      path: "/admin/clusters",
      icon: <Factory size={18} />,
    },

    {
      title: "Payments",
      path: "/admin/payments",
      icon: <CreditCard size={18} />,
    },

    {
      title: "Analytics",
      path: "/admin/analytics",
      icon: <BarChart3 size={18} />,
    },

  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#08135C)",
        color: "white",
        fontFamily: "Poppins",
      }}
    >

      {/* TOP NAVBAR */}

      <div
        style={{
          height: "80px",
          borderBottom:
            "1px solid rgba(255,255,255,0.08)",

          display: "flex",

          alignItems: "center",

          justifyContent:
            "space-between",

          padding: "0 40px",

          background:
            "rgba(11,20,79,0.9)",

          position: "sticky",

          top: 0,

          zIndex: 100,
        }}
      >

        {/* LOGO */}

        <div>

          <h1
            style={{
              margin: 0,
              color: "#38bdf8",
              fontSize: "24px",
            }}
          >
            Smart Artisan Admin
          </h1>

        </div>

        {/* NAV MENU */}

        <div
          style={{
            display: "flex",
            gap: "18px",
          }}
        >

          {menus.map((item) => (

            <Link
              key={item.path}
              to={item.path}

              style={{
                textDecoration:
                  "none",

                color:
                  location.pathname ===
                  item.path
                    ? "#38bdf8"
                    : "white",

                background:
                  location.pathname ===
                  item.path
                    ? "rgba(56,189,248,0.12)"
                    : "transparent",

                padding:
                  "12px 18px",

                borderRadius:
                  "14px",

                display: "flex",

                alignItems:
                  "center",

                gap: "10px",

                transition:
                  "0.3s",
              }}
            >

              {item.icon}

              {item.title}

            </Link>

          ))}

        </div>

      </div>

      {/* PAGE CONTENT */}

      <div
        style={{
          padding: "30px",
        }}
      >

        <Outlet />

      </div>

    </div>
  );
}