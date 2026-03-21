import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export function ProtectedRoute({ children, params = "" }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({
        authorizationParams: {
          redirect_uri: window.location.origin + params,
        },
      });
    }
  }, [isAuthenticated, isLoading, loginWithRedirect, params]);

  if (!isAuthenticated) return null;

  return children;
}
