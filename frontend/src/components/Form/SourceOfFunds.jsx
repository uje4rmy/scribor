import styles from "./Forms.module.css";

const SourceOfFunds = ({ data, update }) => {
  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Source of Funds</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Enter the client's source of funds information.
        </p>

        <form className="flex flex-col gap-4">

          {/* Estimated Transaction Value */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Estimated Transaction Value
            </label>

            <select
              value={data.transactionValue}
              onChange={(e) =>
                update({ transactionValue: e.target.value })
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="" disabled hidden>Select</option>
              <option value="under_10k">Under $10,000</option>
              <option value="10k_49k">$10,000-$49,000</option>
              <option value="50k_99k">$50,000-$99,000</option>
              <option value="100k_499k">$100,000-$499,999</option>
              <option value="500k_999k">$500,000-$999,999</option>
              <option value="1m_4m">$1M-$4.9M</option>
              <option value="5m_plus">$5M+</option>
            </select>
          </div>

          {/* Transfer Method */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Transfer Method
            </label>

            <select
              value={data.transferMethod}
              onChange={(e) =>
                update({ transferMethod: e.target.value })
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="" disabled hidden>Select</option>
              <option value="bank_transfer">Bank transfer</option>
              <option value="cash">Cash (physical currency)</option>
              <option value="crypto">Cryptocurrency</option>
              <option value="trust_account">Lawyer’s trust account</option>
              <option value="bank_cheque">Bank cheque / certified cheque</option>
              <option value="third_party">Third-party funding or lender</option>
              <option value="unknown">Not yet determined</option>
            </select>
          </div>

          {/* Delivery Channel */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Delivery Channel
            </label>

            <select
              value={data.deliveryChannel}
              onChange={(e) =>
                update({ deliveryChannel: e.target.value })
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="" disabled hidden>Select</option>
              <option value="face_to_face">Face-to-face</option>
              <option value="remote">Remote / non-face-to-face</option>
              <option value="intermediary">
                Through an intermediary or third-party representative
              </option>
            </select>
          </div>

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
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

        </form>
      </div>
    </div>
  );
};

export default SourceOfFunds;