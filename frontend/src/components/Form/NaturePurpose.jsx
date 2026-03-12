import styles from "./Forms.module.css";

const NaturePurpose = ({ data, update }) => {

  const fields = [
    {
      type: "textarea",
      label: "Describe purpose of legal service",
      key: "purpose",
      placeholder: "Describe the purpose",
      rows: 4
    },
    {
      type: "input",
      label: "Expected duration of relationship",
      key: "duration",
      placeholder: "e.g., 6 months, 1 year"
    },
    {
      type: "select",
      label: "Is this a one-off transaction?",
      key: "oneOff",
      options: [
        { value: "yes", text: "Yes" },
        { value: "no", text: "No" }
      ]
    }
  ];

  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Nature & Purpose</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Describe the purpose and duration of the engagement.
        </p>

        <form className="flex flex-col gap-4">

          {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {field.label}
              </label>

              {field.type === "textarea" && (
                <textarea
                  rows={field.rows}
                  value={data[field.key]}
                  placeholder={field.placeholder}
                  onChange={(e) =>
                    update({ [field.key]: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
              )}

              {field.type === "input" && (
                <input
                  type="text"
                  value={data[field.key]}
                  placeholder={field.placeholder}
                  onChange={(e) =>
                    update({ [field.key]: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                />
              )}

              {field.type === "select" && (
                <select
                  value={data[field.key]}
                  onChange={(e) =>
                    update({ [field.key]: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="" disabled hidden>Select</option>

                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.text}
                    </option>
                  ))}
                </select>
              )}

            </div>
          ))}

        </form>
      </div>
    </div>
  );
};

export default NaturePurpose;