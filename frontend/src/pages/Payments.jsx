import {
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import {
  Wallet,
  Clock3,
  Save,
  IndianRupee,
} from "lucide-react";

export default function Payments() {

  const [payments, setPayments] =
    useState([
      {
        artisan: "ruthvik",
        cluster: "hyderabad",
        craft: "Terracotta",
        units: 12,
        wage: 90,
        total: 1080,
        status: "Pending",
      },

      {
        artisan: "A Veena",
        cluster: "warangal",
        craft: "Handloom",
        units: 22,
        wage: 140,
        total: 3080,
        status: "Paid",
      },
    ]);

  const [formData, setFormData] =
    useState({
      artisan: "",
      cluster: "",
      craft: "",
      units: "",
      wage: "",
      status: "Paid",
    });

  /* TOTALS */

  const totalPaid = payments
    .filter(
      (item) =>
        item.status === "Paid"
    )

    .reduce(
      (acc, item) =>
        acc + item.total,
      0
    );

  const pendingPayments =
    payments.filter(
      (item) =>
        item.status ===
        "Pending"
    ).length;

  /* CHANGE */

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  /* SAVE */

  const handleSave = () => {

    const total =

      Number(formData.units) *

      Number(formData.wage);

    const newPayment = {

      ...formData,

      total,
    };

    setPayments([
      newPayment,
      ...payments,
    ]);

    setFormData({
      artisan: "",
      cluster: "",
      craft: "",
      units: "",
      wage: "",
      status: "Paid",
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
              marginBottom: "20px",
            }}
          >

            <h1
              style={{
                margin: 0,

                fontSize: "22px",

                fontWeight:
                  "700",
              }}
            >
              Wage Payments
            </h1>

            <p
              style={{
                color: "#94a3b8",

                marginTop: "6px",

                fontSize: "12px",
              }}
            >
              Manage artisan wages
              and production payments
            </p>

          </div>

          {/* KPI */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",

              gap: "18px",

              marginBottom: "22px",
            }}
          >

            <KpiCard
              title="Total Wages Paid"
              value={`₹${totalPaid.toLocaleString()}`}
              icon={
                <Wallet
                  size={18}
                  color="#38bdf8"
                />
              }
              bg="rgba(56,189,248,0.12)"
            />

            <KpiCard
              title="Pending Payments"
              value={pendingPayments}
              icon={
                <Clock3
                  size={18}
                  color="#facc15"
                />
              }
              bg="rgba(250,204,21,0.12)"
            />

          </div>

          {/* FORM */}

          <div
            style={{
              background:
                "rgba(10,18,60,0.92)",

              borderRadius:
                "22px",

              padding: "20px",

              marginBottom:
                "22px",

              border:
                "1px solid rgba(255,255,255,0.06)",
            }}
          >

            <div
              style={{
                display: "grid",

                gridTemplateColumns:
                  "repeat(3,1fr)",

                gap: "14px",

                marginBottom:
                  "16px",
              }}
            >

              <InputField
                name="artisan"
                placeholder="Artisan Name"
                value={
                  formData.artisan
                }
                onChange={
                  handleChange
                }
              />

              <InputField
                name="cluster"
                placeholder="Cluster"
                value={
                  formData.cluster
                }
                onChange={
                  handleChange
                }
              />

              <InputField
                name="craft"
                placeholder="Craft"
                value={
                  formData.craft
                }
                onChange={
                  handleChange
                }
              />

              <InputField
                name="units"
                placeholder="Units Produced"
                value={
                  formData.units
                }
                onChange={
                  handleChange
                }
              />

              <InputField
                name="wage"
                placeholder="Wage Per Unit"
                value={
                  formData.wage
                }
                onChange={
                  handleChange
                }
              />

              <select
                name="status"

                value={
                  formData.status
                }

                onChange={
                  handleChange
                }

                style={
                  inputStyle
                }
              >

                <option>
                  Paid
                </option>

                <option>
                  Pending
                </option>

              </select>

            </div>

            {/* TOTAL */}

            <div
              style={{
                display: "flex",

                justifyContent:
                  "space-between",

                alignItems:
                  "center",

                marginTop: "12px",
              }}
            >

              <div
                style={{
                  display: "flex",

                  alignItems:
                    "center",

                  gap: "8px",

                  fontSize:
                    "16px",

                  fontWeight:
                    "700",
                }}
              >

                <IndianRupee
                  size={18}
                />

                Total Wage:
                ₹
                {(
                  Number(
                    formData.units ||
                      0
                  ) *

                  Number(
                    formData.wage ||
                      0
                  )
                ).toLocaleString()}

              </div>

              <button
                onClick={
                  handleSave
                }

                style={{
                  height: "44px",

                  padding:
                    "0 22px",

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
                    "13px",

                  display: "flex",

                  alignItems:
                    "center",

                  gap: "8px",

                  cursor:
                    "pointer",
                }}
              >

                <Save
                  size={16}
                />

                Save Payment

              </button>

            </div>

          </div>

          {/* TABLE */}

          <div
            style={{
              background:
                "rgba(10,18,60,0.92)",

              borderRadius:
                "22px",

              padding: "18px",

              border:
                "1px solid rgba(255,255,255,0.06)",

              overflowX:
                "auto",
            }}
          >

            <table
              style={{
                width: "100%",

                borderCollapse:
                  "collapse",
              }}
            >

              <thead>

                <tr
                  style={{
                    color:
                      "#94a3b8",

                    fontSize:
                      "12px",

                    textAlign:
                      "left",
                  }}
                >

                  <th
                    style={
                      thStyle
                    }
                  >
                    Artisan
                  </th>

                  <th
                    style={
                      thStyle
                    }
                  >
                    Cluster
                  </th>

                  <th
                    style={
                      thStyle
                    }
                  >
                    Craft
                  </th>

                  <th
                    style={
                      thStyle
                    }
                  >
                    Units
                  </th>

                  <th
                    style={
                      thStyle
                    }
                  >
                    Wage/Unit
                  </th>

                  <th
                    style={
                      thStyle
                    }
                  >
                    Total
                  </th>

                  <th
                    style={
                      thStyle
                    }
                  >
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {payments.map(
                  (
                    item,
                    index
                  ) => (

                    <tr
                      key={index}

                      style={{
                        borderTop:
                          "1px solid rgba(255,255,255,0.05)",
                      }}
                    >

                      <td
                        style={
                          tdStyle
                        }
                      >
                        {
                          item.artisan
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >
                        {
                          item.cluster
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >
                        {
                          item.craft
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >
                        {
                          item.units
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >
                        ₹
                        {
                          item.wage
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >
                        ₹
                        {
                          item.total
                        }
                      </td>

                      <td
                        style={
                          tdStyle
                        }
                      >

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

                              item.status ===
                              "Paid"

                                ? "rgba(34,197,94,0.15)"

                                : "rgba(239,68,68,0.15)",

                            color:

                              item.status ===
                              "Paid"

                                ? "#22c55e"

                                : "#ef4444",
                          }}
                        >
                          {
                            item.status
                          }
                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </>
  );
}

/* KPI CARD */

function KpiCard({
  title,
  value,
  icon,
  bg,
}) {

  return (

    <div
      style={{
        background:
          "rgba(10,18,60,0.92)",

        borderRadius:
          "20px",

        padding: "18px",

        border:
          "1px solid rgba(255,255,255,0.06)",

        display: "flex",

        alignItems:
          "center",

        gap: "14px",
      }}
    >

      <div
        style={{
          width: "48px",

          height: "48px",

          borderRadius:
            "14px",

          background: bg,

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

            color:
              "#94a3b8",

            fontSize:
              "12px",

            marginBottom:
              "5px",
          }}
        >
          {title}
        </p>

        <h2
          style={{
            margin: 0,

            fontSize:
              "22px",
          }}
        >
          {value}
        </h2>

      </div>

    </div>
  );
}

/* INPUT */

function InputField({
  placeholder,
  name,
  value,
  onChange,
}) {

  return (

    <input
      type="text"

      name={name}

      placeholder={placeholder}

      value={value}

      onChange={onChange}

      style={inputStyle}
    />
  );
}

/* STYLES */

const inputStyle = {

  width: "100%",

  height: "44px",

  border: "none",

  outline: "none",

  borderRadius: "14px",

  background:
    "rgba(255,255,255,0.05)",

  color: "white",

  padding: "0 14px",

  fontSize: "12px",

  border:
    "1px solid rgba(255,255,255,0.05)",
};

const thStyle = {

  padding: "14px 10px",

  fontWeight: "600",
};

const tdStyle = {

  padding: "16px 10px",

  fontSize: "13px",
};