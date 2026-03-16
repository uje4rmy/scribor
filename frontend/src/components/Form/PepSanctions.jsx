import styles from "./Forms.module.css";

const PEPSanctions = ({ data, update, errors }) => {

  const selectFields = [
    {
      label: "Are you or any beneficial owner a politically exposed person (PEP)?",
      key: "pep"
    },
    {
      label: "Are you or any beneficial owner a close associate or family member of a PEP?",
      key: "closeAssociate"
    },
    {
      label: "Are you or any beneficial owner currently subject to financial sanctions?",
      key: "sanctions"
    }
  ];

  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>PEP and Sanctions Declaration</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Declare any PEP status or sanctions exposure.
        </p>

        <form className="flex flex-col gap-4">

          {selectFields.map((field) => (
            <div key={field.key}>

              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {field.label}
              </label>

              <select
                value={data[field.key] || ""}
                onChange={(e) => update({ [field.key]: e.target.value })}
                className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1
                  ${
                    errors?.[field.key]
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                  }
                `}
              >
                <option value="" disabled hidden>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              {errors?.[field.key] && (
                <p className="text-red-500 text-xs mt-1">
                  This field is required
                </p>
              )}

            </div>
          ))}

        </form>
      </div>
    </div>
  );
};

export default PEPSanctions;