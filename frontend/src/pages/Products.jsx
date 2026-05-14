import { useEffect, useState } from "react";

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../api/productApi";

export default function Products() {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {

      const data = await getProducts();

  setProducts(data.products || []);

    } catch (error) {

      console.log(error);

    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editingId) {

        await updateProduct(editingId, formData);

        alert("Product Updated");

        setEditingId(null);

      } else {

        await createProduct(formData);

        alert("Product Added");
      }

      setFormData({
        name: "",
        category: "",
        price: "",
        quantity: "",
        description: "",
        image: "",
      });

      fetchProducts();

    } catch (error) {

      console.log(error);

    }
  };

  const handleDelete = async (id) => {

    try {

      await deleteProduct(id);

      fetchProducts();

    } catch (error) {

      console.log(error);

    }
  };

  const handleEdit = (product) => {

    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      image: product.image,
    });

    setEditingId(product._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(
    search.toLowerCase()
  )
);
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617 0%, #020b2d 50%, #071133 100%)",
        padding: "40px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "52px",
          }}
        >
          <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "100%",
    padding: "16px",
    marginBottom: "30px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    fontSize: "16px",
    outline: "none",
  }}
/>
          Products
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
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
          </div>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              width: "100%",
              marginTop: "20px",
              minHeight: "120px",
              resize: "none",
            }}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            style={{
              ...inputStyle,
              width: "100%",
              marginTop: "20px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "18px",
              border: "none",
              borderRadius: "14px",
              background: "#38bdf8",
              color: "#020617",
              fontWeight: "bold",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            {editingId ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* PRODUCTS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              style={{
                width: "300px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              />

              <h2>{product.name}</h2>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>

              <p>
                <strong>Quantity:</strong> {product.quantity}
              </p>

              <p>{product.description}</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  marginTop: "20px",
                }}
              >
                <button
                  onClick={() => handleEdit(product)}
                  style={{
                    padding: "10px 18px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#f59e0b",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(product._id)}
                  style={{
                    padding: "10px 18px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#ef4444",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "18px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  fontSize: "16px",
  outline: "none",
};