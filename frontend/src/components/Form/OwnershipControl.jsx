import {useState} from "react";
import styles from "./Forms.module.css";

const OwnershipControl = () => {
    const [directors, setDirectors] = useState([""]);
    const [owners, setOwners] = useState([""]);
    const [pep, setPep] = useState("");

    const addDirector = () => {
        setDirectors([...directors, ""]);
    };

    const addOwner = () => {
        setOwners([...owners, ""]);
    };

    const updateDirector = (index, value) => {
        const updated = [...directors];
        updated[index] = value;
        setDirectors(updated);
    };

    const updateOwner = (index, value) => {
        const updated = [...owners];
        updated[index] = value;
        setOwners(updated);
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
                        {/* PAGE 3 FORM */}
                        {/* List Directors */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                            List Directors
                            </label>
                             {directors.map((director, index) => (
                            <input
                            type="text"
                            id = "fullName"
                            name = "fullName"
                            value={director}
                            onChange={(e) => updateDirector(index, e.target.value)}
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                            />
                             ))}
                            <button
                            type="button"
                            onClick={addDirector}
                            className="mt-2 rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                            >
                            + Add Director
                            </button>
                        </div>
                        
                              {/* BENEFICIAL OWNERS */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-2">
                            Beneficial Owners / Settlor / Trustee / Beneficiaries
                            </label>

                            {owners.map((owner, index) => (
                            <input
                                key={index}
                                type="text"
                                value={owner}
                                onChange={(e) => updateOwner(index, e.target.value)}
                                placeholder="Owner name"
                                className="w-full mb-2 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                            />
                            ))}

                            <button
                            type="button"
                            onClick={addDirector}
                            className="mt-2 rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                            >
                            + Add another
                            </button>
                        </div>
                        

                        {/* OWNERSHIP STRUCTURE UPLOAD */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Ownership structure upload (if available)
                            </label>

                            <input
                            type="file"
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                            />
                        </div>


                        {/* PEP QUESTION */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-2">
                            Are any owners politically exposed persons?
                            </label>

                            <select
                            value={pep}
                            onChange={(e) => setPep(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                            >
                            <option value="" disabled hidden>Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            </select>
                        </div>
                    </form>   
                </div>
            </div>
    );
};

export default OwnershipControl;