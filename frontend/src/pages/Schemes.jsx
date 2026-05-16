import {
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import {
  Search,
  BadgeIndianRupee,
  ExternalLink,
  Landmark,
} from "lucide-react";

export default function Schemes() {

  const [search, setSearch] =
    useState("");

  const schemes = [

    {
      title:
        "PM Vishwakarma Scheme",

      category:
        "Financial Assistance",

      amount:
        "₹3,00,000 Loan Support",

      description:
        "Support scheme for traditional artisans and craftspeople with skill training and business loans.",

      status: "Active",
    },

    {
      title:
        "Mudra Loan Scheme",

      category:
        "Business Loan",

      amount:
        "Up to ₹10 Lakhs",

      description:
        "Micro-financing support for small business owners and rural entrepreneurs.",

      status: "Open",
    },

    {
      title:
        "National Handloom Development Programme",

      category:
        "Textile Support",

      amount:
        "Government Subsidy",

      description:
        "Financial and marketing support for handloom artisans and clusters.",

      status: "Active",
    },

    {
      title:
        "Startup India Initiative",

      category:
        "Startup Support",

      amount:
        "Tax Benefits + Funding",

      description:
        "Government startup ecosystem support for innovative artisan businesses.",

      status: "Open",
    },
  ];

  const filteredSchemes =

    schemes.filter((item) =>

      item.title
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
                Government Schemes
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
                Explore funding,
                subsidies and
                support programs for
                artisans
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

                placeholder="Search schemes..."

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

          {/* SCHEME GRID */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",

              gap: "18px",
            }}
          >

            {filteredSchemes.map(
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

                  {/* TOP */}

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

                    <div
                      style={{
                        width: "52px",

                        height: "52px",

                        borderRadius:
                          "16px",

                        background:
                          "rgba(56,189,248,0.12)",

                        display: "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",
                      }}
                    >

                      <Landmark
                        size={22}
                        color="#38bdf8"
                      />

                    </div>

                    <span
                      style={{
                        padding:
                          "6px 12px",

                        borderRadius:
                          "999px",

                        fontSize:
                          "11px",

                        fontWeight:
                          "600",

                        background:
                          "rgba(34,197,94,0.15)",

                        color:
                          "#22c55e",
                      }}
                    >
                      {item.status}
                    </span>

                  </div>

                  {/* TITLE */}

                  <h2
                    style={{
                      margin: 0,

                      fontSize:
                        "17px",

                      lineHeight:
                        "26px",

                      marginBottom:
                        "10px",
                    }}
                  >
                    {item.title}
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

                  {/* DESCRIPTION */}

                  <p
                    style={{
                      color:
                        "#94a3b8",

                      fontSize:
                        "11px",

                      lineHeight:
                        "21px",

                      marginBottom:
                        "18px",
                    }}
                  >
                    {
                      item.description
                    }
                  </p>

                  {/* AMOUNT */}

                  <div
                    style={{
                      display: "flex",

                      alignItems:
                        "center",

                      gap: "8px",

                      marginBottom:
                        "18px",
                    }}
                  >

                    <BadgeIndianRupee
                      size={17}
                      color="#facc15"
                    />

                    <span
                      style={{
                        fontSize:
                          "12px",

                        fontWeight:
                          "600",
                      }}
                    >
                      {item.amount}
                    </span>

                  </div>

                  {/* BUTTON */}

                  <button
                    style={{
                      width: "100%",

                      height: "42px",

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

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      gap: "8px",

                      cursor:
                        "pointer",
                    }}
                  >

                    <ExternalLink
                      size={15}
                    />

                    View Scheme

                  </button>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </>
  );
}