import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        type="button"
        onClick={() => loginWithRedirect()}
        className="text-slate-500 transition hover:text-slate-900"
      >
        Sign in
      </button>
    )
  );
};

export default LoginButton;
