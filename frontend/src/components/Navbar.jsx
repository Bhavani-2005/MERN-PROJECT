import {
  Bell,
  Moon,
} from "lucide-react";

export default function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  return (

    <div
      style={{
        height: "72px",

        display: "flex",

        justifyContent: "flex-end",

        alignItems: "center",

        padding: "0 28px",

        background:
          "rgba(5,10,30,0.92)",

        borderBottom:
          "1px solid rgba(255,255,255,0.05)",

        position: "sticky",

        top: 0,

        zIndex: 100,
      }}
    >

      {/* RIGHT */}

      <div
        style={{
          display: "flex",

          alignItems: "center",

          gap: "14px",
        }}
      >

        {/* DARK MODE */}

        <div style={iconBox}>

          <Moon size={18} />

        </div>

        {/* NOTIFICATION */}

        <div style={iconBox}>

          <Bell size={18} />

        </div>

        {/* USER */}

        <div
          style={{
            width: "52px",

            height: "52px",

            borderRadius: "16px",

            background:
              "linear-gradient(135deg,#38bdf8,#6366f1)",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            color: "white",

            fontWeight: "700",

            fontSize: "20px",

            boxShadow:
              "0 10px 25px rgba(56,189,248,0.35)",
          }}
        >

          {user?.name
            ?.charAt(0)
            ?.toUpperCase()}

        </div>

      </div>

    </div>
  );
}

const iconBox = {

  width: "42px",

  height: "42px",

  borderRadius: "14px",

  background:
    "rgba(255,255,255,0.04)",

  border:
    "1px solid rgba(255,255,255,0.05)",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  color: "white",

  cursor: "pointer",
};