import {
  Users,
  Package,
  CreditCard,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  useEffect,
  useState,
} from "react";

import {
  getDashboardData,
} from "../api/dashboardApi";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import socket from "../socket";

export default function Dashboard() {

  const [products, setProducts] =
    useState([]);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const role =
    user?.role || "artisan";

  useEffect(() => {

    fetchDashboardData();

    socket.on(
      "productionUpdated",

      (newData) => {

        setProducts(
          newData
        );
      }
    );

    return () => {

      socket.off(
        "productionUpdated"
      );
    };

  }, []);

  const fetchDashboardData =
    async () => {

      try {

        const data =
          await getDashboardData();

        setProducts(data);

      } catch (error) {

        console.log(error);
      }
    };

  /* KPI */

  const totalArtisans =
    products.length;

  const totalUnitsProduced =
    products.reduce(
      (acc, item) =>
        acc +
        Number(
          item.Units_Produced || 0
        ),
      0
    );

  const totalRevenue =
    products.reduce(
      (acc, item) =>
        acc +
        Number(
          item.Revenue || 0
        ),
      0
    );

  /* CHART */

  const chartData =
    products
      .slice(0, 10)
      .map((item) => ({

        name:
          item.Product_Name
            ?.substring(0, 10) ||
          "Craft",

        production:
          Number(
            item.Units_Produced || 0
          ),

      }));

  const dashboardTitle =

    role === "admin"
      ? "Admin Dashboard"

      : role ===
        "cluster-head"

      ? "Cluster Dashboard"

      : "Artisan Dashboard";

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
              marginBottom: "22px",

              display: "flex",

              flexDirection: "column",

              alignItems: "center",

              justifyContent: "center",

              textAlign: "center",
            }}
          >

            <h1
              style={{
                margin: 0,

                fontSize: "22px",

                fontWeight: "700",

                letterSpacing: "-0.5px",

                color: "white",
              }}
            >
              {dashboardTitle}
            </h1>

            <p
              style={{
                color: "#94a3b8",

                marginTop: "6px",

                fontSize: "12px",
              }}
            >

              {role === "admin" &&
                "Monitor artisans, production and payments"}

              {role === "cluster-head" &&
                "Manage cluster production and artisan activity"}

              {role === "artisan" &&
                "Track your production and earnings"}

            </p>

          </div>

          {/* KPI */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",

              gap: "14px",

              marginBottom: "18px",
            }}
          >

            <Card
              title={
                role === "artisan"
                  ? "My Products"
                  : "Total Artisans"
              }

              value={
                totalArtisans
              }

              icon={
                <Users
                  size={20}
                  color="#a855f7"
                />
              }

              iconBg="rgba(168,85,247,0.15)"
            />

            <Card
              title={
                role === "artisan"
                  ? "My Production"
                  : "Units Produced"
              }

              value={
                totalUnitsProduced
              }

              icon={
                <Package
                  size={20}
                  color="#22d3ee"
                />
              }

              iconBg="rgba(34,211,238,0.15)"
            />

            <Card
              title={
                role === "artisan"
                  ? "My Earnings"
                  : "Total Revenue"
              }

              value={`₹${totalRevenue.toLocaleString()}`}

              icon={
                <CreditCard
                  size={20}
                  color="#facc15"
                />
              }

              iconBg="rgba(250,204,21,0.15)"
            />

          </div>

          {/* MAIN */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "1.8fr 1fr",

              gap: "14px",
            }}
          >

            {/* CHART */}

            <div style={glassCard}>

              <div
                style={{
                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems:
                    "center",

                  marginBottom:
                    "14px",
                }}
              >

                <h2
                  style={{
                    margin: 0,

                    fontSize:
                      "17px",

                    fontWeight:
                      "600",
                  }}
                >
                  Production Overview
                </h2>

              </div>

              <div
                style={{
                  width: "100%",

                  height: "290px",
                }}
              >

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <AreaChart
                    data={chartData}
                  >

                    <defs>

                      <linearGradient
                        id="colorData"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="5%"
                          stopColor="#38bdf8"
                          stopOpacity={0.8}
                        />

                        <stop
                          offset="95%"
                          stopColor="#38bdf8"
                          stopOpacity={0}
                        />

                      </linearGradient>

                    </defs>

                    <XAxis
                      dataKey="name"
                      stroke="#94a3b8"
                      fontSize={11}
                    />

                    <YAxis
                      stroke="#94a3b8"
                      fontSize={11}
                    />

                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="production"
                      stroke="#38bdf8"
                      fillOpacity={1}
                      fill="url(#colorData)"
                    />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </div>

            {/* RECENT */}

            <div
              style={{
                ...glassCard,

                maxHeight:
                  "410px",

                overflowY:
                  "auto",
              }}
            >

              <h2
                style={{
                  margin: 0,

                  marginBottom:
                    "14px",

                  fontSize:
                    "17px",
                }}
              >
                Recent Production
              </h2>

              <div
                style={{
                  display: "flex",

                  flexDirection:
                    "column",

                  gap: "12px",
                }}
              >

                {products
                  .slice(0, 5)
                  .map((product) => (

                    <div
                      key={product._id}

                      style={{
                        display: "flex",

                        gap: "12px",

                        alignItems:
                          "center",

                        background:
                          "rgba(255,255,255,0.04)",

                        padding:
                          "12px",

                        borderRadius:
                          "14px",

                        border:
                          "1px solid rgba(255,255,255,0.05)",
                      }}
                    >

                      <img
                        src="https://placehold.co/300x200"

                        alt={
                          product.Product_Name
                        }

                        style={{
                          width: "52px",

                          height: "52px",

                          objectFit:
                            "cover",

                          borderRadius:
                            "10px",
                        }}
                      />

                      <div>

                        <h4
                          style={{
                            margin: 0,

                            marginBottom:
                              "4px",

                            fontSize:
                              "13px",
                          }}
                        >
                          {
                            product.Product_Name
                          }
                        </h4>

                        <p
                          style={{
                            margin: 0,

                            color:
                              "#94a3b8",

                            fontSize:
                              "11px",
                          }}
                        >
                          Units:
                          {" "}
                          {
                            product.Units_Produced
                          }
                        </p>

                        <p
                          style={{
                            margin: 0,

                            color:
                              "#22d3ee",

                            fontSize:
                              "11px",

                            marginTop:
                              "3px",
                          }}
                        >
                          ₹
                          {
                            product.Revenue
                          }
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

/* CARD */

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
          "rgba(10,18,60,0.92)",

        backdropFilter:
          "blur(14px)",

        borderRadius:
          "18px",

        padding: "16px",

        border:
          "1px solid rgba(255,255,255,0.06)",

        display: "flex",

        alignItems:
          "center",

        gap: "12px",

        minHeight:
          "88px",

        boxShadow:
          "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >

      <div
        style={{
          width: "48px",

          height: "48px",

          borderRadius:
            "14px",

          background:
            iconBg,

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
            color:
              "#94a3b8",

            marginBottom:
              "5px",

            marginTop: 0,

            fontSize:
              "12px",
          }}
        >
          {title}
        </p>

        <h1
          style={{
            margin: 0,

            fontSize:
              "22px",

            fontWeight:
              "700",
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
    "rgba(10,18,60,0.92)",

  backdropFilter:
    "blur(14px)",

  borderRadius:
    "20px",

  padding: "18px",

  border:
    "1px solid rgba(255,255,255,0.06)",

  boxShadow:
    "0 10px 30px rgba(0,0,0,0.25)",
};