import { ThemeProvider } from "@mui/material";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "../theme";
import App from "./App";
import { auctionSlice } from "./features/api/auctionSlice";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={auctionSlice}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApiProvider>
  </React.StrictMode>
);
