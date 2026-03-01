import { useState } from "react";
import { Link } from "react-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 via-white to-white text-sm text-slate-900">
      <div className="w-full max-w-md rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="mb-6 text-center">
          <div className="text-[14px] font-medium text-slate-900">Scribor</div>
          <h1 className="mt-2 text-[22px] font-semibold tracking-[-0.02em] text-slate-900">
            Sign in
          </h1>
          <p className="mt-3 text-[14px] text-slate-500">
            Use your work email to access Scribor.
          </p>
        </div>

        {/* {formError ? (
          <div
            className="mb-4 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-[12px] text-rose-700"
            role="alert"
          >
            {formError}
          </div>
        ) : null} */}

        <form noValidate className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-[12px] font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-[13px] text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            {/* {fieldErrors.email ? (
              <p className="mt-1 text-[11px] text-rose-600">
                {fieldErrors.email}
              </p>
            ) : null} */}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-[12px] font-medium text-slate-700"
            >
              Password
            </label>
            <div className="mt-1 flex items-center rounded-md border border-slate-300 bg-white shadow-sm focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-300">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border-0 px-3 py-2 text-[13px] text-slate-900 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200/70 text-slate-400 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                {showPassword ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6A3 3 0 0013.4 13.4" />
                    <path d="M9.9 4.3A9.5 9.5 0 0121 12c-1.2 2.6-3.3 4.6-5.8 5.6" />
                    <path d="M6.2 6.2A9.5 9.5 0 003 12c1.2 2.6 3.3 4.6 5.8 5.6" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 5c-4.5 0-8.2 2.7-9 7 0.8 4.3 4.5 7 9 7s8.2-2.7 9-7c-0.8-4.3-4.5-7-9-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
            {/* {fieldErrors.password ? (
              <p className="mt-1 text-[11px] text-rose-600">
                {fieldErrors.password}
              </p>
            ) : null} */}
          </div>

          <div className="flex items-center justify-between text-[12px]">
            <Link
              href="/reset-password"
              className="text-slate-500 hover:text-slate-900"
            >
              Forgot password?
            </Link>
            <Link to="/" className="text-slate-500 hover:text-slate-900">
              Back to home
            </Link>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white shadow-[0_6px_16px_rgba(15,23,42,0.18)] transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
