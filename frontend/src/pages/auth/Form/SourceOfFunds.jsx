import styles from "./Forms.module.css";

const SourceOfFunds = ({ data, update, errors }) => {

  const selectFields = [
    {
      label: "Estimated Transaction Value",
      key: "transactionValue",
      options: [
        { value: "under_10k", text: "Under $10,000" },
        { value: "10k_49k", text: "$10,000-$49,000" },
        { value: "50k_99k", text: "$50,000-$99,000" },
        { value: "100k_499k", text: "$100,000-$499,999" },
        { value: "500k_999k", text: "$500,000-$999,999" },
        { value: "1m_4m", text: "$1M-$4.9M" },
        { value: "5m_plus", text: "$5M+" }
      ]
    },
    {
      label: "Transfer Method",
      key: "transferMethod",
      options: [
        { value: "bank_transfer", text: "Bank transfer" },
        { value: "cash", text: "Cash (physical currency)" },
        { value: "crypto", text: "Cryptocurrency" },
        { value: "trust_account", text: "Lawyer’s trust account" },
        { value: "bank_cheque", text: "Bank cheque / certified cheque" },
        { value: "third_party", text: "Third-party funding or lender" },
        { value: "unknown", text: "Not yet determined" }
      ]
    },
    {
      label: "Delivery Channel",
      key: "deliveryChannel",
      options: [
        { value: "face_to_face", text: "Face-to-face" },
        { value: "remote", text: "Remote / non-face-to-face" },
        { value: "intermediary", text: "Through an intermediary or third-party representative" }
      ]
    }
  ];

  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Source of Funds</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Enter the client's source of funds information.
        </p>

        <form className="flex flex-col gap-4">

          {selectFields.map((field) => (
            <div key={field.key}>

              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {field.label}
              </label>

              <select
                value={data[field.key]}
                onChange={(e) => update({ [field.key]: e.target.value })}
                className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1
                  ${
                    errors?.[field.key]
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                  }
                `}
              >

                <option value="">Select</option>

                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.text}
                  </option>
                ))}

              </select>

              {errors?.[field.key] && (
                <p className="text-red-500 text-xs mt-1">
                  This field is required
                </p>
              )}

            </div>
          ))}

          {/* Source of Funds Description */}

          <div>

            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Source of Funds Description
            </label>

            <textarea
              rows="4"
              value={data.fundDescription}
              onChange={(e) =>
                update({ fundDescription: e.target.value })
              }
              placeholder="Describe where the funds originate from (e.g. salary, property sale, investment returns)"
              className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1
                ${
                  errors?.fundDescription
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                }
              `}
            />

            {errors?.fundDescription && (
              <p className="text-red-500 text-xs mt-1">
                Description is required
              </p>
            )}

          </div>

        </form>
      </div>
    </div>
  );
};

export default SourceOfFunds;