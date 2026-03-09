import styles from "./Forms.module.css";

const CountryExposure = () => {
    return (
            <div className="flex-1">
                <div className={styles.formCard}>
                    <h4 className={styles.formTitle}>Country Exposure</h4>
                    <p className="mb-6 text-[13px] text-slate-500">
                    Enter the client's country exposure information.
                    </p>

                    <form className="flex flex-col gap-4">
                    {/* Client country of residence */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Client Country of Residence
                        </label>
                        <input
                        type="text"
                        name="clientCountry"
                        placeholder="Enter client country"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                        />
                    </div>

                    {/* Beneficial owner country of residence */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Beneficial Owner Country of Residence
                        </label>
                        <input
                        type="text"
                        name="ownerCountry"
                        placeholder="Enter owner country"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                        />
                    </div>

                    {/* Countries connected to the transaction */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Countries Connected to the Transaction
                        </label>
                        <input
                        type="text"
                        name="connectedCountries"
                        placeholder="Enter countries, separated by commas"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                        />
                    </div>

                    {/* Country where funds originate */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Country Where Funds Originate
                        </label>
                        <input
                        type="text"
                        name="fundsOriginCountry"
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