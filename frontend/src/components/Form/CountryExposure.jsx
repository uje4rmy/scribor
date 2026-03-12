import styles from "./Forms.module.css";

const CountryExposure = ({ data, update }) => {

  const inputFields = [
    {
      label: "Client Country of Residence",
      key: "clientCountry",
      placeholder: "Enter client country"
    },
    {
      label: "Beneficial Owner Country of Residence",
      key: "ownerCountry",
      placeholder: "Enter owner country"
    },
    {
      label: "Countries Connected to the Transaction",
      key: "connectedCountries",
      placeholder: "Enter countries, separated by commas"
    },
    {
      label: "Country Where Funds Originate",
      key: "fundsOriginCountry",
      placeholder: "Enter country"
    }
  ];

  return (
    <div className="flex-1">
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Country Exposure</h4>

        <p className="mb-6 text-[13px] text-slate-500">
          Enter the client's country exposure information.
        </p>

        <form className="flex flex-col gap-4">
          {inputFields.map((input) => (
            <div key={input.key}>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {input.label}
              </label>

              <input
                type="text"
                value={data[input.key]}
                placeholder={input.placeholder}
                onChange={(e) =>
                  update({ [input.key]: e.target.value })
                }
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default CountryExposure;