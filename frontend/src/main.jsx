import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Intake from "./pages/auth/Intake.jsx";
import DueDiligence from "./pages/auth/DueDillgence.jsx";
import Help from "./pages/auth/Help.jsx";
import Settings from "./pages/auth/Settings.jsx";
import Billing from "./pages/auth/Billing.jsx";
import Dashboard from "./pages/auth/Dashboard.jsx";
import Matters from "./pages/auth/matters/Matters.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/dashboard", element: <Dashboard /> },
  {
    path: "/due-diligence",
    element: <DueDiligence />,
  },
  { path: "/help", element: <Help /> },
  { path: "settings", element: <Settings /> },
  {
    path: "/billing",
    element: <Billing />,
  },
  { path: "/matters", element: <Matters /> },
  {
    path: "/intake",
    element: <Intake />,
  },
]);

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      useRefreshTokensFallback={true}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
);
