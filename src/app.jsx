import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./main-page";
import Header from "./header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <MainPage />
  </React.StrictMode>
);
