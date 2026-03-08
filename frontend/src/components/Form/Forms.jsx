import FormTopBar from "../FormTopBar";
import FormProgress from "../FormProgress/FormProgress";
import styles from "./Forms.module.css";



const Forms = () => {
  
    return (
    <>
    <div className="h-20 items-center justify-between px-8">
        <FormTopBar />
        <div>
            <h1 className="text-2xl font-semibold">Form</h1>
                <div className="mt-1 text-xs text-gray-500">
                    Step .................... of 7
                </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6 px-8 mt-6">
        
            {/* Left Progress Card */}
            <div className="w-72">
                <FormProgress />
            </div>

            {/* Right Main Card */}
            <div className="flex-1">
                <div className={styles.formCard}>

                    <h4 className={styles.formTitle}>Client Information</h4>

                    <p className="mb-6 text-[13px] text-slate-500">
                    Enter the client's identification details required for KYC verification.
                    </p>

                    <form className="flex flex-col gap-4">
                        {/* PAGE 1 FORM */}
                        {/* Full Legal Name */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Full Legal Name
                            </label>
                            <input
                            type="text"
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
                                placeholder="Email or Phone"
                                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                                />
                            </div>

                        {/* Footer Buttons */}
                        <div className="flex justify-between pt-4 ">
                            <button
                            type="submit"
                            className="rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                            >
                            Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Forms;