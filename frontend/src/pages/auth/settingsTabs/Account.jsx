import React from "react";

const SettingsAccount = ({ themeMode, setThemeMode }) => {
  const credentials = [
    {
      id: "Email Address",
      placeholder: "john.doe@example.com",
      label: "Change email",
    },
    {
      id: "Password",
      placeholder: "••••••••••",
      label: "Change password",
    },
  ];

  const themes = ["light", "dark", "system"];

  return (
    <div
      id="settings-tab-account"
      role="tabpanel"
      aria-labelledby="settings-tab-button-account"
      className="space-y-6"
    >
      {/* Profile */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Profile</h2>
            <p className="mt-1 text-[13px] text-slate-500">
              Update your basic details and profile image.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
            NK
          </div>
          <div className="space-y-1">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
            >
              Upload
            </button>
            <p className="text-[11px] text-slate-500">PNG/JPG up to 2MB.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              First name
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              Last name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>

          {credentials.map((item) => (
            <div className="space-y-1 sm:col-span-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex-1 space-y-1">
                  <label className="text-xs font-medium text-slate-600">
                    {item.id}
                  </label>
                  <input
                    type="email"
                    value={item.placeholder}
                    disabled
                    readOnly
                    className="w-full cursor-not-allowed rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500"
                  />
                </div>
                <button
                  type="button"
                  className="mt-1 inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
                >
                  {item.label}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appearance */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Appearance</h2>
            <p className="mt-1 text-[13px] text-slate-500">
              Choose a light, dark, or system theme for the app.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {themes.map((mode) => (
            <button
              key={mode}
              type="button"
              className={`inline-flex items-center justify-center rounded-full border px-3 py-1 ${
                themeMode === mode
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
              }`}
            >
              {mode === "light" && "Light"}
              {mode === "dark" && "Dark"}
              {mode === "system" && "System"}
            </button>
          ))}
        </div>
      </section>

      {/* Login history */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Login history
            </h2>
            <p className="mt-1 text-[13px] text-slate-500">
              Review recent sign-ins to this account.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
          >
            View activity log
          </button>
        </div>
        <p className="mt-4 text-[13px] text-slate-600">
          Last login: Aug 10, 2026 · 09:14 AM (AEST)
        </p>
      </section>

      {/* Delete Account */}
      <section className="rounded-2xl border border-red-200 bg-red-50/60 p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-red-800">
              Delete account
            </h2>
            <p className="mt-1 text-[13px] text-red-800/80">
              Permanently delete your user account from this workspace. This
              action cannot be undone.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-red-300 bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
          >
            Delete account
          </button>
        </div>
      </section>
    </div>
  );
};

export default SettingsAccount;
