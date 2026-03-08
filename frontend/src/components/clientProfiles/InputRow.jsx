const InputRow = ({ label, value, className }) => {
  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-sm text-slate-900">{value}</span>
    </div>
  );
};

export default InputRow;
