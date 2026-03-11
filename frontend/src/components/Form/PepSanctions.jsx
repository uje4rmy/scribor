import styles from "./Forms.module.css";

const PEPSanctions = ({ data, update }) => {
  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>PEP and Sanctions Declaration</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Declare any PEP status or sanctions exposure.
        </p>

        <form className="flex flex-col gap-4">

          {/* PEP */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Are you or any beneficial owner a politically exposed person (PEP)?
            </label>

            <select
              value={data.pep}
              onChange={(e) => update({ pep: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="" disabled hidden>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Close Associate */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Are you or any beneficial owner a close associate or family member of a PEP?
            </label>

            <select
              value={data.closeAssociate}
              onChange={(e) =>
                update({ closeAssociate: e.target.value })
              }
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="" disabled hidden>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Sanctions */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Are you or any beneficial owner currently subject to financial sanctions?
            </label>

            <select
              value={data.sanctions}
              onChange={(e) => update({ sanctions: e.target.value })}
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

export default PEPSanctions;