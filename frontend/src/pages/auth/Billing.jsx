import AppTopBar from "../../components/AppTopBar";
import Sidebar from "../../components/Sidebar";

const Billing = () => {
  return (
    <div className="grid grid-cols-[224px_1fr] min-h-screen">
      <div className="sidebar">
        <Sidebar />
      </div>

      <main className="min-h-screen w-full px-3 py-6 text-sm text-slate-900 sm:px-4 lg:px-6">
        <AppTopBar />

        <div className="mx-auto mt-4 w-full max-w-[1920px]">
          {/* Header */}
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">
              Billing
            </h1>
            <p className="mt-1 text-[13px] text-slate-500">
              Update your plan and manage workspace billing.
            </p>
          </div>

          <div className="mt-6 space-y-6">
            {/* Plan */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] sm:items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900">
                      Team
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-[2px] text-[11px] font-medium text-slate-700">
                      Monthly
                    </span>
                  </div>
                  <div className="text-sm text-slate-900">
                    <span className="font-semibold">$195.00 AUD</span>{" "}
                    <span className="text-slate-600">/ month + tax</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex w-[140px] min-w-[140px] items-center justify-center rounded-md bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-800"
                    >
                      Explore plans
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-[140px] min-w-[140px] items-center justify-center rounded-md border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
                    >
                      Manage plan
                    </button>
                  </div>
                </div>

                <div className="space-y-2 sm:text-right">
                  <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    Billing period
                  </div>
                  <div className="text-sm text-slate-900">
                    Monthly{" "}
                    <span className="text-slate-500">
                      (renews August 16, 2026)
                    </span>
                  </div>
                  <div className="mt-3 sm:mt-2">
                    <button
                      type="button"
                      className="inline-flex w-[180px] min-w-[180px] items-center justify-center rounded-md border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
                    >
                      Change billing period
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Seats */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Seats
                  </h2>
                  <p className="mt-1 text-[13px] text-slate-500">
                    Control how many team members can access this workspace.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="inline-flex w-[140px] min-w-[140px] items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
                  >
                    Manage seats
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-[140px] min-w-[140px] items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
                  >
                    Manage members
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-1/2 rounded-full bg-sky-500" />
                </div>
                <div className="flex items-center justify-between text-[13px] text-slate-600">
                  <span>
                    <span className="font-medium text-slate-900">5</span> of{" "}
                    <span className="font-medium text-slate-900">10</span> seats
                    used
                  </span>
                </div>
              </div>
            </section>

            {/* Add-ons */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold text-slate-900">
                  Add-ons
                </h2>
              </div>
              <div className="mt-3 overflow-hidden rounded-xl border border-slate-100">
                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2 bg-slate-50 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-slate-500 sm:px-4">
                  <div>Add-on</div>
                  <div>Started</div>
                  <div>Price</div>
                  <div className="text-right">Status</div>
                </div>
                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2 border-t border-slate-100 bg-white px-3 py-3 text-xs text-slate-900 sm:px-4">
                  <div>20k Profile checks</div>
                  <div className="text-slate-600">11/09/2022</div>
                  <div className="text-slate-600">$50 USD</div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="rounded-full bg-emerald-50 px-2 py-[2px] text-[11px] font-medium text-emerald-700">
                      Active
                    </span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-200 px-2 py-1 text-[11px] text-slate-500 hover:border-slate-300"
                      aria-label="Remove add-on"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Billing details */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Billing details
                  </h2>
                  <p className="mt-1 text-[13px] text-slate-500">
                    These details are used on invoices and receipts.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400"
                >
                  Update payment method
                </button>
              </div>

              <dl className="mt-4 grid gap-3 text-[13px] text-slate-700 sm:grid-cols-2">
                <div>
                  <dt className="text-slate-500">Company name</dt>
                  <dd className="mt-0.5 font-medium text-slate-900">
                    Demo Account
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Billing email</dt>
                  <dd className="mt-0.5 font-medium text-slate-900">
                    billing@example.com
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Payment method</dt>
                  <dd className="mt-0.5 font-medium text-slate-900">
                    Visa •••• 4242
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Next invoice</dt>
                  <dd className="mt-0.5 font-medium text-slate-900">
                    Aug 16, 2026
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Billing;
