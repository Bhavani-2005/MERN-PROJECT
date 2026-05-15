import {
  Users,
  Package,
  CreditCard,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";

import { getDashboardData } from "../api/dashboardApi";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {

    try {

      const data = await getDashboardData();

      setProducts(data);

    } catch (error) {

      console.log(error);
    }
  };

  /* KPI CALCULATIONS */

  const totalArtisans = products.length;

  const totalUnitsProduced = products.reduce(
    (acc, item) =>
      acc + Number(item.quantity || 0),
    0
  );

  const totalWagesPaid = products.reduce(
    (acc, item) =>
      acc +
      Number(item.price || 0) *
        Number(item.quantity || 0),
    0
  );

  /* CHART DATA */

  const chartData = products
    .slice(0, 10)
    .map((item) => ({
      name:
        item.name?.substring(0, 10) ||
        "Item",

      production:
        Number(item.quantity || 0),
    }));

  return (

    <>

      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
        }}
      >

        <Navbar />

        <div
          style={{
            minHeight: "100vh",
            padding: "24px",
            background:
              "linear-gradient(135deg,#020617,#08135C)",
            color: "white",
            fontFamily:
              "Poppins, sans-serif",
          }}
        >

          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "35px",
            }}
          >

            <div>

              <h1
                style={{
                  margin: 0,
                  fontSize: "34px",
                  fontWeight: "700",
                }}
              >
                Dashboard
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "8px",
                  fontSize: "15px",
                }}
              >
                Monitor artisan production,
                wages and activities
              </p>

            </div>

            {/* AVATAR */}
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#38bdf8,#6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                fontSize: "20px",
                boxShadow:
                  "0 10px 25px rgba(56,189,248,0.35)",
              }}
            >
              V
            </div>

          </div>

          {/* KPI CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "22px",
              marginBottom: "35px",
            }}
          >

            <Card
              title="Total Artisans"
              value={totalArtisans}
              icon={
                <Users
                  size={24}
                  color="#a855f7"
                />
              }
              iconBg="rgba(168,85,247,0.15)"
            />

            <Card
              title="Units Produced"
              value={totalUnitsProduced}
              icon={
                <Package
                  size={24}
                  color="#22d3ee"
                />
              }
              iconBg="rgba(34,211,238,0.15)"
            />

            <Card
              title="Total Wages Paid"
              value={`₹${totalWagesPaid.toLocaleString()}`}
              icon={
                <CreditCard
                  size={24}
                  color="#facc15"
                />
              }
              iconBg="rgba(250,204,21,0.15)"
            />

          </div>

          {/* MAIN SECTION */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "2fr 1fr",
              gap: "22px",
            }}
          >

            {/* CHART */}
            <div style={glassCard}>

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "20px",
                  fontSize: "22px",
                }}
              >
                Production Analytics
              </h2>

              <div
                style={{
                  width: "100%",
                  height: "330px",
                }}
              >

                <ResponsiveContainer>

                  <BarChart
                    data={chartData}
                  >

                    <XAxis
                      dataKey="name"
                      stroke="#94a3b8"
                    />

                    <YAxis
                      stroke="#94a3b8"
                    />

                    <Tooltip />

                    <Bar
                      dataKey="production"
                      fill="#38bdf8"
                      radius={[
                        8,
                        8,
                        0,
                        0,
                      ]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </div>

            {/* RECENT PRODUCTION */}
            <div
              style={{
                ...glassCard,
                maxHeight: "500px",
                overflowY: "auto",
              }}
            >

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "20px",
                  fontSize: "22px",
                }}
              >
                Recent Production
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >

                {products
                  .slice(0, 8)
                  .map((product) => (

                    <div
                      key={product._id}
                      style={{
                        display: "flex",
                        gap: "14px",
                        alignItems:
                          "center",
                        background:
                          "rgba(255,255,255,0.05)",
                        padding: "14px",
                        borderRadius:
                          "14px",
                      }}
                    >

                      <img
                        src={
                          product.image ||
                          "https://placehold.co/300x200"
                        }
                        alt={
                          product.name
                        }
                        style={{
                          width: "64px",
                          height: "64px",
                          objectFit:
                            "cover",
                          borderRadius:
                            "12px",
                        }}
                      />

                      <div>

                        <h4
                          style={{
                            margin: 0,
                            marginBottom:
                              "6px",
                            fontSize:
                              "15px",
                          }}
                        >
                          {product.name}
                        </h4>

                        <p
                          style={{
                            margin: 0,
                            color:
                              "#94a3b8",
                            fontSize:
                              "13px",
                          }}
                        >
                          Units:
                          {" "}
                          {product.quantity}
                        </p>

                      </div>

                    </div>

                  ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

/* KPI CARD */

function Card({
  title,
  value,
  icon,
  iconBg,
}) {

  return (

    <div
      style={{
        background:
          "rgba(11,20,79,0.85)",
        backdropFilter:
          "blur(12px)",
        borderRadius: "22px",
        padding: "20px",
        border:
          "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "18px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >

      {/* ICON */}
      <div
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "16px",
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "6px",
            marginTop: 0,
            fontSize: "14px",
          }}
        >
          {title}
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "26px",
          }}
        >
          {value}
        </h1>

      </div>

    </div>
  );
}

/* GLASS CARD */

const glassCard = {
  background:
    "rgba(11,20,79,0.85)",
  backdropFilter: "blur(12px)",
  borderRadius: "22px",
  padding: "22px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.25)",
};