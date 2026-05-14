import {
  LayoutDashboard,
  Package,
  CreditCard,
  Brain,
  User,
  LogOut,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { getDashboardData } from "../api/dashboardApi";

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
    (acc, item) => acc + Number(item.quantity),
    0
  );

  const totalRevenue = products.reduce(
    (acc, item) =>
      acc + Number(item.price) * Number(item.quantity),
    0
  );

  /* CHART DATA */

  const chartData = products.map((item) => ({
    name: item.name,
    revenue: item.price * item.quantity,
  }));

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background:
          "linear-gradient(135deg, #020617 0%, #020b2d 45%, #071133 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* SIDEBAR */}
      <div
        style={{
          width: "260px",
          background: "rgba(255,255,255,0.03)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >

        <div>

          <h1
            style={{
              color: "#38bdf8",
              fontSize: "32px",
              marginBottom: "50px",
            }}
          >
            Smart Artisan
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >

            <Link
              to="/dashboard"
              style={{ textDecoration: "none" }}
            >
              <SidebarItem
                icon={<LayoutDashboard size={22} />}
                text="Dashboard"
                active
              />
            </Link>

            <Link
              to="/products"
              style={{ textDecoration: "none" }}
            >
              <SidebarItem
                icon={<Package size={22} />}
                text="Products"
              />
            </Link>

            <Link
              to="/payments"
              style={{ textDecoration: "none" }}
            >
              <SidebarItem
                icon={<CreditCard size={22} />}
                text="Payments"
              />
            </Link>

            <Link
              to="/ai"
              style={{ textDecoration: "none" }}
            >
              <SidebarItem
                icon={<Brain size={22} />}
                text="AI Insights"
              />
            </Link>

            <Link
              to="/profile"
              style={{ textDecoration: "none" }}
            >
              <SidebarItem
                icon={<User size={22} />}
                text="Profile"
              />
            </Link>

          </div>
        </div>

        <div
  onClick={() => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/login";
  }}
>
  <SidebarItem
    icon={<LogOut size={22} />}
    text="Logout"
  />
</div>

      </div>

      {/* MAIN */}
      <div
        style={{
          flex: 1,
          padding: "35px",
        }}
      >

        {/* TOP */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "35px",
          }}
        >

          <div>

            <h1
              style={{
                margin: 0,
                fontSize: "42px",
              }}
            >
              Dashboard
            </h1>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "8px",
                fontSize: "18px",
              }}
            >
              Welcome back 👋
            </p>

          </div>

          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: "#38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "#020617",
              fontSize: "22px",
            }}
          >
            A
          </div>

        </div>

        {/* KPI CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
            marginBottom: "35px",
          }}
        >

          <Card
  title="Total Products"
  value={totalProducts}
  icon={<Package size={28} color="#a855f7" />}
  iconBg="rgba(168,85,247,0.15)"
/>

<Card
  title="Total Quantity"
  value={totalQuantity}
  icon={<CreditCard size={28} color="#22d3ee" />}
  iconBg="rgba(34,211,238,0.15)"
/>

<Card
  title="Total Revenue"
  value={`₹${totalRevenue}`}
  icon={<Brain size={28} color="#facc15" />}
  iconBg="rgba(250,204,21,0.15)"
/>

        </div>

        {/* CHART + PRODUCTS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
          }}
        >

          {/* CHART */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "24px",
              padding: "25px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >

            <h2
              style={{
                marginTop: 0,
                marginBottom: "20px",
              }}
            >
              Revenue Analytics
            </h2>

            <div style={{ width: "100%", height: 350 }}>

              <ResponsiveContainer>

                <BarChart data={chartData}>

                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                  />

                  <YAxis stroke="#94a3b8" />

                  <Tooltip />

                  <Bar
                    dataKey="revenue"
                    fill="#38bdf8"
                    radius={[8, 8, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* RECENT PRODUCTS */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "24px",
              padding: "25px",
              border: "1px solid rgba(255,255,255,0.08)",
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

              {products.map((product) => (

                <div
                  key={product._id}
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.05)",
                    padding: "12px",
                    borderRadius: "14px",
                  }}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />

                  <div>

                    <h4
                      style={{
                        margin: 0,
                        marginBottom: "6px",
                      }}
                    >
                      {product.name}
                    </h4>

                    <p
                      style={{
                        margin: 0,
                        color: "#94a3b8",
                      }}
                    >
                      ₹{product.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* SIDEBAR */
function SidebarItem({ icon, text, active }) {

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "15px 18px",
        borderRadius: "16px",
        cursor: "pointer",
        background: active
          ? "rgba(56,189,248,0.15)"
          : "transparent",
        color: active ? "#38bdf8" : "white",
        fontWeight: "600",
      }}
    >
      {icon}
      {text}
    </div>
  );
}

/* CARD */
function Card({ title, value, icon, iconBg }) {

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: "22px",
        padding: "25px",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "20px",
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
            marginBottom: "10px",
            marginTop: 0,
          }}
        >
          {title}
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "38px",
          }}
        >
          {value}
        </h1>

      </div>

    </div>
  );
}