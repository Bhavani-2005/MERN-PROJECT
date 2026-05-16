import {
  LayoutDashboard,
  Factory,
  CreditCard,
  FileText,
  Bot,
  User,
  Users,
  Shield,
  LogOut,
  Sparkles,
} from "lucide-react";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function Sidebar() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const role =
    user?.role || "artisan";

  /* LOGOUT */

  const handleLogout =
    () => {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      navigate("/");
    };

  /* ADMIN MENUS */

  const adminMenus = [

    {
      title: "Dashboard",
      icon:
        <LayoutDashboard size={18} />,
      path: "/admin",
    },

    {
      title: "Artisans",
      icon:
        <Users size={18} />,
      path: "/artisans",
    },

    {
      title: "Production",
      icon:
        <Factory size={18} />,
      path: "/production",
    },

    {
      title: "Payments",
      icon:
        <CreditCard size={18} />,
      path: "/payments",
    },

    {
      title: "AI Advisory",
      icon:
        <Bot size={18} />,
      path: "/ai",
    },

    {
      title:
        "Government Schemes",
      icon:
        <Sparkles size={18} />,
      path: "/schemes",
    },

    {
      title: "Documents",
      icon:
        <FileText size={18} />,
      path: "/documents",
    },

  ];

  /* CLUSTER MENUS */

  const clusterMenus = [

    {
      title: "Dashboard",
      icon:
        <LayoutDashboard size={18} />,
      path: "/cluster",
    },

    {
      title: "Production",
      icon:
        <Factory size={18} />,
      path: "/production",
    },

    {
      title: "Payments",
      icon:
        <CreditCard size={18} />,
      path: "/payments",
    },

    {
      title: "AI Advisory",
      icon:
        <Bot size={18} />,
      path: "/ai",
    },

    {
      title:
        "Government Schemes",
      icon:
        <Sparkles size={18} />,
      path: "/schemes",
    },

    {
      title: "Documents",
      icon:
        <FileText size={18} />,
      path: "/documents",
    },

  ];

  /* ARTISAN MENUS */

  const artisanMenus = [

    {
      title: "Dashboard",
      icon:
        <LayoutDashboard size={18} />,
      path: "/artisan",
    },

    {
      title:
        "My Production",
      icon:
        <Factory size={18} />,
      path: "/production",
    },

    {
      title:
        "My Payments",
      icon:
        <CreditCard size={18} />,
      path: "/payments",
    },

    {
      title:
        "AI Advisory",
      icon:
        <Bot size={18} />,
      path: "/ai",
    },

    {
      title:
        "Government Schemes",
      icon:
        <Sparkles size={18} />,
      path: "/schemes",
    },

    {
      title: "Documents",
      icon:
        <FileText size={18} />,
      path: "/documents",
    },

    {
      title: "Profile",
      icon:
        <User size={18} />,
      path: "/profile",
    },

  ];

  /* ROLE MENUS */

  const menus =

    role === "admin"
      ? adminMenus

      : role ===
        "cluster-head"

      ? clusterMenus

      : artisanMenus;

  return (

    <div
      style={{

        width: "250px",

        height: "100vh",

        position: "fixed",

        left: 0,

        top: 0,

        background:
          "linear-gradient(180deg,#050816 0%, #091227 45%, #0d1631 100%)",

        borderRight:
          "1px solid rgba(255,255,255,0.05)",

        display: "flex",

        flexDirection:
          "column",

        justifyContent:
          "space-between",

        padding: "18px 16px",

        fontFamily:
          "'Inter', sans-serif",

        zIndex: 999,

        overflowY:
          "auto",

        boxShadow:
          "0 10px 40px rgba(0,0,0,0.45)",
      }}
    >

      {/* TOP */}

      <div>

        {/* LOGO */}

        <div
          style={{
            marginBottom:
              "28px",
          }}
        >

          <h1
            style={{
              color:
                "#38bdf8",

              fontSize:
                "22px",

              fontWeight:
                "800",

              letterSpacing:
                "-0.5px",

              marginBottom:
                "6px",

              marginTop: 0,
            }}
          >
            Smart Artisan
          </h1>

          <p
            style={{
              color:
                "#94a3b8",

              fontSize:
                "12px",

              margin: 0,

              lineHeight:
                "18px",
            }}
          >
            Empowering artisan
            communities
          </p>

        </div>

        {/* USER CARD */}

        <div
          style={{

            display: "flex",

            alignItems:
              "center",

            gap: "12px",

            background:
              "rgba(255,255,255,0.04)",

            padding: "14px",

            borderRadius:
              "18px",

            marginBottom:
              "24px",

            border:
              "1px solid rgba(255,255,255,0.05)",

            backdropFilter:
              "blur(14px)",
          }}
        >

          <div
            style={{

              width: "46px",

              height: "46px",

              borderRadius:
                "14px",

              background:
                "linear-gradient(135deg,#38bdf8,#6366f1)",

              display: "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              boxShadow:
                "0 10px 25px rgba(56,189,248,0.25)",
            }}
          >

            <Shield
              size={18}
              color="white"
            />

          </div>

          <div>

            <h3
              style={{

                margin: 0,

                color:
                  "white",

                fontSize:
                  "14px",

                fontWeight:
                  "700",
              }}
            >
              {user?.name ||
                "User"}
            </h3>

            <p
              style={{

                marginTop:
                  "4px",

                marginBottom: 0,

                color:
                  "#94a3b8",

                fontSize:
                  "11px",

                textTransform:
                  "capitalize",
              }}
            >
              {role}
            </p>

          </div>

        </div>

        {/* MENUS */}

        <div
          style={{

            display: "flex",

            flexDirection:
              "column",

            gap: "10px",
          }}
        >

          {menus.map(
            (
              item,
              index
            ) => {

              const isActive =

                location.pathname ===
                item.path;

              return (

                <Link
                  key={index}

                  to={item.path}

                  style={{
                    textDecoration:
                      "none",
                  }}
                >

                  <div
                    style={{

                      display: "flex",

                      alignItems:
                        "center",

                      gap: "12px",

                      padding:
                        "13px 16px",

                      borderRadius:
                        "16px",

                      background:

                        isActive

                          ? "linear-gradient(135deg,#2563eb,#38bdf8)"

                          : "rgba(255,255,255,0.03)",

                      color:

                        isActive
                          ? "#ffffff"
                          : "#cbd5e1",

                      fontWeight:
                        "600",

                      transition:
                        "all 0.3s ease",

                      border:

                        isActive

                          ? "1px solid rgba(56,189,248,0.35)"

                          : "1px solid transparent",

                      boxShadow:

                        isActive

                          ? "0 8px 24px rgba(56,189,248,0.20)"

                          : "none",

                      backdropFilter:
                        "blur(12px)",
                    }}
                  >

                    {item.icon}

                    <span
                      style={{
                        fontSize:
                          "13px",

                        lineHeight:
                          "18px",
                      }}
                    >
                      {
                        item.title
                      }
                    </span>

                  </div>

                </Link>
              );
            }
          )}

        </div>

      </div>

      {/* LOGOUT */}

      <button
        onClick={
          handleLogout
        }

        style={{

          border: "none",

          padding:
            "14px",

          borderRadius:
            "16px",

          background:
            "linear-gradient(135deg,#ef4444,#dc2626)",

          color: "white",

          fontWeight:
            "700",

          cursor:
            "pointer",

          fontSize:
            "14px",

          display: "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          gap: "8px",

          transition:
            "0.3s ease",

          boxShadow:
            "0 10px 25px rgba(239,68,68,0.25)",
        }}
      >

        <LogOut size={16} />

        Logout

      </button>

    </div>
  );
}