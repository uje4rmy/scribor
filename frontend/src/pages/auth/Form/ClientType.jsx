import styles from "./Forms.module.css";

const ClientType = ({ data, update, errors }) => {
  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Client Type</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Enter the Client's Type and Service.
        </p>

        <form className="flex flex-col gap-4">

          {/* Client Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Select Client Type:
            </label>

            <select
              value={data.type}
              onChange={(e) => update({ type: e.target.value })}
              className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1
                ${
                  errors?.type
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                }
              `}
            >
              <option value="">-- Select --</option>
              <option value="individual">Individual</option>
              <option value="company">Company</option>
              <option value="trust">Trust</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other entity</option>
            </select>

            {errors?.type && (
              <p className="text-red-500 text-xs mt-1">
                Client type is required
              </p>
            )}
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Select Service:
            </label>

            <select
              value={data.service}
              onChange={(e) => update({ service: e.target.value })}
              className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1
                ${
                  errors?.service
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                }
              `}
            >
              <option value="">-- Select --</option>
              <option value="property">Property</option>
              <option value="corporate">Corporate / commercial</option>
              <option value="litigation">Litigation / disputes</option>
              <option value="family">Family</option>
              <option value="criminal">Criminal</option>
              <option value="employment">Employment</option>
              <option value="wills">Wills and estates</option>
              <option value="regulatory">Regulatory / public law</option>
              <option value="personal">Personal services</option>
              <option value="other">Other</option>
            </select>

            {errors?.service && (
              <p className="text-red-500 text-xs mt-1">
                Service selection is required
              </p>
            )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default ClientType;