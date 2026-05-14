import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api/authApi";

export default function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await registerUser(formData);

      alert(res.data.message);

      console.log(res.data);

    } catch (err) {

      alert(err.response.data.message);

    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background: `
          radial-gradient(circle at top right, rgba(76,0,255,0.25), transparent 20%),
          radial-gradient(circle at bottom left, rgba(0,119,255,0.18), transparent 25%),
          linear-gradient(135deg, #020617 0%, #020b2d 45%, #071133 100%)
        `,
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* Glow Effect */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.28), transparent 70%)",
          filter: "blur(80px)",
          top: "-100px",
          right: "-100px",
        }}
      />

      {/* Register Card */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: "420px",
          padding: "45px",
          borderRadius: "28px",
          background: "rgba(15, 23, 42, 0.75)",
          border: "1px solid rgba(227, 238, 244, 0.18)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          position: "relative",
          zIndex: 10,
        }}
      >

        {/* Heading */}
      <div style={{ textAlign: "center" }}>

  <p
    style={{
      color: "white",
      fontSize: "20px",
      margin: 0,
    }}
  >
    Create your Smart Artisan account
  </p>

</div>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          style={inputStyle}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          style={inputStyle}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          style={inputStyle}
        />

        {/* Button */}
        <button style={buttonStyle}>
          Register
        </button>

        {/* Login Link */}
        <p
          style={{
            color: "#cbd5e1",
            textAlign: "center",
            marginTop: "5px",
            fontSize: "15px",
          }}
        >
          Already have an account?{" "}

          <Link
            to="/login"
            style={{
              color: "#38bdf8",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>

        </p>

      </form>
    </div>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "16px",
  borderRadius: "14px",
  border: "none",
  background: "#38bdf8",
  color: "#020617",
  fontWeight: "bold",
  fontSize: "18px",
  cursor: "pointer",
  boxShadow: "0 10px 30px rgba(56,189,248,0.35)",
};