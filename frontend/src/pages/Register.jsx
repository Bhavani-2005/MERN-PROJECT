import { useState } from "react";

import { Link } from "react-router-dom";

import {
  registerUser,
} from "../api/authApi";

export default function Register() {

  const [formData,
    setFormData] =
    useState({

      name: "",

      email: "",

      password: "",

      role: "",
    });

  /* HANDLE INPUT */

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,
      });
    };

  /* REGISTER */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const res =
          await registerUser(
            formData
          );

        alert(
          res.data.message
        );

        console.log(
          res.data
        );

      } catch (err) {

        console.log(err);

        alert(

          err.response?.data
            ?.message ||

          "Registration failed"
        );
      }
    };

  return (

    <div
      style={{

        minHeight: "100vh",

        width: "100%",

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        overflow: "hidden",

        background: `
          radial-gradient(circle at top right, rgba(76,0,255,0.25), transparent 20%),
          radial-gradient(circle at bottom left, rgba(0,119,255,0.18), transparent 25%),
          linear-gradient(135deg, #020617 0%, #020b2d 45%, #071133 100%)
        `,

        position: "relative",

        fontFamily:
          "'Poppins', sans-serif",
      }}
    >

      {/* GLOW */}

      <div
        style={{

          position: "absolute",

          width: "450px",

          height: "450px",

          background:
            "radial-gradient(circle, rgba(56,189,248,0.25), transparent 70%)",

          filter:
            "blur(80px)",

          top: "-100px",

          right: "-100px",
        }}
      />

      {/* CARD */}

      <form

        onSubmit={
          handleSubmit
        }

        style={{

          width: "380px",

          padding: "45px",

          borderRadius:
            "28px",

          background:
            "rgba(15, 23, 42, 0.75)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter:
            "blur(18px)",

          boxShadow:
            "0 20px 60px rgba(0,0,0,0.45)",

          display: "flex",

          flexDirection:
            "column",

          gap: "22px",

          position: "relative",

          zIndex: 10,
        }}
      >

        {/* HEADING */}

        <div
          style={{
            textAlign:
              "center",
          }}
        >

          <p
            style={{

              color: "white",

              fontSize:
                "20px",

              margin: 0,
            }}
          >
            Create your Smart Artisan account
          </p>

        </div>

        {/* NAME */}

        <input

          type="text"

          name="name"

          placeholder="Enter your name"

          value={
            formData.name
          }

          onChange={
            handleChange
          }

          required

          style={
            inputStyle
          }
        />

        {/* EMAIL */}

        <input

          type="email"

          name="email"

          placeholder="Enter your email"

          value={
            formData.email
          }

          onChange={
            handleChange
          }

          required

          style={
            inputStyle
          }
        />

        {/* PASSWORD */}

        <input

          type="password"

          name="password"

          placeholder="Enter your password"

          value={
            formData.password
          }

          onChange={
            handleChange
          }

          required

          style={
            inputStyle
          }
        />

        {/* ROLE */}

        <select

          name="role"

          value={
            formData.role
          }

          onChange={
            handleChange
          }

          required

          style={
            inputStyle
          }
        >

          <option value="">
            Select Role
          </option>

          <option value="admin">
            Admin
          </option>

          <option value="cluster-head">
            Cluster Head
          </option>

          <option value="artisan">
            Artisan
          </option>

        </select>

        {/* BUTTON */}

        <button
          style={
            buttonStyle
          }
        >
          Register
        </button>

        {/* LOGIN */}

        <p
          style={{

            color:
              "#cbd5e1",

            textAlign:
              "center",

            marginTop:
              "5px",

            fontSize:
              "15px",
          }}
        >

          Already have an account?{" "}

          <Link

            to="/login"

            style={{

              color:
                "#38bdf8",

              textDecoration:
                "none",

              fontWeight:
                "bold",
            }}
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}

/* INPUT STYLE */

const inputStyle = {

  padding: "14px",

  borderRadius:
    "14px",

  border:
    "1px solid rgba(255,255,255,0.08)",

  background:
    "rgba(255,255,255,0.06)",

  color: "white",

  fontSize: "16px",

  outline: "none",
};

/* BUTTON STYLE */

const buttonStyle = {

  padding: "14px",

  borderRadius:
    "14px",

  border: "none",

  background:
    "#38bdf8",

  color:
    "#020617",

  fontWeight:
    "bold",

  fontSize:
    "18px",

  cursor:
    "pointer",

  boxShadow:
    "0 10px 30px rgba(56,189,248,0.35)",
};