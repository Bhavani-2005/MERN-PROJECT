export default function ArtisanDashboard() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  return (

    <div
      style={{
        minHeight: "100vh",

        background:
          "#020617",

        color: "white",

        padding: "40px",

        fontFamily:
          "Poppins",
      }}
    >

      <h1>
        Artisan Dashboard
      </h1>

      <p>
        Welcome {user?.name}
      </p>

    </div>
  );
}