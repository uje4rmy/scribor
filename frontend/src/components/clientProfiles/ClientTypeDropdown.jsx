import TYPES from "./ClientTypes";

const ClientTypeDropdown = ({ profileDraft, setProfileDraft, fieldKey }) => {
  return (
    <select
      value={TYPES.find((e) => e.type === profileDraft[fieldKey]).type}
      onChange={(e) =>
        setProfileDraft((d) => ({
          ...d,
          [fieldKey]: e.target.value,
        }))
      }
      className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
    >
      {TYPES.map((e) => (
        <option key={e.type} value={e.type}>
          {e.label}
        </option>
      ))}
    </select>
  );
};

export default ClientTypeDropdown;
