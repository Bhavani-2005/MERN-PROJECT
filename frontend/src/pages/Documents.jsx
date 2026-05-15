import { useState } from "react";

export default function Documents() {

  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (

    <div
      style={{
        padding: "30px",
        color: "white",
      }}
    >

      <h1>Document Repository</h1>

      <div
        style={{
          marginTop: "30px",
          background: "#111c44",
          padding: "30px",
          borderRadius: "14px",
          width: "400px",
        }}
      >

        <input
          type="file"
          onChange={handleUpload}
        />

        {file && (

          <p style={{ marginTop: "20px" }}>
            Uploaded: {file.name}
          </p>

        )}

      </div>

    </div>
  );
}