import Badge from "./Badge";
import { formatAmount, capitalise } from "../utils/HelperFunctions";

const PaymentTable = ({ filteredPayments }) => {
  return (
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
            <td className="py-2.5 pr-2 text-slate-600">{p.payment_ref}</td>
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
  );
};

export default PaymentTable;
