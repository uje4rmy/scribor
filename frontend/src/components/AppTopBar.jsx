import { useState } from "react";

const AppTopBar = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/70 pb-4">
      <div>
        <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
          Workspace
        </div>
        <div className="mt-0.5 text-[17px] font-semibold tracking-[-0.02em] text-slate-900">
          Demo Account
        </div>
      </div>
      <div className="relative">
        <button
          type="button"
          aria-label="Notifications"
          aria-controls="notifications-panel"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 3a4 4 0 00-4 4v2.5c0 .6-.2 1.1-.5 1.6L6 13.5h12l-1.5-2.4c-.3-.5-.5-1-.5-1.6V7a4 4 0 00-4-4z" />
            <path d="M10 17.5a2 2 0 004 0" />
          </svg>
        </button>
        {isNotificationsOpen ? (
          <div
            id="notifications-panel"
            role="dialog"
            aria-label="Notifications"
            className="absolute right-0 z-20 mt-2 w-80 max-h-80 rounded-2xl border border-slate-200/80 bg-white p-4 text-[12px] text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-[13px] font-medium text-slate-900">
                Notifications
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 text-slate-400">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M10.5 10.5a1.8 1.8 0 013.3.9c0 1.3-1.2 1.7-1.7 2.1-.4.3-.6.7-.6 1.2" />
                  <circle cx="12" cy="16.2" r=".8" />
                </svg>
              </span>
              <div className="text-[13px] font-medium text-slate-900">
                No notifications
              </div>
              <div className="text-[11px] text-slate-500">
                You&rsquo;re all caught up.
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AppTopBar;