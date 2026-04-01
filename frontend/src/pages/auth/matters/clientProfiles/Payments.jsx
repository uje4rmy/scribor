import DatePickerTime from "../../../../components/DatePickerTime";
import { useState, useMemo } from "react";
import DateRangeFilter from "../../../../components/clientProfiles/filters/DateRangeFilter";
import StatusFilter from "../../../../components/clientProfiles/filters/StatusFilter";
import OrderFilter from "../../../../components/clientProfiles/filters/OrderFilter";
import PaymentTable from "../../../../components/clientProfiles/PaymentTable";
import LogDropdown from "../../../../components/clientProfiles/LogDropdown";
import { useForm, useWatch } from "react-hook-form";
import { Controller } from "react-hook-form";
import Currencies from "../../../../assets/currencies";

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

const DEFAULT_LOG = {
  payment_date: { date: undefined, time: "12:00:00" },
  payment_amount: "",
  payment_currency: "AUD",
  payment_paidby: "client",
  payment_payer_name: "",
  payment_destination: "trust",
  payment_method: "eft",
  payment_status: "complete",
  payment_ref: "",
  payment_flag: false,
  payment_reason: "",
};

const Payments = ({
  payments,
  showLogPayment,
  setShowLogPayment,
  handleLogPayment,
}) => {
  const [error, setError] = useState(false);
  const [dateRange, setDateRange] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [orderFilter, setOrderFilter] = useState("");
  const [search, setSearch] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { ...DEFAULT_LOG } });
  const paymentPaidBy = useWatch({ control, name: "payment_paidby" });
  const paymentFlag = useWatch({ control, name: "payment_flag" });

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

        <form
          onSubmit={handleSubmit((data) => handleLogPayment(data, setError))}
          className={`mt-4 rounded-lg border border-slate-200 bg-slate-50/50 p-4 ${showLogPayment ? "block" : "hidden"}`}
        >
          <h3 className="text-sm font-medium text-slate-900">Log payment</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-xs text-slate-500">
                Date & Time
              </label>
              <Controller
                name="payment_date"
                control={control}
                render={({ field }) => (
                  <DatePickerTime
                    value={field.value}
                    onChange={field.onChange}
                    error={error}
                    setError={setError}
                  />
                )}
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500">Amount</label>
              <input
                {...register("payment_amount")}
                type="number"
                min="0"
                step="0.01"
                required
                className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500">Currency</label>
              <Controller
                name="payment_currency"
                control={control}
                render={({ field }) => (
                  <LogDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={Currencies}
                    placeholder={"AUD"}
                  />
                )}
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500">Paid By</label>
              <Controller
                name="payment_paidby"
                control={control}
                render={({ field }) => (
                  <LogDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={paidBy}
                    placeholder={"Client"}
                  />
                )}
              />
            </div>
            {paymentPaidBy === "thirdparty" && (
              <div>
                <label className="block text-xs text-slate-500">
                  Payer Name
                </label>
                <input
                  {...register("payment_payer_name")}
                  type="text"
                  required={paymentPaidBy === "thirdparty"}
                  className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                  placeholder="Third-party Payer"
                />
              </div>
            )}
            <div>
              <label className="block text-xs text-slate-500">
                Destination
              </label>
              <Controller
                name="payment_destination"
                control={control}
                render={({ field }) => (
                  <LogDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={accounts}
                    placeholder={"Trust"}
                  />
                )}
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500">
                Payment Method
              </label>
              <Controller
                name="payment_method"
                control={control}
                render={({ field }) => (
                  <LogDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={methods}
                    placeholder={"EFT"}
                  />
                )}
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500">Status</label>
              <Controller
                name="payment_status"
                control={control}
                render={({ field }) => (
                  <LogDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={status}
                    placeholder={"Complete"}
                  />
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-slate-500">
                Reference / Description
              </label>
              <input
                {...register("payment_ref")}
                type="text"
                className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                placeholder="Reference or Description"
              />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="flex items-center gap-2 text-xs text-slate-700">
                <input
                  type="checkbox"
                  {...register("payment_flag")}
                  className="rounded border-slate-300"
                />
                Flag as unusual
              </label>
              {paymentFlag && (
                <input
                  {...register("payment_reason")}
                  type="text"
                  className="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                  placeholder="Reason"
                  required={paymentFlag === true}
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
