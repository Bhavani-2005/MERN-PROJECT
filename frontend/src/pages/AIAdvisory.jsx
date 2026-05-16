{/* CHAT AREA */}

<div
  style={{
    height: "420px",

    overflowY:
      "auto",

    padding: "18px",

    display: "flex",

    flexDirection:
      "column",

    gap: "16px",
  }}
>

  {messages.map(
    (
      item,
      index
    ) => (

      <div
        key={index}

        style={{
          display: "flex",

          justifyContent:

            item.type ===
            "user"

              ? "flex-end"

              : "flex-start",
        }}
      >

        <div
          style={{
            maxWidth:
              "70%",

            background:

              item.type ===
              "user"

                ? "linear-gradient(135deg,#2563eb,#38bdf8)"

                : "rgba(255,255,255,0.05)",

            padding:
              "14px 16px",

            borderRadius:
              "18px",

            border:

              item.type ===
              "ai"

                ? "1px solid rgba(255,255,255,0.05)"

                : "none",

            display: "flex",

            gap: "10px",

            alignItems:
              "flex-start",
          }}
        >

          {item.type ===
          "ai" ? (

            <Bot
              size={18}
              color="#38bdf8"
            />

          ) : (

            <User
              size={18}
              color="white"
            />

          )}

          <div
            style={{
              margin: 0,

              lineHeight:
                "22px",

              fontSize:
                "13px",

              whiteSpace:
                "pre-wrap",
            }}
          >
            {item.text
              .replace(
                /###/g,
                "\n• "
              )
              .replace(
                /\*\*/g,
                ""
              )
              .replace(
                /#/g,
                ""
              )
              .replace(
                /\n\n/g,
                "\n"
              )}
          </div>

        </div>

      </div>

    )
  )}

  {loading && (

    <div
      style={{
        display: "flex",

        justifyContent:
          "flex-start",
      }}
    >

      <div
        style={{
          background:
            "rgba(255,255,255,0.05)",

          padding:
            "12px 16px",

          borderRadius:
            "16px",

          fontSize:
            "13px",

          color:
            "#94a3b8",
        }}
      >
        AI is typing...
      </div>

    </div>

  )}

</div>

export default AIAdvisory;