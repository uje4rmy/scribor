import Badge from "../../../../components/clientProfiles/Badge";
import {
  formatAmount,
  capitalise,
} from "../../../../components/utils/HelperFunctions";
import { DatePickerTime } from "../../../../components/DatePickerTime";
import { useState, useMemo } from "react";

const Payments = ({
  payments,
  logDraft,
  setLogDraft,
  showLogPayment,
  setShowLogPayment,
  handleLogPayment,
}) => {
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState("12:00:00");
  const [error, setError] = useState(false);
  const [dateRange, setDateRange] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [orderFilter, setOrderFilter] = useState("");
  const [search, setSearch] = useState("");

  const filteredPayments = useMemo(() => {
    let result = [...payments];

    // Search
    if (search.trim() !== "") {
      const q = search.trim().toLowerCase();

      result = result.filter((p) => {
        return (
          p.payment_ref?.toLowerCase().includes(q) ||
          p.payment_paidby?.toLowerCase().includes(q) ||
          p.payment_payer_name?.toLowerCase().includes(q) ||
          p.payment_method?.toLowerCase().includes(q) ||
          p.payment_destination?.toLowerCase().includes(q) ||
          p.payment_status?.toLowerCase().includes(q)
        );
      });
    }

    // Date filter
    if (dateRange !== "all" && dateRange !== "") {
      result = result.filter(
        (p) => new Date(p.payment_date).getFullYear().toString() === dateRange,
      );
    }

    // Status filter
    if (statusFilter !== "all" && statusFilter !== "") {
      if (statusFilter === "flagged") {
        result = result.filter((p) => p.payment_flag === 1);
      } else {
        result = result.filter((p) => p.payment_status === statusFilter);
      }
    }

    // Order filter
    if (orderFilter === "newest") {
      result = [...result].sort(
        (a, b) => new Date(b.payment_date) - new Date(a.payment_date),
      );
    }

    if (orderFilter === "oldest") {
      result = [...result].sort(
        (a, b) => new Date(a.payment_date) - new Date(b.payment_date),
      );
    }

    return result;
  }, [payments, search, dateRange, statusFilter, orderFilter]);

  return (
    <>
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-slate-900">
            Payments & Financial Activity
          </h2>
          <button
            type="button"
            onClick={() => setShowLogPayment((p) => !p)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Log Payment
          </button>
        </div>

        {showLogPayment && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogPayment(date, time, setError, setDate, setTime);
            }}
            className="mt-4 rounded-lg border border-slate-200 bg-slate-50/50 p-4"
          >
            <h3 className="text-sm font-medium text-slate-900">Log payment</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="block text-xs text-slate-500">
                  Date & Time
                </label>
                <DatePickerTime
                  date={date}
                  time={time}
                  setDate={setDate}
                  setTime={setTime}
                  error={error}
                  setError={setError}
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500">Amount</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={logDraft.payment_amount}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value <= 0) return;
                    setLogDraft((f) => ({
                      ...f,
                      payment_amount: value,
                    }));
                  }}
                  required
                  className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500">Currency</label>
                <select
                  value={logDraft.payment_currency}
                  onChange={(e) =>
                    setLogDraft((f) => ({
                      ...f,
                      payment_currency: e.target.value,
                    }))
                  }
                  required
                  className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                >
                  <option value="AUD">AUD</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-500">Paid By</label>
                <select
                  value={logDraft.payment_paidby}
                  onChange={(e) =>
                    setLogDraft((f) => ({
                      ...f,
                      payment_paidby: e.target.value,
                    }))
                  }
                  required
                  className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                >
                  <option value="client">Client</option>
                  <option value="thirdparty">Third party</option>
                </select>
              </div>
              {logDraft.payment_paidby === "thirdparty" && (
                <div>
                  <label className="block text-xs text-slate-500">
                    Payer Name
                  </label>
                  <input
                    type="text"
                    value={logDraft.payment_payer_name}
                    onChange={(e) =>
                      setLogDraft((f) => ({
                        ...f,
                        payment_payer_name: e.target.value,
                      }))
                    }
                    required={logDraft.payment_paidby === "thirdparty"}
                    className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                    placeholder="Third-party Payer"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs text-slate-500">
                  Destination
                </label>
                <select
                  value={logDraft.payment_destination}
                  onChange={(e) =>
                    setLogDraft((f) => ({
                      ...f,
                      payment_destination: e.target.value,
                    }))
                  }
                  required
                  className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                >
                  <option value="trust">Trust Account</option>
                  <option value="office">Office Account</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-500">
                  Payment Method
                </label>
                <select
                  value={logDraft.payment_method}
                  onChange={(e) =>
                    setLogDraft((f) => ({
                      ...f,
                      payment_method: e.target.value,
                    }))
                  }
                  required
                  className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                >
                  <option value="eft">EFT</option>
                  <option value="card">Card</option>
                  <option value="cash">Cash</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-500">Status</label>
                <select
                  value={logDraft.payment_status}
                  onChange={(e) =>
                    setLogDraft((f) => ({
                      ...f,
                      payment_status: e.target.value,
                    }))
                  }
                  required
                  className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                >
                  <option value="complete">Complete</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs text-slate-500">
                  Reference / Description
                </label>
                <input
                  type="text"
                  value={logDraft.payment_ref}
                  onChange={(e) =>
                    setLogDraft((f) => ({
                      ...f,
                      payment_ref: e.target.value,
                    }))
                  }
                  className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                  placeholder="Reference or Description"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="flex items-center gap-2 text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={logDraft.payment_flag === 0 ? false : true}
                    onChange={(e) =>
                      setLogDraft((f) => ({
                        ...f,
                        payment_flag: e.target.checked === false ? 0 : 1,
                      }))
                    }
                    className="rounded border-slate-300"
                  />
                  Flag as unusual
                </label>
                {logDraft.payment_flag === 1 && (
                  <input
                    type="text"
                    value={logDraft.payment_reason}
                    onChange={(e) =>
                      setLogDraft((f) => ({
                        ...f,
                        payment_reason: e.target.value,
                      }))
                    }
                    className="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                    placeholder="Reason"
                    required={logDraft.payment_flag === 1}
                  />
                )}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowLogPayment(false)}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex flex-col">
            <label className="block text-xs text-slate-500 pb-1">Search</label>
            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 rounded-md border border-slate-200 px-2.5 text-sm lg:w-48"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-xs text-slate-500 pb-1">
              Date Range
            </label>

            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="h-9 rounded-md border border-slate-200 px-2.5 text-sm"
            >
              <option value="all">All</option>
              {Array.from(
                new Set(
                  payments.map((p) => new Date(p.payment_date).getFullYear()),
                ),
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block text-xs text-slate-500 pb-1">Status</label>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-9 rounded-md border border-slate-200 px-2.5 text-sm"
            >
              <option value="all">All</option>
              <option value="complete">Complete</option>
              <option value="pending">Pending</option>
              <option value="flagged">Flagged</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block text-xs text-slate-500 pb-1">Order</label>

            <select
              value={orderFilter}
              onChange={(e) => setOrderFilter(e.target.value)}
              className="h-9 rounded-md border border-slate-200 px-2.5 text-sm"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] table-fixed border-collapse text-sm">
            <colgroup>
              <col style={{ width: "14%" }} />
              <col style={{ width: "12%" }} />
              <col style={{ width: "14%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "15%" }} />
            </colgroup>
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                <th className="py-2 pr-2">Date & time</th>
                <th className="py-2 pr-2">Amount</th>
                <th className="py-2 pr-2">Paid by</th>
                <th className="py-2 pr-2">Destination</th>
                <th className="py-2 pr-2">Method</th>
                <th className="py-2 pr-2">Reference</th>
                <th className="py-2 pr-2">Status / flag</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((p) => (
                <tr
                  key={p.payment_id}
                  className="border-b border-slate-100 hover:bg-slate-50/50"
                >
                  <td className="py-2.5 pr-2 text-slate-700">
                    {new Date(p.payment_date)
                      .toLocaleString("en-AU", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                      .replace(/\b(am|pm)\b/g, (m) => m.toUpperCase())}
                  </td>
                  <td className="py-2.5 pr-2">{`$${formatAmount(p.payment_amount)}`}</td>
                  <td className="py-2.5 pr-2">
                    {p.payment_paidby === "thirdparty"
                      ? (p.payment_payer_name ?? "Third party")
                      : "Client"}
                  </td>
                  <td className="py-2.5 pr-2">{`${capitalise(p.payment_destination)} Account`}</td>
                  <td className="py-2.5 pr-2">
                    {p.payment_method === "eft"
                      ? "EFT"
                      : capitalise(p.payment_method)}
                  </td>
                  <td className="py-2.5 pr-2 text-slate-600">
                    {p.payment_ref}
                  </td>
                  <td className="py-2.5 pr-2">
                    <span className="flex flex-wrap gap-1">
                      {p.payment_status && (
                        <Badge
                          label={`${capitalise(p.payment_status)}`}
                          status={p.payment_status}
                        />
                      )}
                      {p.payment_flag === 1 && (
                        <Badge label={"Flagged"} status={"high"} />
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredPayments.length === 0 && (
            <div className="py-8 text-center text-sm text-slate-500">
              No payments match the filters.
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Payments;
