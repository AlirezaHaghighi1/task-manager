import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/LoginPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Signup from "./Pages/SignUpPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="body">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
