import styles from "./Forms.module.css";

const SourceOfFunds = () => {
    return (
            <div className="flex-1">
                <div className={styles.formCard}>
                    <h4 className={styles.formTitle}>Source of Funds</h4>
                    <p className="mb-6 text-[13px] text-slate-500">
                    Enter the client's source of funds information.
                    </p>

                    <form className="flex flex-col gap-4">
                        {/* PAGE 4 FORM */}
                        {/* Estimated Transaction Value */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Estimated Transaction Value
                            </label>
                            <select
                            name="transactionValue"
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                            >
                            <option value="" disabled hidden>Select</option>
                            <option>Under $10,000</option>
                            <option>$10,000-$49,000</option>
                            <option>$50,000-$99,000</option>
                            <option>$100,000-$499,999</option>
                            <option>$500,000-$999,999</option>
                            <option>$1M-$4.9M</option>
                            <option>$5M+</option>
                            </select>
                        </div>
                        
                        {/* Transfer Method */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Transfer Method
                            </label>
                            <select
                                name="transferMethod"
                                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                                >
                                <option value="" disabled hidden>Select</option>
                                <option>Bank transfer</option>
                                <option>Cash (physical currency)</option>
                                <option>Cryptocurrency</option>
                                <option>Lawyer’s trust account</option>
                                <option>Bank cheque / certified cheque</option>
                                <option>Third-party funding or lender</option>
                                <option>Not yet determined</option>
                            </select>
                        </div>
                        
                         {/* Delivery Channel */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Delivery Channel
                            </label>

                            <select
                            name="deliveryChannel"
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                            >
                            <option value="" disabled hidden>Select</option>
                            <option>Face-to-face</option>
                            <option>Remote / non-face-to-face</option>
                            <option>Through an intermediary or third-party representative</option>
                            </select>
                        </div>

                        {/* Source of Funds Description */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Source of Funds Description
                            </label>

                            <textarea
                            name="fundDescription"
                            rows="4"
                            placeholder="Describe where the funds originate from (e.g. salary, property sale, investment returns)"
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                    </form>    
                </div>
            </div>
    );
};

export default SourceOfFunds;