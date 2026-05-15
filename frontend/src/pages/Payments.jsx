import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Payments() {

  const [payments, setPayments] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    /* DUMMY PAYMENTS */
    setPayments([
      {
        id: 1,
        transactionId:
          "TXN10231",
        customer:
          "Andrew Allen",
        product:
          "Xerox 1967",
        amount: 1550,
        status: "Success",
        date: "14 May 2026",
      },

      {
        id: 2,
        transactionId:
          "TXN10232",
        customer:
          "John Smith",
        product:
          "Panasonic Speaker",
        amount: 4200,
        status: "Pending",
        date: "13 May 2026",
      },

      {
        id: 3,
        transactionId:
          "TXN10233",
        customer: "Veena",
        product:
          "Office Chair",
        amount: 8999,
        status: "Success",
        date: "12 May 2026",
      },

      {
        id: 4,
        transactionId:
          "TXN10234",
        customer: "David",
        product: "Laptop",
        amount: 65000,
        status: "Failed",
        date: "11 May 2026",
      },
    ]);

  }, []);

  /* TOTAL REVENUE */
  const totalAmount =
    payments.reduce(
      (acc, item) =>
        acc + item.amount,
      0
    );

  /* SUCCESS COUNT */
  const successPayments =
    payments.filter(
      (item) =>
        item.status ===
        "Success"
    ).length;

  /* PENDING COUNT */
  const pendingPayments =
    payments.filter(
      (item) =>
        item.status ===
        "Pending"
    ).length;

  /* SEARCH FILTER */
  const filteredPayments =
    payments.filter(
      (payment) =>
        payment.customer
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||

        payment.product
          .toLowerCase()
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
            padding: "40px",
            color: "white",
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
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "35px",
            }}
          >

            <div>

              <h1
                style={{
                  fontSize: "50px",
                  marginBottom: "10px",
                }}
              >
                Payments
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "18px",
                }}
              >
                Track all transactions
              </p>

            </div>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search customer or product..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              style={{
                width: "360px",
                padding: "16px",
                borderRadius:
                  "16px",
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

          {/* KPI CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
              marginBottom: "40px",
            }}
          >

            {/* TOTAL */}
            <div
              style={cardStyle}
            >

              <h3
                style={cardTitle}
              >
                Total Revenue
              </h3>

              <h1
                style={cardValue}
              >
                ₹
                {totalAmount.toLocaleString()}
              </h1>

            </div>

            {/* SUCCESS */}
            <div
              style={cardStyle}
            >

              <h3
                style={cardTitle}
              >
                Successful Payments
              </h3>

              <h1
                style={cardValue}
              >
                {
                  successPayments
                }
              </h1>

            </div>

            {/* PENDING */}
            <div
              style={cardStyle}
            >

              <h3
                style={cardTitle}
              >
                Pending Payments
              </h3>

              <h1
                style={cardValue}
              >
                {
                  pendingPayments
                }
              </h1>

            </div>

          </div>

          {/* TABLE */}
          <div
            style={{
              background:
                "rgba(11,20,79,0.85)",
              backdropFilter:
                "blur(12px)",
              borderRadius:
                "24px",
              padding: "25px",
              overflowX:
                "auto",
              border:
                "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >

            <table
              style={{
                width: "100%",
                borderCollapse:
                  "collapse",
              }}
            >

              <thead>

                <tr
                  style={{
                    borderBottom:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >

                  <th
                    style={
                      tableHead
                    }
                  >
                    Transaction ID
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Customer
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Product
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Amount
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Date
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredPayments.map(
                  (
                    payment
                  ) => (

                    <tr
                      key={
                        payment.id
                      }
                      style={{
                        borderBottom:
                          "1px solid rgba(255,255,255,0.05)",
                      }}
                    >

                      <td
                        style={
                          tableData
                        }
                      >
                        {
                          payment.transactionId
                        }
                      </td>

                      <td
                        style={
                          tableData
                        }
                      >
                        {
                          payment.customer
                        }
                      </td>

                      <td
                        style={
                          tableData
                        }
                      >
                        {
                          payment.product
                        }
                      </td>

                      <td
                        style={
                          tableData
                        }
                      >
                        ₹
                        {
                          payment.amount
                        }
                      </td>

                      <td
                        style={
                          tableData
                        }
                      >
                        {
                          payment.date
                        }
                      </td>

                      <td
                        style={
                          tableData
                        }
                      >

                        <span
                          style={{
                            padding:
                              "8px 14px",

                            borderRadius:
                              "12px",

                            background:
                              payment.status ===
                              "Success"
                                ? "#16a34a"

                                : payment.status ===
                                  "Pending"
                                ? "#f59e0b"

                                : "#dc2626",

                            color:
                              "white",

                            fontSize:
                              "13px",

                            fontWeight:
                              "bold",
                          }}
                        >

                          {
                            payment.status
                          }

                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </>
  );
}

/* CARD STYLE */
const cardStyle = {
  background:
    "rgba(11,20,79,0.85)",

  backdropFilter:
    "blur(12px)",

  padding: "28px",

  borderRadius: "24px",

  border:
    "1px solid rgba(255,255,255,0.08)",

  boxShadow:
    "0 10px 30px rgba(0,0,0,0.25)",
};

const cardTitle = {
  color: "#94a3b8",
  marginBottom: "12px",
  fontSize: "16px",
};

const cardValue = {
  fontSize: "38px",
  fontWeight: "700",
};

/* TABLE HEAD */
const tableHead = {
  textAlign: "left",
  padding: "18px",
  color: "#94a3b8",
  fontSize: "15px",
};

/* TABLE DATA */
const tableData = {
  padding: "18px",
  fontSize: "15px",
};