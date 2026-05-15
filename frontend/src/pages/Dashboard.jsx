import {
  Package,
  CreditCard,
  Brain,
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

  /* CALCULATIONS */

  const totalProducts = products.length;

  const totalQuantity = products.reduce(
    (acc, item) =>
      acc + Number(item.quantity),
    0
  );

  const totalRevenue = products.reduce(
    (acc, item) =>
      acc +
      Number(item.price) *
        Number(item.quantity),
    0
  );

  /* CHART DATA */

  const chartData = products
    .slice(0, 10)
    .map((item) => ({
      name:
        item.name?.substring(0, 8) || "Product",
      revenue:
        item.price * item.quantity,
    }));

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
            padding: "24px",
            background:
              "linear-gradient(135deg,#020617,#08135C)",
            color: "white",
            fontFamily:
              "Poppins, sans-serif",
          }}
        >

          {/* TOP */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >

            <div>

              <h1
                style={{
                  margin: 0,
                  fontSize: "36px",
                  fontWeight: "700",
                }}
              >
                Dashboard
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "10px",
                  fontSize: "18px",
                }}
              >
                Welcome back 👋
              </p>

            </div>

            {/* AVATAR */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#38bdf8,#6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                fontSize: "24px",
                boxShadow:
                  "0 10px 30px rgba(56,189,248,0.4)",
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
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "24px",
              marginBottom: "40px",
            }}
          >

            <Card
              title="Total Products"
              value={totalProducts}
              icon={
                <Package
                  size={28}
                  color="#a855f7"
                />
              }
              iconBg="rgba(168,85,247,0.15)"
            />

            <Card
              title="Total Quantity"
              value={totalQuantity}
              icon={
                <CreditCard
                  size={28}
                  color="#22d3ee"
                />
              }
              iconBg="rgba(34,211,238,0.15)"
            />

            <Card
              title="Revenue"
              value={`₹${totalRevenue.toLocaleString()}`}
              icon={
                <Brain
                  size={28}
                  color="#facc15"
                />
              }
              iconBg="rgba(250,204,21,0.15)"
            />

          </div>

          {/* CHART + PRODUCTS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "2fr 1fr",
              gap: "24px",
            }}
          >

            {/* CHART */}
            <div
              style={glassCard}
            >

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "20px",
                }}
              >
                Revenue Analytics
              </h2>

              <div
                style={{
                  width: "100%",
                  height: "350px",
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
                      dataKey="revenue"
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

            {/* RECENT PRODUCTS */}
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
                }}
              >
                Recent Products
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >

                {products
                  .slice(0, 8)
                  .map((product) => (

                    <div
                      key={product._id}
                      style={{
                        display: "flex",
                        gap: "15px",
                        alignItems:
                          "center",
                        background:
                          "rgba(255,255,255,0.05)",
                        padding: "14px",
                        borderRadius:
                          "16px",
                        transition:
                          "0.3s ease",
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
                          width: "70px",
                          height: "70px",
                          objectFit:
                            "cover",
                          borderRadius:
                            "14px",
                        }}
                      />

                      <div>

                        <h4
                          style={{
                            margin: 0,
                            marginBottom:
                              "6px",
                            fontSize:
                              "16px",
                          }}
                        >
                          {product.name}
                        </h4>

                        <p
                          style={{
                            margin: 0,
                            color:
                              "#94a3b8",
                          }}
                        >
                          ₹
                          {Number(
                            product.price
                          ).toFixed(2)}
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
        borderRadius: "24px",
        padding: "20px",
        border:
          "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        transition: "0.3s ease",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >

      {/* ICON */}
      <div
        style={{
          width: "65px",
          height: "65px",
          borderRadius: "18px",
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
            marginBottom: "8px",
            marginTop: 0,
          }}
        >
          {title}
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "28px",
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
  borderRadius: "24px",
  padding: "25px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.25)",
};