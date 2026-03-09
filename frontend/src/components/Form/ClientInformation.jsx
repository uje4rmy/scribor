import styles from "./Forms.module.css";

const ClientInformation = ({ data, update }) => {
  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Client Information</h4>
        <p className="mb-6 text-[13px] text-slate-500">
          Enter the client's identification details required for verification.
        </p>

        <form className="flex flex-col gap-4">
          {/* Full Legal Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Legal Name
            </label>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => update({ fullName: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Date of Birth (if individual)
            </label>
            <input
              type="date"
              value={data.dob}
              onChange={(e) => update({ dob: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* ACN / ABN */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              ACN / ABN (if company)
            </label>
            <input
              type="text"
              value={data.abn}
              onChange={(e) => update({ abn: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* Registered Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Registered Address
            </label>
            <input
              type="text"
              value={data.registeredAddress}
              onChange={(e) => update({ registeredAddress: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* Residential Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Residential Address
            </label>
            <input
              type="text"
              value={data.residentialAddress}
              onChange={(e) => update({ residentialAddress: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* Country of Tax Residency */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Country of Tax Residency
            </label>
            <input
              type="text"
              value={data.taxResidency}
              onChange={(e) => update({ taxResidency: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* Contact Details */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Contact Details
            </label>
            <input
              type="text"
              value={data.contactDetails}
              onChange={(e) => update({ contactDetails: e.target.value })}
              placeholder="Email or Phone"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientInformation;