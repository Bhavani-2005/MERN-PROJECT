import {
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  Edit,
  Save,
  Briefcase,
} from "lucide-react";

import {
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

export default function Profile() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const [profile, setProfile] =
    useState({

      name:
        user?.name ||
        "A Veena",

      email:
        user?.email ||
        "veena@gmail.com",

      phone:
        "+91 9876543210",

      location:
        "Hyderabad, India",

      role:
        user?.role ||
        "artisan",

      craft:
        "Handloom Crafts",
    });

  const handleChange =
    (e) => {

      setProfile({
        ...profile,

        [e.target.name]:
          e.target.value,
      });
    };

  return (

    <>

      <Sidebar />

      <div
        style={{
          marginLeft: "250px",
        }}
      >

        <Navbar />

        <div
          style={{
            minHeight: "100vh",

            padding: "18px 22px",

            background:
              "linear-gradient(135deg,#020617 0%, #081028 45%, #0b1437 100%)",

            color: "white",

            fontFamily:
              "Poppins, sans-serif",
          }}
        >

          {/* HEADER */}

          <div
            style={{
              textAlign:
                "center",

              marginBottom:
                "24px",
            }}
          >

            <h1
              style={{
                margin: 0,

                fontSize:
                  "22px",

                fontWeight:
                  "700",
              }}
            >
              Profile
            </h1>

            <p
              style={{
                color:
                  "#94a3b8",

                marginTop:
                  "6px",

                fontSize:
                  "10px",
              }}
            >
              Manage your account
              information and
              settings
            </p>

          </div>

          {/* PROFILE CARD */}

          <div
            style={{
              maxWidth:
                "900px",

              margin:
                "0 auto",

              background:
                "rgba(10,18,60,0.92)",

              borderRadius:
                "24px",

              padding: "22px",

              border:
                "1px solid rgba(255,255,255,0.06)",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >

            {/* TOP */}

            <div
              style={{
                display: "flex",

                alignItems:
                  "center",

                gap: "18px",

                marginBottom:
                  "24px",
              }}
            >

              <div
                style={{
                  width: "80px",

                  height: "80px",

                  borderRadius:
                    "22px",

                  background:
                    "linear-gradient(135deg,#38bdf8,#6366f1)",

                  display: "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",

                  boxShadow:
                    "0 10px 30px rgba(56,189,248,0.35)",
                }}
              >

                <User
                  size={34}
                  color="white"
                />

              </div>

              <div>

                <h2
                  style={{
                    margin: 0,

                    fontSize:
                      "18px",

                    fontWeight:
                      "600",
                  }}
                >
                  {
                    profile.name
                  }
                </h2>

                <p
                  style={{
                    margin:
                      "6px 0 0 0",

                    color:
                      "#94a3b8",

                    fontSize:
                      "10px",

                    textTransform:
                      "capitalize",
                  }}
                >
                  {
                    profile.role
                  }
                </p>

              </div>

            </div>

            {/* FORM */}

            <div
              style={{
                display: "grid",

                gridTemplateColumns:
                  "1fr 1fr",

                gap: "16px",
              }}
            >

              <InputField
                icon={
                  <User
                    size={15}
                  />
                }

                label="Full Name"

                name="name"

                value={
                  profile.name
                }

                onChange={
                  handleChange
                }
              />

              <InputField
                icon={
                  <Mail
                    size={15}
                  />
                }

                label="Email"

                name="email"

                value={
                  profile.email
                }

                onChange={
                  handleChange
                }
              />

              <InputField
                icon={
                  <Phone
                    size={15}
                  />
                }

                label="Phone"

                name="phone"

                value={
                  profile.phone
                }

                onChange={
                  handleChange
                }
              />

              <InputField
                icon={
                  <MapPin
                    size={15}
                  />
                }

                label="Location"

                name="location"

                value={
                  profile.location
                }

                onChange={
                  handleChange
                }
              />

              <InputField
                icon={
                  <Shield
                    size={15}
                  />
                }

                label="Role"

                name="role"

                value={
                  profile.role
                }

                onChange={
                  handleChange
                }
              />

              <InputField
                icon={
                  <Briefcase
                    size={15}
                  />
                }

                label="Craft Type"

                name="craft"

                value={
                  profile.craft
                }

                onChange={
                  handleChange
                }
              />

            </div>

            {/* BUTTONS */}

            <div
              style={{
                display: "flex",

                justifyContent:
                  "flex-end",

                gap: "12px",

                marginTop:
                  "24px",
              }}
            >

              <button
                style={{
                  height: "40px",

                  padding:
                    "0 16px",

                  border: "none",

                  borderRadius:
                    "12px",

                  background:
                    "rgba(255,255,255,0.05)",

                  color:
                    "white",

                  display: "flex",

                  alignItems:
                    "center",

                  gap: "8px",

                  cursor:
                    "pointer",

                  fontSize:
                    "11px",
                }}
              >

                <Edit
                  size={14}
                />

                Edit Profile

              </button>

              <button
                style={{
                  height: "40px",

                  padding:
                    "0 16px",

                  border: "none",

                  borderRadius:
                    "12px",

                  background:
                    "linear-gradient(135deg,#38bdf8,#0ea5e9)",

                  color:
                    "#04111f",

                  fontWeight:
                    "700",

                  display: "flex",

                  alignItems:
                    "center",

                  gap: "8px",

                  cursor:
                    "pointer",

                  fontSize:
                    "11px",
                }}
              >

                <Save
                  size={14}
                />

                Save Changes

              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

/* INPUT FIELD */

function InputField({
  icon,
  label,
  name,
  value,
  onChange,
}) {

  return (

    <div>

      <p
        style={{
          marginBottom:
            "6px",

          fontSize:
            "10px",

          color:
            "#94a3b8",
        }}
      >
        {label}
      </p>

      <div
        style={{
          height: "42px",

          borderRadius:
            "12px",

          background:
            "rgba(255,255,255,0.05)",

          border:
            "1px solid rgba(255,255,255,0.05)",

          display: "flex",

          alignItems:
            "center",

          padding:
            "0 12px",

          gap: "8px",
        }}
      >

        {icon}

        <input
          type="text"

          name={name}

          value={value}

          onChange={onChange}

          style={{
            flex: 1,

            background:
              "transparent",

            border: "none",

            outline: "none",

            color: "white",

            fontSize:
              "11px",
          }}
        />

      </div>

    </div>
  );
}