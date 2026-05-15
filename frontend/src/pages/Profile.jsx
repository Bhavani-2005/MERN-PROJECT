import { useState } from "react";

import {
  Mail,
  Briefcase,
  Calendar,
  Edit,
  LogOut,
  Trash2,
  Settings,
  Award,
 Save,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Profile() {

  const [showEdit, setShowEdit] = useState(false);

  const [user, setUser] = useState({
    name: "Veena",
    email: "veena@gmail.com",
    role: "Full Stack Developer",
    joined: "May 2026",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Power BI",
      "Data Analytics",
      "JavaScript",
      "DAX",
    ],
  });

  const [editData, setEditData] = useState(user);

  const saveProfile = () => {

    setUser(editData);

    setShowEdit(false);
  };

  return (

    <>

      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
        }}
      >

        <Navbar />

        <div
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(to bottom right, #020B3F, #08135C)",
            color: "white",
            padding: "40px",
            fontFamily: "Poppins, sans-serif",
          }}
        >

          {/* TITLE */}
          <div
            style={{
              marginBottom: "35px",
            }}
          >

            <h1
              style={{
                fontSize: "56px",
                fontWeight: "700",
              }}
            >
              Profile
            </h1>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "10px",
                fontSize: "18px",
              }}
            >
              Manage your account settings and profile
            </p>

          </div>

          {/* MAIN CARD */}
          <div
            style={{
              background: "rgba(11,20,79,0.85)",
              backdropFilter: "blur(12px)",
              borderRadius: "30px",
              padding: "40px",
              border:
                "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.25)",
              transition: "all 0.3s ease",
            }}
          >

            {/* TOP SECTION */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "30px",
                marginBottom: "45px",
              }}
            >

              {/* PROFILE INFO */}
              <div
                style={{
                  display: "flex",
                  gap: "28px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >

                {/* AVATAR */}
                <div
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg,#38bdf8,#6366f1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "58px",
                    fontWeight: "700",
                    boxShadow:
                      "0 10px 30px rgba(56,189,248,0.4)",
                  }}
                >
                  {user.name.charAt(0)}
                </div>

                {/* DETAILS */}
                <div>

                  <h2
                    style={{
                      fontSize: "42px",
                      marginBottom: "10px",
                    }}
                  >
                    {user.name}
                  </h2>

                  <div style={infoRow}>
                    <Mail size={18} />
                    {user.email}
                  </div>

                  <div style={infoRow}>
                    <Briefcase size={18} />
                    {user.role}
                  </div>

                  <div style={infoRow}>
                    <Calendar size={18} />
                    Joined {user.joined}
                  </div>

                </div>

              </div>

              {/* DASHBOARD STATS */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg,#111c63,#1e3a8a)",
                  padding: "28px",
                  borderRadius: "24px",
                  minWidth: "320px",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >

                <h3
                  style={{
                    marginBottom: "24px",
                    fontSize: "26px",
                    fontWeight: "600",
                  }}
                >
                  Dashboard Stats
                </h3>

                <div style={statCard}>
                  <span>📦 Total Products</span>

                  <strong
                    style={{
                      color: "#38bdf8",
                    }}
                  >
                    3313
                  </strong>
                </div>

                <div style={statCard}>
                  <span>🛒 Total Orders</span>

                  <strong
                    style={{
                      color: "#22c55e",
                    }}
                  >
                    12,487
                  </strong>
                </div>

                <div style={statCard}>
                  <span>💰 Revenue</span>

                  <strong
                    style={{
                      color: "#f59e0b",
                    }}
                  >
                    ₹36L
                  </strong>
                </div>

                <div style={statCard}>
                  <span>🤖 AI Insights</span>

                  <strong
                    style={{
                      color: "#a855f7",
                    }}
                  >
                    Active
                  </strong>
                </div>

              </div>

            </div>

            {/* SKILLS */}
            <div
              style={{
                marginBottom: "45px",
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >

                <Award
                  size={26}
                  color="#38bdf8"
                />

                <h3
                  style={{
                    fontSize: "30px",
                  }}
                >
                  Skills & Expertise
                </h3>

              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >

                {user.skills.map((skill, index) => (

                  <div
                    key={index}
                    style={{
                      padding: "14px 22px",
                      borderRadius: "16px",
                      background:
                        "rgba(255,255,255,0.05)",
                      border:
                        "1px solid rgba(255,255,255,0.08)",
                      fontSize: "15px",
                    }}
                  >
                    {skill}
                  </div>

                ))}

              </div>

            </div>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >

              <button
                onClick={() =>
                  setShowEdit(true)
                }
                style={editBtn}
              >
                <Edit size={18} />
                Edit Profile
              </button>

              <button style={settingsBtn}>
                <Settings size={18} />
                Settings
              </button>

              <button style={deleteBtn}>
                <Trash2 size={18} />
                Delete Account
              </button>

              <button style={logoutBtn}>
                <LogOut size={18} />
                Logout
              </button>

            </div>

          </div>

          {/* EDIT MODAL */}
          {showEdit && (

            <div
              style={{
                position: "fixed",
                inset: 0,
                background:
                  "rgba(0,0,0,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
              }}
            >

              <div
                style={{
                  width: "450px",
                  background: "#0B144F",
                  padding: "35px",
                  borderRadius: "24px",
                }}
              >

                <h2
                  style={{
                    marginBottom: "25px",
                    fontSize: "32px",
                  }}
                >
                  Edit Profile
                </h2>

                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Name"
                  style={inputStyle}
                />

                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      email: e.target.value,
                    })
                  }
                  placeholder="Email"
                  style={inputStyle}
                />

                <input
                  type="text"
                  value={editData.role}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      role: e.target.value,
                    })
                  }
                  placeholder="Role"
                  style={inputStyle}
                />

                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    marginTop: "20px",
                  }}
                >

                  <button
                    onClick={saveProfile}
                    style={editBtn}
                  >
                    <Save size={18} />
                    Save
                  </button>

                  <button
                    onClick={() =>
                      setShowEdit(false)
                    }
                    style={deleteBtn}
                  >
                    Cancel
                  </button>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </>
  );
}

/* STYLES */

const infoRow = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#cbd5e1",
  marginBottom: "12px",
  fontSize: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "16px",
  borderRadius: "14px",
  border: "1px solid #374151",
  background: "#111c63",
  color: "white",
  fontSize: "15px",
};

const editBtn = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "15px 26px",
  borderRadius: "14px",
  border: "none",
  background:
    "linear-gradient(135deg,#38bdf8,#0ea5e9)",
  color: "#020617",
  fontWeight: "700",
  cursor: "pointer",
};

const settingsBtn = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "15px 26px",
  borderRadius: "14px",
  border: "none",
  background:
    "linear-gradient(135deg,#8b5cf6,#6366f1)",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};

const deleteBtn = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "15px 26px",
  borderRadius: "14px",
  border: "none",
  background:
    "linear-gradient(135deg,#ef4444,#dc2626)",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};

const logoutBtn = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "15px 26px",
  borderRadius: "14px",
  border: "none",
  background:
    "linear-gradient(135deg,#f59e0b,#f97316)",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};

const statCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 20px",
  background:
    "rgba(255,255,255,0.06)",
  borderRadius: "18px",
  marginBottom: "18px",
  color: "white",
  fontSize: "16px",
};