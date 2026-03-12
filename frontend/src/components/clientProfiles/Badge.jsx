const Badge = ({ label, status }) => {
  const levelColors = (level) => {
    const s = level.toLowerCase();
    switch (s) {
      case "low":
      case "complete":
        return "bg-emerald-100 text-emerald-800";
      case "medium":
      case "pending":
        return "bg-amber-100 text-amber-800";
      case "high":
        return "bg-rose-100 text-rose-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${levelColors(status)}`}
    >
      {label}
    </span>
  );
};

export default Badge;
