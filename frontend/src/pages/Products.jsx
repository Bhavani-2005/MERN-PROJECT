import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  /* FETCH PRODUCTS */
  const fetchProducts = async () => {

    try {

      const res = await axios.get(
       "https://smart-artisan-backend.onrender.com/api/products"
      );

      setProducts(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchProducts();

  }, []);

  /* HANDLE INPUT */
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ADD PRODUCT */
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://smart-artisan-backend.onrender.com/api/products",
        {
          ...formData,
          image:
            "https://placehold.co/300",
        }
      );

      setFormData({
        name: "",
        category: "",
        price: "",
        quantity: "",
      });

      fetchProducts();

    } catch (error) {

      console.log(error);
    }
  };

  /* DELETE PRODUCT */
  const deleteProduct = async (id) => {

    try {

      await axios.delete(
        `https://smart-artisan-backend.onrender.com/api/products/${id}`
      );

      fetchProducts();

    } catch (error) {

      console.log(error);
    }
  };

  /* SEARCH FILTER */
  const filteredProducts =
    products.filter((product) =>
      product.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

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
            color: "white",
            padding: "24px",
            fontFamily:
              "'Poppins', sans-serif",
          }}
        >

          {/* TOP */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "35px",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >

            <div>

              <h1
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                }}
              >
                Products
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "18px",
                }}
              >
                Manage all your products
              </p>

            </div>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              style={{
                width: "350px",
                padding: "16px",
                borderRadius: "16px",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                background:
                  "rgba(11,20,79,0.85)",
                color: "white",
                fontSize: "16px",
                outline: "none",
              }}
            />

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            style={{
              background:
                "rgba(11,20,79,0.85)",
              backdropFilter:
                "blur(12px)",
              borderRadius: "24px",
              padding: "30px",
              border:
                "1px solid rgba(255,255,255,0.08)",
              marginBottom: "40px",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                gridColumn:
                  "span 2",
                padding: "18px",
                borderRadius:
                  "16px",
                border: "none",
                background:
                  "linear-gradient(135deg,#38bdf8,#0ea5e9)",
                color: "#020617",
                fontWeight: "700",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Add Product
            </button>

          </form>

          {/* PRODUCT CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "25px",
            }}
          >

            {filteredProducts.map(
              (product) => (

                <div
                  key={product._id}
                  style={{
                    background:
                      "rgba(11,20,79,0.85)",
                    backdropFilter:
                      "blur(12px)",
                    borderRadius:
                      "24px",
                    padding: "18px",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    flexDirection:
                      "column",
                    justifyContent:
                      "space-between",
                    transition:
                      "0.3s ease",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.25)",
                  }}
                >

                  {/* IMAGE */}
                  <img
                    src={
                      product.category ===
                      "Furniture"
                        ? "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80"

                        : product.category ===
                          "Technology"
                        ? "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80"

                        : product.category ===
                          "Office Supplies"
                        ? "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80"

                        : product.category ===
                          "Clothing"
                        ? "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"

                        : product.category ===
                          "Bags"
                        ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"

                        : product.category ===
                          "Electronics"
                        ? "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"

                        : "https://placehold.co/300x200"
                    }

                    alt={
                      product.name
                    }

                    style={{
                      width: "100%",
                      height: "130px",
                      objectFit:
                        "cover",
                      borderRadius:
                        "18px",
                      marginBottom:
                        "18px",
                    }}
                  />

                  {/* NAME */}
                  <h2
                    style={{
                      fontSize:
                        "20px",
                      lineHeight:
                        "30px",
                      marginBottom:
                        "12px",
                    }}
                  >
                    {product.name}
                  </h2>

                  {/* DETAILS */}
                  <p
                    style={
                      textStyle
                    }
                  >
                    Category:{" "}
                    {
                      product.category
                    }
                  </p>

                  <p
                    style={
                      textStyle
                    }
                  >
                    Price: ₹
                    {Number(
                      product.price
                    ).toFixed(2)}
                  </p>

                  <p
                    style={
                      textStyle
                    }
                  >
                    Quantity:{" "}
                    {
                      product.quantity
                    }
                  </p>

                  {/* DELETE */}
                  <button
                    onClick={() =>
                      deleteProduct(
                        product._id
                      )
                    }

                    style={{
                      width: "100%",
                      marginTop:
                        "20px",
                      padding:
                        "14px",
                      borderRadius:
                        "14px",
                      border:
                        "none",
                      background:
                        "linear-gradient(135deg,#ef4444,#dc2626)",
                      color:
                        "white",
                      fontWeight:
                        "600",
                      cursor:
                        "pointer",
                      fontSize:
                        "15px",
                    }}
                  >
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

/* INPUT STYLE */
const inputStyle = {
  padding: "16px",
  borderRadius: "16px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  background:
    "rgba(255,255,255,0.05)",
  color: "white",
  fontSize: "16px",
  outline: "none",
};

/* TEXT STYLE */
const textStyle = {
  color: "#cbd5e1",
  marginBottom: "8px",
  fontSize: "15px",
  lineHeight: "24px",
};