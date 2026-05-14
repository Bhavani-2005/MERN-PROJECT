import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        background: `
          radial-gradient(circle at top right, rgba(76,0,255,0.25), transparent 20%),
          radial-gradient(circle at bottom right, rgba(0,119,255,0.20), transparent 30%),
          linear-gradient(135deg, #020617 0%, #020b2d 45%, #071133 100%)
        `,
        color: "white",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      {/* Right Glow */}
      <div
        style={{
          position: "absolute",
          right: "-200px",
          bottom: "-200px",
          width: "650px",
          height: "650px",
          background:
            "radial-gradient(circle, rgba(98,0,255,0.40), transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Curves */}
      <div
        style={{
          position: "absolute",
          right: "-120px",
          top: "100px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          border: "1px solid rgba(56,189,248,0.10)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "-40px",
          top: "150px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          border: "1px solid rgba(56,189,248,0.08)",
        }}
      />

      {/* Navbar */}
      <nav
        style={{
          width: "100%",
          padding: "28px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            fontWeight: "bold",
            color: "#38bdf8",
            margin: 0,
          }}
        >
          Smart Artisan
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              background: "#38bdf8",
              padding: "16px 32px",
              borderRadius: "16px",
              color: "#020617",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
              boxShadow: "0 10px 30px rgba(56,189,248,0.35)",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 60px",
          boxSizing: "border-box",
          gap: "40px",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: 1,
            maxWidth: "700px",
          }}
        >
          <p
            style={{
              color: "#38bdf8",
              letterSpacing: "3px",
              fontWeight: "bold",
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            AI POWERED ARTISAN PLATFORM
          </p>

          <h1
            style={{
              fontSize: "82px",
              lineHeight: "1.05",
              fontWeight: "800",
              marginTop: 0,
              marginBottom: "30px",
            }}
          >
            Empowering
            <br />
            Local Artisans
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "24px",
              lineHeight: "1.8",
              maxWidth: "650px",
              marginBottom: "45px",
            }}
          >
            Manage production, track payments, monitor earnings,
            and receive AI-driven product insights —
            all from one modern platform.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "22px",
            }}
          >
            <Link
              to="/register"
              style={{
                background: "#38bdf8",
                padding: "18px 38px",
                borderRadius: "16px",
                color: "#020617",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "22px",
                boxShadow: "0 10px 30px rgba(56,189,248,0.35)",
              }}
            >
              Start Free
            </Link>

            <Link
              to="/login"
              style={{
                border: "2px solid #38bdf8",
                padding: "18px 38px",
                borderRadius: "16px",
                color: "#38bdf8",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Login
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            width: "480px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
              padding: "28px",
              borderRadius: "26px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(56,189,248,0.12)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              style={{
                width: "82px",
                height: "82px",
                borderRadius: "22px",
                background: "#081b4b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
              }}
            >
              📈
            </div>

            <div>
              <h2
                style={{
                  fontSize: "30px",
                  margin: 0,
                  marginBottom: "8px",
                }}
              >
                Track Production
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#cbd5e1",
                  fontSize: "20px",
                  lineHeight: "1.5",
                }}
              >
                Daily production & material tracking
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
              padding: "28px",
              borderRadius: "26px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(56,189,248,0.12)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              style={{
                width: "82px",
                height: "82px",
                borderRadius: "22px",
                background: "#081b4b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
              }}
            >
              💳
            </div>

            <div>
              <h2
                style={{
                  fontSize: "30px",
                  margin: 0,
                  marginBottom: "8px",
                }}
              >
                Monitor Payments
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#cbd5e1",
                  fontSize: "20px",
                  lineHeight: "1.5",
                }}
              >
                Track payments & outstanding amounts
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
              padding: "28px",
              borderRadius: "26px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(56,189,248,0.12)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              style={{
                width: "82px",
                height: "82px",
                borderRadius: "22px",
                background: "#081b4b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
              }}
            >
              🧠
            </div>

            <div>
              <h2
                style={{
                  fontSize: "30px",
                  margin: 0,
                  marginBottom: "8px",
                }}
              >
                AI Insights
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#cbd5e1",
                  fontSize: "20px",
                  lineHeight: "1.5",
                }}
              >
                Get AI suggestions & defect analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}