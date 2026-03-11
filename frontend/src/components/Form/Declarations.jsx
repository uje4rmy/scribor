import styles from "./Forms.module.css";

const Declarations = ({ data, update }) => {
  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Declarations</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Confirm the statements below.
        </p>

        <form className="flex flex-col gap-4">

          {/* Confirm information */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Confirmation information is true
            </label>

            <select
              value={data.confirmInfo}
              onChange={(e) => update({ confirmInfo: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="" disabled hidden>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* AML Screening consent */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Consent to AML screening
            </label>

            <select
              value={data.amlConsent}
              onChange={(e) => update({ amlConsent: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="" disabled hidden>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Identity verification consent */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Consent to identity verification
            </label>

            <select
              value={data.idConsent}
              onChange={(e) => update({ idConsent: e.target.value })}
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

export default Declarations;