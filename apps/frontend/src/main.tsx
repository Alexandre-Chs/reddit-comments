import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import Providers from "./providers";
import App from "./App";

const router = createRouter({ routeTree });

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root container missing");

createRoot(rootElement).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
      <App />
    </Providers>
  </StrictMode>
);
