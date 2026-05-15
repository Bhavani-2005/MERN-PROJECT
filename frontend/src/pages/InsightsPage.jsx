import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  Brain,
  TrendingUp,
  AlertTriangle,
  ShoppingBag,
} from "lucide-react";

export default function AIInsights() {

  const insights = [
    {
      title: "Top Selling Category",
      value: "Technology",
      icon: <TrendingUp size={28} />,
      color: "#38bdf8",
    },

    {
      title: "Highest Revenue Product",
      value: "Canon Printer",
      icon: <ShoppingBag size={28} />,
      color: "#22c55e",
    },

    {
      title: "Low Stock Products",
      value: "12 Products",
      icon: <AlertTriangle size={28} />,
      color: "#f59e0b",
    },

    {
      title: "AI Confidence",
      value: "98%",
      icon: <Brain size={28} />,
      color: "#a855f7",
    },
  ];

  const recommendations = [
    "Technology products are generating the highest revenue growth.",

    "Furniture sales increased by 18% compared to last month.",

    "12 products are low in stock and require urgent restocking.",

    "Office Supplies category has the highest order quantity.",

    "West region customers contribute the most revenue.",
  ];

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
              "linear-gradient(135deg,#020617,#08135C)",
            padding: "24px",
            color: "white",
            fontFamily:
              "'Poppins', sans-serif",
          }}
        >

          {/* HEADER */}
          <div
            style={{
              marginBottom: "40px",
            }}
          >

            <h1
              style={{
                fontSize: "36px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              AI Insights
            </h1>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "18px",
              }}
            >
              Smart business analytics powered by AI
            </p>

          </div>

          {/* AI CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
              marginBottom: "45px",
            }}
          >

            {insights.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  style={{
                    background:
                      "rgba(11,20,79,0.85)",

                    backdropFilter:
                      "blur(12px)",

                    borderRadius:
                      "24px",

                    padding: "20px",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.25)",

                    transition:
                      "0.3s ease",

                    display: "flex",

                    flexDirection:
                      "column",

                    gap: "20px",
                  }}
                >

                  {/* ICON */}
                  <div
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius:
                        "18px",

                      background:
                        `${item.color}20`,

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      color:
                        item.color,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>

                    <p
                      style={{
                        color:
                          "#94a3b8",

                        marginBottom:
                          "10px",

                        fontSize:
                          "16px",
                      }}
                    >
                      {
                        item.title
                      }
                    </p>

                    <h2
                      style={{
                        color:
                          item.color,

                        fontSize:
                          "30px",

                        fontWeight:
                          "700",
                      }}
                    >
                      {
                        item.value
                      }
                    </h2>

                  </div>

                </div>

              )
            )}

          </div>

          {/* RECOMMENDATIONS */}
          <div
            style={{
              background:
                "rgba(11,20,79,0.85)",

              backdropFilter:
                "blur(12px)",

              borderRadius:
                "28px",

              padding: "35px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >

            <h2
              style={{
                marginBottom: "30px",
                fontSize: "38px",
                fontWeight: "700",
              }}
            >
              Smart Recommendations
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",

                gap: "22px",
              }}
            >

              {recommendations.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    style={{
                      background:
                        "rgba(255,255,255,0.05)",

                      padding:
                        "24px",

                      borderRadius:
                        "18px",

                      border:
                        "1px solid rgba(255,255,255,0.08)",

                      fontSize:
                        "17px",

                      color:
                        "#e2e8f0",

                      lineHeight:
                        "28px",

                      display:
                        "flex",

                      alignItems:
                        "center",

                      gap: "16px",
                    }}
                  >

                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius:
                          "12px",

                        background:
                          "#111c63",

                        display:
                          "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",
                      }}
                    >
                      🤖
                    </div>

                    {item}

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </>
  );
}