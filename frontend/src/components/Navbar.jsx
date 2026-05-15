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
        height: "80px",
        background: "rgba(11,20,79,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom:
          "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >

      {/* SEARCH */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "#111c63",
          padding: "12px 18px",
          borderRadius: "14px",
          width: "350px",
        }}
      >

        <Search size={18} color="#94a3b8" />

        <input
          type="text"
          placeholder="Search..."
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "white",
            width: "100%",
            fontSize: "15px",
          }}
        />

      </div>

      {/* RIGHT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >

        {/* DARK MODE */}
        <div
          style={iconBox}
        >
          <Moon size={20} />
        </div>

        {/* NOTIFICATIONS */}
        <div
          style={iconBox}
        >
          <Bell size={20} />
        </div>

        {/* PROFILE */}
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#38bdf8,#6366f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          V
        </div>

      </div>

    </div>
  );
}

const iconBox = {
  width: "45px",
  height: "45px",
  borderRadius: "12px",
  background: "#111c63",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "white",
};