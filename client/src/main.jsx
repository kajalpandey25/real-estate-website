import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-unwib2uznmp1ymj4.us.auth0.com"
     clientId="nxnI7UmTSQ0f8V5ZuoFxMwdot43ryb45"
    //  domain="dev-usn1h41sxibnaiah.us.auth0.com"
    // clientId="Al5n7IfPXb3diF1feaxtS6RNsW52Ws2L"
     authorizationParams={{
      redirect_uri: "http://localhost:5173/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
