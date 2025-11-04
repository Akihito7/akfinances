import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Routes } from "./routes";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { Toaster, toast } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
    <Toaster />
  </React.StrictMode>
);
