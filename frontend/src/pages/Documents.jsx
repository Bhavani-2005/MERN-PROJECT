import {
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import {
  Search,
  FileText,
  Download,
  Upload,
  Eye,
  FileBadge,
} from "lucide-react";

export default function Documents() {

  const [search, setSearch] =
    useState("");

  const documents = [

    {
      name:
        "Aadhaar Card.pdf",

      category:
        "Identity Proof",

      size: "1.2 MB",

      status: "Verified",
    },

    {
      name:
        "Artisan Certificate.pdf",

      category:
        "Certification",

      size: "2.4 MB",

      status: "Pending",
    },

    {
      name:
        "Bank Passbook.pdf",

      category:
        "Banking",

      size: "950 KB",

      status: "Verified",
    },

    {
      name:
        "Government Scheme Form.pdf",

      category:
        "Application",

      size: "1.8 MB",

      status: "Uploaded",
    },
  ];

  const filteredDocuments =

    documents.filter((item) =>

      item.name
        .toLowerCase()

        .includes(
          search.toLowerCase()
        )
    );

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
              position: "relative",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              marginBottom:
                "28px",
            }}
          >

            <div
              style={{
                textAlign:
                  "center",
              }}
            >

              <h1
                style={{
                  margin: 0,

                  fontSize:
                    "28px",

                  fontWeight:
                    "700",

                  letterSpacing:
                    "-0.5px",
                }}
              >
                Documents
              </h1>

              <p
                style={{
                  color:
                    "#94a3b8",

                  marginTop:
                    "8px",

                  fontSize:
                    "11px",

                  lineHeight:
                    "18px",
                }}
              >
                Upload, manage and
                access artisan
                documents securely
              </p>

            </div>

            {/* SEARCH */}

            <div
              style={{
                position:
                  "absolute",

                right: 0,
              }}
            >

              <Search
                size={16}

                color="#94a3b8"

                style={{
                  position:
                    "absolute",

                  left: "14px",

                  top: "13px",
                }}
              />

              <input
                type="text"

                placeholder="Search documents..."

                value={search}

                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }

                style={{
                  width: "250px",

                  height: "40px",

                  border: "none",

                  outline: "none",

                  borderRadius:
                    "14px",

                  background:
                    "rgba(255,255,255,0.05)",

                  color: "white",

                  padding:
                    "0 16px 0 42px",

                  fontSize: "11px",

                  border:
                    "1px solid rgba(255,255,255,0.05)",
                }}
              />

            </div>

          </div>

          {/* TOP ACTIONS */}

          <div
            style={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems:
                "center",

              marginBottom:
                "22px",
            }}
          >

            <div
              style={{
                display: "flex",

                gap: "14px",
              }}
            >

              <ActionCard
                icon={
                  <Upload
                    size={18}
                    color="#38bdf8"
                  />
                }

                title="Upload Files"
              />

              <ActionCard
                icon={
                  <FileBadge
                    size={18}
                    color="#22c55e"
                  />
                }

                title="Verified Docs"
              />

            </div>

            <button
              style={{
                height: "42px",

                padding:
                  "0 18px",

                border: "none",

                borderRadius:
                  "14px",

                background:
                  "linear-gradient(135deg,#38bdf8,#0ea5e9)",

                color:
                  "#04111f",

                fontWeight:
                  "700",

                fontSize:
                  "12px",

                cursor:
                  "pointer",
              }}
            >
              Upload Document
            </button>

          </div>

          {/* DOCUMENT GRID */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",

              gap: "18px",
            }}
          >

            {filteredDocuments.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}

                  style={{
                    background:
                      "rgba(10,18,60,0.92)",

                    borderRadius:
                      "22px",

                    padding: "20px",

                    border:
                      "1px solid rgba(255,255,255,0.06)",

                    boxShadow:
                      "0 10px 25px rgba(0,0,0,0.25)",
                  }}
                >

                  {/* ICON */}

                  <div
                    style={{
                      width: "56px",

                      height: "56px",

                      borderRadius:
                        "18px",

                      background:
                        "rgba(56,189,248,0.12)",

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      marginBottom:
                        "18px",
                    }}
                  >

                    <FileText
                      size={24}
                      color="#38bdf8"
                    />

                  </div>

                  {/* TITLE */}

                  <h2
                    style={{
                      margin: 0,

                      fontSize:
                        "16px",

                      marginBottom:
                        "10px",

                      lineHeight:
                        "24px",
                    }}
                  >
                    {item.name}
                  </h2>

                  {/* CATEGORY */}

                  <p
                    style={{
                      margin: 0,

                      color:
                        "#38bdf8",

                      fontSize:
                        "11px",

                      marginBottom:
                        "14px",

                      fontWeight:
                        "600",
                    }}
                  >
                    {item.category}
                  </p>

                  {/* DETAILS */}

                  <div
                    style={{
                      display: "flex",

                      justifyContent:
                        "space-between",

                      alignItems:
                        "center",

                      marginBottom:
                        "18px",
                    }}
                  >

                    <span
                      style={{
                        color:
                          "#94a3b8",

                        fontSize:
                          "11px",
                      }}
                    >
                      {item.size}
                    </span>

                    <span
                      style={{
                        padding:
                          "6px 12px",

                        borderRadius:
                          "999px",

                        fontSize:
                          "10px",

                        fontWeight:
                          "600",

                        background:

                          item.status ===
                          "Verified"

                            ? "rgba(34,197,94,0.15)"

                            : "rgba(250,204,21,0.15)",

                        color:

                          item.status ===
                          "Verified"

                            ? "#22c55e"

                            : "#facc15",
                      }}
                    >
                      {item.status}
                    </span>

                  </div>

                  {/* ACTIONS */}

                  <div
                    style={{
                      display: "flex",

                      gap: "12px",
                    }}
                  >

                    <button
                      style={{
                        flex: 1,

                        height: "40px",

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

                        justifyContent:
                          "center",

                        gap: "8px",

                        fontSize:
                          "12px",

                        cursor:
                          "pointer",
                      }}
                    >

                      <Eye
                        size={15}
                      />

                      View

                    </button>

                    <button
                      style={{
                        flex: 1,

                        height: "40px",

                        border: "none",

                        borderRadius:
                          "12px",

                        background:
                          "linear-gradient(135deg,#38bdf8,#0ea5e9)",

                        color:
                          "#04111f",

                        display: "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",

                        gap: "8px",

                        fontSize:
                          "12px",

                        fontWeight:
                          "700",

                        cursor:
                          "pointer",
                      }}
                    >

                      <Download
                        size={15}
                      />

                      Download

                    </button>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </>
  );
}

/* ACTION CARD */

function ActionCard({
  icon,
  title,
}) {

  return (

    <div
      style={{
        background:
          "rgba(10,18,60,0.92)",

        borderRadius:
          "18px",

        padding:
          "14px 18px",

        border:
          "1px solid rgba(255,255,255,0.06)",

        display: "flex",

        alignItems:
          "center",

        gap: "12px",
      }}
    >

      <div
        style={{
          width: "42px",

          height: "42px",

          borderRadius:
            "14px",

          background:
            "rgba(255,255,255,0.05)",

          display: "flex",

          alignItems:
            "center",

          justifyContent:
            "center",
        }}
      >
        {icon}
      </div>

      <div>

        <p
          style={{
            margin: 0,

            fontSize:
              "12px",

            fontWeight:
              "600",
          }}
        >
          {title}
        </p>

      </div>

    </div>
  );
}