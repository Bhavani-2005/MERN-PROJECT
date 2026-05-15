import {
  Bell,
  Search,
  Moon,
} from "lucide-react";

export default function Navbar() {

  return (

    <div
      style={{
        width: "100%",
        height: "72px",
        background: "rgba(11,20,79,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom:
          "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >

      {/* LEFT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >

        <h2
          style={{
            color: "white",
            margin: 0,
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Smart Artisan Assistant
        </h2>

        <p
          style={{
            color: "#94a3b8",
            margin: 0,
            fontSize: "13px",
          }}
        >
          Empowering rural artisan communities
        </p>

      </div>

      {/* SEARCH */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#111c63",
          padding: "10px 16px",
          borderRadius: "12px",
          width: "320px",
        }}
      >

        <Search size={18} color="#94a3b8" />

        <input
          type="text"
          placeholder="Search artisans, clusters..."
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "white",
            width: "100%",
            fontSize: "14px",
          }}
        />

      </div>

      {/* RIGHT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >

        {/* DARK MODE */}
        <div style={iconBox}>
          <Moon size={18} />
        </div>

        {/* NOTIFICATIONS */}
        <div style={iconBox}>
          <Bell size={18} />
        </div>

        {/* PROFILE */}
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#38bdf8,#6366f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            fontSize: "16px",
            color: "white",
          }}
        >
          V
        </div>

      </div>

    </div>
  );
}

const iconBox = {
  width: "42px",
  height: "42px",
  borderRadius: "10px",
  background: "#111c63",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "white",
};