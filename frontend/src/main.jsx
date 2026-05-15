import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="547199339964-fis09fdl3flqqr1e8j00jj7v7ijrllpn.apps.googleusercontent.com">
  <App />
</GoogleOAuthProvider>
  </React.StrictMode>
);