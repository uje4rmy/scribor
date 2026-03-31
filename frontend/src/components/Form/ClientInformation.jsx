import styles from "./Forms.module.css";

const ClientInformation = ({ data, update, errors }) => {

  const inputboxClass = [
    {id: 1, label: "Full Legal Name", value: data.fullName, key: "fullName", type: "text"},
    {id: 2, label: "Date of Birth (if individual)", value: data.dob, key: "dob", type: "date"},
    {id: 3, label: "ACN / ABN (if company)", value: data.abn, key: "abn", type: "text"},
    {id: 4, label: "Registered Address", value: data.registeredAddress, key: "registeredAddress", type: "text"},
    {id: 5, label: "Residential Address", value: data.residentialAddress, key: "residentialAddress", type: "text"},
    {id: 6, label: "Country of Tax Residency", value: data.taxResidency, key: "taxResidency", type: "text"},
    {id: 7, label: "Email", value: data.email, key: "email", type: "text", placeholder: "Email"},
    {id: 8, label: "Phone Number", value: data.phoneNumber, key: "phoneNumber", type: "text", placeholder: "Phone"}
  ]

  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Client Information</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Enter the client's identification details required for verification.
        </p>

        <form className="flex flex-col gap-4">

          {inputboxClass.map((input) => (

            <div key={input.id}>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {input.label}
              </label>

              <input
                type={input.type}
                value={input.value}
                placeholder={input.placeholder || ""}
                onChange={(e) => update({ [input.key]: e.target.value })}

                className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1
                  
                  ${errors?.[input.key] 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-slate-400 focus:ring-slate-200"}
                  
                `}
              />

              {errors?.[input.key] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[input.key]}
                </p>
              )}

            </div>

          ))}

        </form>
      </div>
    </div>
  );
};

export default ClientInformation;