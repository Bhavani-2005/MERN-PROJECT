import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  Users,
  Boxes,
  Factory,
  IndianRupee,
  Bell,
  Settings,
} from "lucide-react";

export default function AdminDashboard() {

  /* LIVE STATS */

  const [stats, setStats] =
    useState({
      artisans: 0,
      clusters: 0,
      production: 0,
    });

  /* FETCH DASHBOARD DATA */

  const fetchDashboard =
    async () => {

      try {

        const res =
          await axios.get(
            "http://localhost:5000/api/admin/dashboard"
          );

        setStats(res.data);

      } catch (error) {

        console.log(error);
      }
    };

  /* LOAD DATA */

  useEffect(() => {

    fetchDashboard();

  }, []);

  return (

    <div
      style={{
        display: "flex",

        minHeight: "100vh",

        background:
          "#020617",

        color: "white",

        fontFamily:
          "Poppins",
      }}
    >

      {/* SIDEBAR */}

      <div
        style={{
          width: "250px",

          background:
            "#081028",

          padding: "25px",

          borderRight:
            "1px solid rgba(255,255,255,0.06)",
        }}
      >

        <h2
          style={{
            color: "#38bdf8",
            marginBottom: "40px",
          }}
        >
          Smart Artisan
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >

          <button style={menuStyle}>
            Dashboard
          </button>

          <button style={menuStyle}>
            Artisans
          </button>

          <button style={menuStyle}>
            Clusters
          </button>

          <button style={menuStyle}>
            Production
          </button>

          <button style={menuStyle}>
            Payments
          </button>

          <button style={menuStyle}>
            Reports
          </button>

          <button style={menuStyle}>
            Settings
          </button>

        </div>

      </div>

      {/* MAIN */}

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >

        {/* TOP BAR */}

        <div
          style={{
            display: "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",

            marginBottom: "35px",
          }}
        >

          <div>

            <h1
              style={{
                margin: 0,
                fontSize: "38px",
              }}
            >
              Admin Dashboard
            </h1>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              Real-time artisan analytics
            </p>

          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >

            <Bell />

            <Settings />

          </div>

        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(4,1fr)",

            gap: "20px",
          }}
        >

          {/* ARTISANS */}

          <div style={cardStyle}>

            <div style={iconBox}>
              <Users size={24} />
            </div>

            <h3>Total Artisans</h3>

            <h1>
              {stats.artisans}
            </h1>

          </div>

          {/* CLUSTERS */}

          <div style={cardStyle}>

            <div style={iconBox}>
              <Boxes size={24} />
            </div>

            <h3>Total Clusters</h3>

            <h1>
              {stats.clusters}
            </h1>

          </div>

          {/* PRODUCTION */}

          <div style={cardStyle}>

            <div style={iconBox}>
              <Factory size={24} />
            </div>

            <h3>Total Production</h3>

            <h1>
              {stats.production}
            </h1>

          </div>

          {/* PAYMENTS */}

          <div style={cardStyle}>

            <div style={iconBox}>
              <IndianRupee size={24} />
            </div>

            <h3>Total Payments</h3>

            <h1>₹0</h1>

          </div>

        </div>

      </div>

    </div>
  );
}

/* SIDEBAR BUTTON STYLE */

const menuStyle = {

  padding: "14px",

  borderRadius: "14px",

  border: "none",

  background:
    "rgba(255,255,255,0.05)",

  color: "white",

  cursor: "pointer",

  textAlign: "left",

  fontSize: "15px",
};

/* CARD STYLE */

const cardStyle = {

  background:
    "#081028",

  padding: "25px",

  borderRadius: "24px",

  border:
    "1px solid rgba(255,255,255,0.05)",
};

/* ICON STYLE */

const iconBox = {

  width: "55px",

  height: "55px",

  borderRadius: "16px",

  background:
    "linear-gradient(135deg,#38bdf8,#6366f1)",

  display: "flex",

  alignItems: "center",

  justifyContent:
    "center",

  marginBottom: "18px",
};