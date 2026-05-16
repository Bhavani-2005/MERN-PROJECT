import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import {
  Trash2,
  Package,
} from "lucide-react";

export default function Products() {

  const [products, setProducts] =
    useState([]);

  const [formData, setFormData] =
    useState({
      Product_Name: "",
      Craft_Type: "",
      Selling_Price: "",
      Units_Produced: "",
    });

  /* SAMPLE DATA */

  useEffect(() => {

    setProducts([
      {
        _id: 1,
        Product_Name:
          "Leather Wallet",
        Craft_Type:
          "Leather Craft",
        Selling_Price: 4802,
        Units_Produced: 7,
        Revenue: 33614,
      },

      {
        _id: 2,
        Product_Name:
          "Printed Fabric",
        Craft_Type:
          "Textile",
        Selling_Price: 1433,
        Units_Produced: 5,
        Revenue: 7165,
      },

      {
        _id: 3,
        Product_Name:
          "Traditional Dupatta",
        Craft_Type:
          "Handloom",
        Selling_Price: 1270,
        Units_Produced: 45,
        Revenue: 57150,
      },

      {
        _id: 4,
        Product_Name:
          "Terracotta Bowl",
        Craft_Type:
          "Pottery",
        Selling_Price: 3891,
        Units_Produced: 42,
        Revenue: 163422,
      },
    ]);

  }, []);

  /* HANDLE CHANGE */

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  /* ADD */

  const handleAdd = () => {

    const revenue =

      Number(
        formData.Selling_Price
      ) *

      Number(
        formData.Units_Produced
      );

    const newProduct = {

      _id: Date.now(),

      ...formData,

      Revenue: revenue,
    };

    setProducts([
      newProduct,
      ...products,
    ]);

    setFormData({
      Product_Name: "",
      Craft_Type: "",
      Selling_Price: "",
      Units_Produced: "",
    });
  };

  /* DELETE */

  const handleDelete = (id) => {

    setProducts(

      products.filter(
        (item) =>
          item._id !== id
      )
    );
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
              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",

              marginBottom: "20px",
            }}
          >

            <div>

              <h1
                style={{
                  margin: 0,

                  fontSize: "22px",

                  fontWeight:
                    "700",
                }}
              >
                Production
                Management
              </h1>

              <p
                style={{
                  color: "#94a3b8",

                  marginTop: "6px",

                  fontSize: "12px",
                }}
              >
                Track artisan
                production and
                inventory
              </p>

            </div>

            <input
              type="text"

              placeholder="Search artisan products..."

              style={{
                width: "320px",

                height: "42px",

                border: "none",

                outline: "none",

                borderRadius:
                  "14px",

                background:
                  "rgba(255,255,255,0.05)",

                color: "white",

                padding:
                  "0 16px",

                fontSize: "12px",

                border:
                  "1px solid rgba(255,255,255,0.05)",
              }}
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
                  "1fr 1fr",

                gap: "16px",

                marginBottom:
                  "16px",
              }}
            >

              <InputField
                name="Product_Name"
                placeholder="Craft/Product Name"
                value={
                  formData.Product_Name
                }
                onChange={
                  handleChange
                }
              />

              <InputField
                name="Craft_Type"
                placeholder="Craft Type"
                value={
                  formData.Craft_Type
                }
                onChange={
                  handleChange
                }
              />

              <InputField
                name="Selling_Price"
                placeholder="Selling Price"
                value={
                  formData.Selling_Price
                }
                onChange={
                  handleChange
                }
              />

              <InputField
                name="Units_Produced"
                placeholder="Units Produced"
                value={
                  formData.Units_Produced
                }
                onChange={
                  handleChange
                }
              />

            </div>

            <button
              onClick={handleAdd}

              style={{
                width: "100%",

                height: "48px",

                border: "none",

                borderRadius:
                  "16px",

                background:
                  "linear-gradient(135deg,#38bdf8,#0ea5e9)",

                color: "#03111f",

                fontWeight:
                  "700",

                fontSize: "15px",

                cursor:
                  "pointer",
              }}
            >
              Add Production Item
            </button>

          </div>

          {/* PRODUCT GRID */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",

              gap: "18px",
            }}
          >

            {products.map(
              (product) => (

                <div
                  key={product._id}

                  style={{
                    background:
                      "rgba(10,18,60,0.92)",

                    borderRadius:
                      "20px",

                    padding: "18px",

                    border:
                      "1px solid rgba(255,255,255,0.06)",

                    boxShadow:
                      "0 10px 25px rgba(0,0,0,0.25)",
                  }}
                >

                  {/* TOP */}

                  <div
                    style={{
                      display: "flex",

                      alignItems:
                        "center",

                      gap: "10px",

                      marginBottom:
                        "14px",
                    }}
                  >

                    <div
                      style={{
                        width: "42px",

                        height: "42px",

                        borderRadius:
                          "12px",

                        background:
                          "rgba(56,189,248,0.12)",

                        display: "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",
                      }}
                    >

                      <Package
                        size={18}
                        color="#38bdf8"
                      />

                    </div>

                    <h2
                      style={{
                        margin: 0,

                        fontSize:
                          "16px",

                        fontWeight:
                          "700",
                      }}
                    >
                      {
                        product.Product_Name
                      }
                    </h2>

                  </div>

                  {/* DETAILS */}

                  <div
                    style={{
                      display: "flex",

                      flexDirection:
                        "column",

                      gap: "8px",

                      marginBottom:
                        "18px",
                    }}
                  >

                    <TextRow
                      label="Craft Type"
                      value={
                        product.Craft_Type
                      }
                    />

                    <TextRow
                      label="Selling Price"
                      value={`₹${product.Selling_Price}`}
                    />

                    <TextRow
                      label="Units Produced"
                      value={
                        product.Units_Produced
                      }
                    />

                    <TextRow
                      label="Revenue"
                      value={`₹${product.Revenue}`}
                    />

                  </div>

                  {/* DELETE */}

                  <button
                    onClick={() =>
                      handleDelete(
                        product._id
                      )
                    }

                    style={{
                      width: "100%",

                      height: "42px",

                      border: "none",

                      borderRadius:
                        "14px",

                      background:
                        "linear-gradient(135deg,#ef4444,#dc2626)",

                      color: "white",

                      fontWeight:
                        "600",

                      fontSize:
                        "13px",

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      gap: "8px",

                      cursor:
                        "pointer",
                    }}
                  >

                    <Trash2
                      size={16}
                    />

                    Delete

                  </button>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </>
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

      style={{
        width: "100%",

        height: "46px",

        border: "none",

        outline: "none",

        borderRadius:
          "14px",

        background:
          "rgba(255,255,255,0.05)",

        color: "white",

        padding:
          "0 16px",

        fontSize: "13px",

        border:
          "1px solid rgba(255,255,255,0.05)",
      }}
    />
  );
}

/* TEXT ROW */

function TextRow({
  label,
  value,
}) {

  return (

    <div
      style={{
        display: "flex",

        justifyContent:
          "space-between",

        alignItems:
          "center",
      }}
    >

      <span
        style={{
          color:
            "#94a3b8",

          fontSize:
            "12px",
        }}
      >
        {label}
      </span>

      <span
        style={{
          fontSize:
            "13px",

          fontWeight:
            "600",
        }}
      >
        {value}
      </span>

    </div>
  );
}