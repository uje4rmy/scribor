import styles from "./Forms.module.css";

const Declarations = ({ data, update }) => {

  const selectFields = [
    {
      label: "Confirmation information is true",
      key: "confirmInfo"
    },
    {
      label: "Consent to AML screening",
      key: "amlConsent"
    },
    {
      label: "Consent to identity verification",
      key: "idConsent"
    }
  ];

  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Declarations</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Confirm the statements below.
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
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                <option value="" disabled hidden>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          ))}

        </form>
      </div>
    </div>
  );
};

export default Declarations;