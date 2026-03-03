import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import SignIn from "./pages/SignIn.jsx";
import Intake from "./pages/auth/Intake.jsx";
import DueDillgence from "./pages/auth/DueDillgence.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/intake",
    element: <Intake />,
  },
  {  
  path: "/due-diligence",
    element: <DueDillgence />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
