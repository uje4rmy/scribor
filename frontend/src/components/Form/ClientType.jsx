import styles from "./Forms.module.css";

const ClientType = ({ data, update }) => {
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
              value={data.entityType}
              onChange={(e) => update({ entityType: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            >
              <option value="">-- Select --</option>
              <option value="individual">Individual</option>
              <option value="company">Company</option>
              <option value="trust">Trust</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other entity</option>
            </select>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Select Service:
            </label>

            <select
              value={data.serviceType}
              onChange={(e) => update({ serviceType: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
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
              <option value="personal">Personal services (migration, injury, etc.)</option>
              <option value="other">Other</option>
            </select>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ClientType;