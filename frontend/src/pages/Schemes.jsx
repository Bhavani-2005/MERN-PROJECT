export default function Schemes() {

  const schemes = [
    {
      title:
        "National Handloom Development Programme",

      description:
        "Support for handloom workers and women artisans.",
    },

    {
      title: "Silk Samagra Scheme",

      description:
        "Financial support for sericulture and silk production.",
    },

    {
      title: "Mudra Loan",

      description:
        "Small business loans for rural women entrepreneurs.",
    },
  ];

  return (
    <div
      style={{
        padding: "30px",
        color: "white",
      }}
    >

      <h1>Government Schemes</h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "25px",
        }}
      >

        {schemes.map((scheme, index) => (

          <div
            key={index}
            style={{
              background: "#111c44",
              padding: "20px",
              borderRadius: "14px",
            }}
          >

            <h2>{scheme.title}</h2>

            <p>{scheme.description}</p>

          </div>

        ))}

      </div>

    </div>
  );
}