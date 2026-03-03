import { useAuth0 } from "@auth0/auth0-react";

const SignOutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <div className="flex items-center justify-end gap-4 text-[15px]">
          <a
            href="/dashboard"
            className="text-slate-500 transition hover:text-slate-900"
          >
            Go to Dashboard
          </a>

          <button
            type="button"
            className="text-slate-500 transition hover:text-slate-900"
            onClick={() => logout()}
          >
            Sign Out
          </button>
        </div>
      </>
    )
  );
};

export default SignOutButton;
