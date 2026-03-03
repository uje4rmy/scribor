import { useState } from "react";

const Notifications = () => {
  // Notification toggles
  const [emailApprovals, setEmailApprovals] = useState(true);
  const [emailHighRisk, setEmailHighRisk] = useState(true);
  const [emailExportCompleted, setEmailExportCompleted] = useState(false);
  const [inAppNotifications, setInAppNotifications] = useState(true);

  return (
    <div
      id="settings-tab-notifications"
      role="tabpanel"
      aria-labelledby="settings-tab-button-notifications"
      className="space-y-6"
    >
      {/* Email notifications */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <h2 className="text-sm font-semibold text-slate-900">
          Email notifications
        </h2>
        <p className="mt-1 text-[13px] text-slate-500">
          Choose which events send you an email.
        </p>
        <div className="mt-4 space-y-3">
          <label className="flex items-center justify-between gap-3 text-[13px] text-slate-700">
            <span>Approvals required</span>
            <input
              type="checkbox"
              checked={emailApprovals}
              onChange={(e) => setEmailApprovals(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between gap-3 text-[13px] text-slate-700">
            <span>High-risk flagged</span>
            <input
              type="checkbox"
              checked={emailHighRisk}
              onChange={(e) => setEmailHighRisk(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between gap-3 text-[13px] text-slate-700">
            <span>Export completed</span>
            <input
              type="checkbox"
              checked={emailExportCompleted}
              onChange={(e) => setEmailExportCompleted(e.target.checked)}
            />
          </label>
        </div>
      </section>

      {/* In-app notifications */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <h2 className="text-sm font-semibold text-slate-900">
          In-app notifications
        </h2>
        <p className="mt-1 text-[13px] text-slate-500">
          Control whether alerts appear inside Scribor.
        </p>
        <div className="mt-4">
          <label className="flex items-center justify-between gap-3 text-[13px] text-slate-700">
            <span>Enable in-app notifications</span>
            <input
              type="checkbox"
              checked={inAppNotifications}
              onChange={(e) => setInAppNotifications(e.target.checked)}
            />
          </label>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
