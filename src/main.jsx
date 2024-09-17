import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import Router from "./Router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasicProvider from "./ContextApis/BasicProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BasicProvider>
        <RouterProvider router={Router} />
        <ToastContainer />
      </BasicProvider>
            
    </QueryClientProvider>
  </StrictMode>
);
