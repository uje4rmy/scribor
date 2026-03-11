import styles from "./Forms.module.css";

const NaturePurpose = ({ data, update }) => {
  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Nature & Purpose</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Describe the purpose and duration of the engagement.
        </p>

        <form className="flex flex-col gap-4">

          {/* Purpose */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Describe purpose of legal service
            </label>

            <textarea
              value={data.purpose}
              onChange={(e) => update({ purpose: e.target.value })}
              rows={4}
              placeholder="Describe the purpose"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* Expected duration */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Expected duration of relationship
            </label>

            <input
              type="text"
              value={data.duration}
              onChange={(e) => update({ duration: e.target.value })}
              placeholder="e.g., 6 months, 1 year"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* One-off transaction */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Is this a one-off transaction?
            </label>

            <select
              value={data.oneOff}
              onChange={(e) => update({ oneOff: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="" disabled hidden>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

        </form>
      </div>
    </div>
  );
};

export default NaturePurpose;