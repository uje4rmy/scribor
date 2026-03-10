const BooleanDropdown = ({ profileDraft, setProfileDraft, fieldKey }) => {
  return (
    <select
      value={
        profileDraft[fieldKey] === 1
          ? "yes"
          : profileDraft[fieldKey] === 0
            ? "no"
            : ""
      }
      onChange={(e) =>
        setProfileDraft((d) => ({
          ...d,
          [fieldKey]: e.target.value === "yes" ? 1 : 0,
        }))
      }
      className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
    >
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  );
};

export default BooleanDropdown;
