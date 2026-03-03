import { useState } from "react";

const Security = () => {
  const [twoStepEnabled, setTwoStepEnabled] = useState(false);

  return (
    <div
      id="settings-tab-security"
      role="tabpanel"
      aria-labelledby="settings-tab-button-security"
      className="space-y-6"
    >
      {/* 2-step verification */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              2-step verification
            </h2>
            <p className="mt-1 text-[13px] text-slate-500">
              Add an extra layer of protection when signing in.
            </p>
          </div>
          <label className="flex items-center justify-between gap-3 text-[13px] text-slate-700">
            <span>Enable 2-step verification</span>
            <input
              type="checkbox"
              checked={twoStepEnabled}
              onChange={(e) => setTwoStepEnabled(e.target.checked)}
            />
          </label>
        </div>
      </section>

      {/* Sessions */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Sessions</h2>
            <p className="mt-1 text-[13px] text-slate-500">
              Sign out from other browsers and devices.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
          >
            Sign out of all sessions
          </button>
        </div>
      </section>
    </div>
  );
};

export default Security;
