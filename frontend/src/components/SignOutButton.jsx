import { useAuth0 } from "@auth0/auth0-react";

const SignOutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button
        type="button"
        className="text-slate-500 transition hover:text-slate-900"
        onClick={() => logout()}
      >
        Sign Out
      </button>
    )
  );
};

export default SignOutButton;
