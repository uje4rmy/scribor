import MATTER_BAND_VALUES from "../../components/clientProfiles/BandValues";

const BandDropdown = ({ profileDraft, setProfileDraft, fieldKey }) => {
  return (
    <select
      value={
        MATTER_BAND_VALUES.find((e) => e.value === profileDraft[fieldKey]).value
      }
      onChange={(e) =>
        setProfileDraft((d) => ({
          ...d,
          [fieldKey]: parseInt(e.target.value),
        }))
      }
      className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
    >
      {MATTER_BAND_VALUES.map((e) => (
        <option key={e.value} value={e.value}>
          {e.label}
        </option>
      ))}
    </select>
  );
};

export default BandDropdown;
