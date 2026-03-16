import styles from "./Forms.module.css";

const OwnershipControl = ({ data, update, errors }) => {

  const sections = [
    {
      label: "List Directors",
      key: "directors",
      button: "+ Add Director"
    },
    {
      label: "Beneficial Owners / Settlor / Trustee / Beneficiaries",
      key: "owners",
      button: "+ Add another",
      placeholder: "Owner name"
    }
  ];

  const addField = (key) => {
    update({ [key]: [...data[key], ""] });
  };

  const updateField = (key, index, value) => {
    const updated = [...data[key]];
    updated[index] = value;
    update({ [key]: updated });
  };

  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Ownership & Control</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Enter the client's ownership and control details.
          <br />
          Only fill if client is a company or trust otherwise leave blank.
        </p>

        <form className="flex flex-col gap-4">

          {sections.map((section) => (
            <div key={section.key}>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {section.label}
              </label>

              {data[section.key].map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  placeholder={section.placeholder}
                  onChange={(e) =>
                    updateField(section.key, index, e.target.value)
                  }
                  className="w-full mb-2 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              ))}

              <button
                type="button"
                onClick={() => addField(section.key)}
                className="mt-2 rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200"
              >
                {section.button}
              </button>
            </div>
          ))}

          {/* FILE UPLOAD */}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Ownership structure upload (if available)
            </label>

            <input
              type="file"
              onChange={(e) => update({ ownershipFile: e.target.files[0] })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>

          {/* PEP QUESTION */}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Are any owners politically exposed persons?
            </label>

            <select
              value={data.pep || ""}
              onChange={(e) => update({ pep: e.target.value })}
              className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1
                ${
                  errors?.pep
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                }
              `}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            {errors?.pep && (
              <p className="text-red-500 text-xs mt-1">
                Please select an option
              </p>
            )}

          </div>

        </form>
      </div>
    </div>
  );
};

export default OwnershipControl;