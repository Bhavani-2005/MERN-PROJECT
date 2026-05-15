import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

      const res = await loginUser(formData);

      alert("Login Successful");

      console.log(res.data);

      // save token
      localStorage.setItem("token", res.data.token);

      // save user
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );


      navigate("/dashboard");

    } catch (err) {

      alert(err.response.data.message);

    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `
          radial-gradient(circle at top right, rgba(76,0,255,0.25), transparent 20%),
          radial-gradient(circle at bottom left, rgba(0,119,255,0.18), transparent 25%),
          linear-gradient(135deg, #020617 0%, #020b2d 45%, #071133 100%)
        `,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "380px",
          padding: "45px",
          borderRadius: "28px",
          background: "rgba(15, 23, 42, 0.75)",
          border: "1px solid rgba(56,189,248,0.18)",
          backdropFilter: "blur(18px)",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >

        <div style={{ textAlign: "center" }}>

          <p
    style={{
      color: "white",
      fontSize: "20px",
      margin: 0,
    }}
  >
    Welcome back to Smart Artisan
  </p>

        </div>

        <input
  type="email"
  name="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={handleChange}
  style={inputStyle}
/>

<input
  type="password"
  name="password"
  placeholder="Enter your password"
  value={formData.password}
  onChange={handleChange}
  style={inputStyle}
/>

        <button style={buttonStyle}>
          Login
        </button>

        <GoogleLogin
  onSuccess={async (credentialResponse) => {

    try {

      const res = await axios.post(
        "https://smart-artisan-assistant.onrender.com/api/auth/google",
        {
          credential: credentialResponse.credential,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

    }
  }}

  onError={() => {
    console.log("Google Login Failed");
  }}
/>

        <p
          style={{
            color: "#cbd5e1",
            textAlign: "center",
          }}
        >
          Don't have an account?{" "}

          <Link
            to="/register"
            style={{
              color: "#38bdf8",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Register
          </Link>

        </p>

      </form>
    </div>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "14px",
  border: "none",
  background: "#38bdf8",
  color: "#020617",
  fontWeight: "bold",
  fontSize: "18px",
  cursor: "pointer",
  boxShadow: "0 10px 30px rgba(56,189,248,0.35)",
};