import SectionLabel from "../../../../components/clientProfiles/SectionLabel";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Badge from "../../../../components/clientProfiles/Badge";
import {
  formatAmount,
  capitalise,
} from "../../../../components/utils/HelperFunctions";
import { useMemo } from "react";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Oversight = ({ clientProfile, payments }) => {
  const chartData = useMemo(() => {
    const data = Object.values(
      payments.reduce((acc, payment) => {
        const date = new Date(payment.payment_date);
        const month = monthNames[date.getMonth()];

        const amount = parseFloat(payment.payment_amount);

        if (!acc[month]) {
          acc[month] = { month: month, amount: 0 };
        }

        acc[month].amount += amount;
        return acc;
      }, {}),
    );

    return data.sort(
      (a, b) => monthNames.indexOf(a.month) - monthNames.indexOf(b.month),
    );
  }, [payments]);

  return (
    <>
      <SectionLabel label={"Verification Status"} />
      <div className="flex flex-wrap gap-2">
        <Badge
          label={`Overall Risk: ${capitalise(clientProfile.client_level)}`}
          status={clientProfile.client_level}
        />
      </div>

      <SectionLabel label={"Account activity"} />
      <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Financial monitoring summary
        </h3>
        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
          <div>
            <span className="text-[10px] text-slate-500">
              Total Payments Received (lifetime)
            </span>
            <p className="text-sm font-medium text-slate-900">
              {`$${formatAmount(clientProfile.total_payments)}`}
            </p>
          </div>
          <div>
            <span className="text-[10px] text-slate-500">Total in Trust</span>
            <p className="text-sm font-medium text-slate-900">
              {`$${formatAmount(clientProfile.total_trust)}`}
            </p>
          </div>
          <div>
            <span className="text-[10px] text-slate-500">Total in Office</span>
            <p className="text-sm font-medium text-slate-900">
              {`$${formatAmount(clientProfile.total_office)}`}
            </p>
          </div>
          <div>
            <span className="text-[10px] text-slate-500">
              Largest Single Payment
            </span>
            <p className="text-sm font-medium text-slate-900">
              {`$${formatAmount(clientProfile.total_max)}`}
            </p>
          </div>
          <div>
            <span className="text-[10px] text-slate-500">
              Third-Party Payments
            </span>
            <p className="text-sm font-medium text-slate-900">
              {clientProfile.third_party === 1 ? "Yes" : "No"}
            </p>
          </div>
          <div>
            <span className="text-[10px] text-slate-500">
              Unusual Payment Flags
            </span>
            <p className="text-sm font-medium text-slate-900">
              {clientProfile.total_flags}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500">Payments to Firm (all time)</p>
      {parseInt(clientProfile.total_flags) > 0 && (
        <span className="mt-1 inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
          Unusual Activity
        </span>
      )}
      <div className="mt-3 h-40 min-h-[120px] min-w-0">
        {payments.length === 0 ? (
          <div className="flex h-full items-center justify-center text-xs text-slate-400">
            No data yet
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={chartData}>
              <defs>
                <linearGradient
                  id="paymentsLineGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                stroke="#E2E8F0"
                strokeDasharray="2 4"
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "#64748B" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#64748B" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${v}`}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E2E8F0",
                  fontSize: 11,
                }}
                formatter={(value) =>
                  value != null ? [`$${value}`, "Total"] : null
                }
                labelFormatter={(label) => label}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="url(#paymentsLineGradient)"
                strokeWidth={2.5}
                dot={false}
                activeDot={{
                  r: 5,
                  fill: "#DC2626",
                  strokeWidth: 0,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      <SectionLabel label={"Risk Movement Timeline"} />
    </>
  );
};

export default Oversight;
