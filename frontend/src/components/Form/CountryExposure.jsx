import styles from "./Forms.module.css";

const CountryExposure = ({ data, update }) => {
  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Country Exposure</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Enter the client's country exposure information.
        </p>

        <form className="flex flex-col gap-4">

          {/* Client country */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Client Country of Residence
            </label>

            <input
              type="text"
              value={data.clientCountry}
              onChange={(e) =>
                update({ clientCountry: e.target.value })
              }
              placeholder="Enter client country"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* Beneficial owner country */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Beneficial Owner Country of Residence
            </label>

            <input
              type="text"
              value={data.ownerCountry}
              onChange={(e) =>
                update({ ownerCountry: e.target.value })
              }
              placeholder="Enter owner country"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* Connected countries */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Countries Connected to the Transaction
            </label>

            <input
              type="text"
              value={data.connectedCountries}
              onChange={(e) =>
                update({ connectedCountries: e.target.value })
              }
              placeholder="Enter countries, separated by commas"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          {/* Funds origin */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Country Where Funds Originate
            </label>

            <input
              type="text"
              value={data.fundsOriginCountry}
              onChange={(e) =>
                update({ fundsOriginCountry: e.target.value })
              }
              placeholder="Enter country"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

        </form>
      </div>
    </div>
  );
};

export default CountryExposure;