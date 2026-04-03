import React from "react";

const Workspace = () => {
  return (
    <div
      id="settings-tab-workspace"
      role="tabpanel"
      aria-labelledby="settings-tab-button-workspace"
      className="space-y-6"
    >
      {/* Workspace details */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Workspace details
            </h2>
            <p className="mt-1 text-[13px] text-slate-500">
              Configure how this workspace appears to your team.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              Workspace name
            </label>
            <input
              type="text"
              placeholder="Demo firm workspace"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              Default jurisdiction
            </label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
              <option>Australia (NSW)</option>
              <option>Australia (VIC)</option>
              <option>Australia (QLD)</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              Timezone
            </label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
              <option>Australia/Sydney (AEST)</option>
              <option>Australia/Melbourne</option>
              <option>UTC</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-800"
          >
            Save changes
          </button>
        </div>
      </section>

      {/* Users & roles */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Users &amp; roles
            </h2>
            <p className="mt-1 text-[13px] text-slate-500">
              See who has access and what they can do.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
          >
            Invite user
          </button>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
          <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] gap-2 bg-slate-50 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-slate-500 sm:px-4">
            <div>Name</div>
            <div>Role</div>
            <div>Status</div>
          </div>
          <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] items-center gap-2 border-t border-slate-100 bg-white px-3 py-3 text-xs text-slate-900 sm:px-4">
            <div>Noah Singh</div>
            <div className="text-slate-600">Owner</div>
            <div className="text-emerald-700">Active</div>
          </div>
          <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] items-center gap-2 border-t border-slate-100 bg-white px-3 py-3 text-xs text-slate-900 sm:px-4">
            <div>Zoe Khan</div>
            <div className="text-slate-600">Lawyer</div>
            <div className="text-emerald-700">Active</div>
          </div>
          <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] items-center gap-2 border-t border-slate-100 bg-white px-3 py-3 text-xs text-slate-900 sm:px-4">
            <div>Alex Walker</div>
            <div className="text-slate-600">Support</div>
            <div className="text-slate-500">Invited</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workspace;
