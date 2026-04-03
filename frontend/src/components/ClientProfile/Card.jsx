const Card = ({ title, headerAction, children, className = "" }) => {
  return (
    <div
      className={`flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        {headerAction}
      </div>
      <div className="mt-3 flex flex-1 flex-col gap-2">{children}</div>
    </div>
  );
};

export default Card;
