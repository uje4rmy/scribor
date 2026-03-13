import { DatePickerTime } from "../../../../components/DatePickerTime";
import { useState, useMemo } from "react";
import DateRangeFilter from "../../../../components/clientProfiles/filters/DateRangeFilter";
import StatusFilter from "../../../../components/clientProfiles/filters/StatusFilter";
import OrderFilter from "../../../../components/clientProfiles/filters/OrderFilter";
import PaymentTable from "../../../../components/clientProfiles/PaymentTable";
import LogDropdown from "../../../../components/clientProfiles/LogDropdown";

const currencies = [{ value: "AUD" }, { value: "USD" }, { value: "GBP" }];
const paidBy = [
  { value: "client", label: "Client" },
  { value: "thirdparty", label: "Third Party" },
];
const accounts = [
  { value: "trust", label: "Trust Account" },
  { value: "office", label: "Office Account" },
];
const methods = [
  { value: "eft", label: "EFT" },
  { value: "card", label: "Card" },
  { value: "cash", label: "Cash" },
];
const status = [
  { value: "complete", label: "Complete" },
  { value: "pending", label: "Pending" },
];

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
                <LogDropdown
                  value={logDraft.payment_currency}
                  valKey={"payment_currency"}
                  options={currencies}
                  setLogDraft={setLogDraft}
                  placeholder={"AUD"}
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500">Paid By</label>
                <LogDropdown
                  value={logDraft.payment_paidby}
                  valKey={"payment_paidby"}
                  options={paidBy}
                  setLogDraft={setLogDraft}
                  placeholder={"Client"}
                />
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
                <LogDropdown
                  value={logDraft.payment_destination}
                  valKey={"payment_destination"}
                  options={accounts}
                  setLogDraft={setLogDraft}
                  placeholder={"Trust"}
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500">
                  Payment Method
                </label>
                <LogDropdown
                  value={logDraft.payment_method}
                  valKey={"payment_method"}
                  options={methods}
                  setLogDraft={setLogDraft}
                  placeholder={"EFT"}
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500">Status</label>
                <LogDropdown
                  value={logDraft.status}
                  valKey={"payment_status"}
                  options={status}
                  setLogDraft={setLogDraft}
                  placeholder={"Complete"}
                />
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

            <DateRangeFilter
              payments={payments}
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-xs text-slate-500 pb-1">Status</label>

            <StatusFilter
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-xs text-slate-500 pb-1">Order</label>

            <OrderFilter
              orderFilter={orderFilter}
              setOrderFilter={setOrderFilter}
            />
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <PaymentTable filteredPayments={filteredPayments} />

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
