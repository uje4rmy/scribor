const HomeMainDiagram = () => {
  return (
    <div className="flex justify-start lg:justify-end">
      <div className="w-full max-w-[600px] max-h-[420px] overflow-hidden rounded-[30px] border border-white/70 bg-white/60 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.10)] backdrop-blur">
        <div className="flex min-h-[370px] rounded-3xl border border-slate-200/70 bg-white/70">
          <aside className="w-28 border-r border-slate-200/70 bg-white/60 p-3 text-[10px] text-slate-500">
            <div className="mb-4 flex items-center gap-2 text-[11px] font-medium text-slate-800">
              <span className="h-6 w-6 rounded-lg border border-slate-200/70 bg-white/80" />
              Scribor
            </div>
            <div className="space-y-2">
              {["Matters", "Intake", "Dashboard", "Billing", "Settings"].map(
                (item) => (
                  <div
                    key={item}
                    className={`rounded-lg px-2 py-1.5 ${item === "Dashboard" ? "bg-slate-900/5 text-slate-900" : ""}`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </aside>
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between border-b border-slate-200/70 pb-3.5">
              <h3 className="text-[14px] font-medium text-slate-900">
                Overview
              </h3>
              <button className="rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[10px] text-slate-500">
                Go to inbox
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-[10px] text-slate-500">
              {[
                { label: "AML/CTF Health Score", value: "96/100" },
                { label: "Audit Readiness", value: "88/100" },
                { label: "Hours Saved", value: "14h" },
                { label: "High-Risk Open", value: "2" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-3"
                >
                  <div className="flex items-center justify-between text-[9px] text-slate-400">
                    <span>{kpi.label}</span>
                    <span>vs last 30d</span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-[13px] font-medium text-slate-900">
                    <span>{kpi.value}</span>
                    <svg
                      viewBox="0 0 60 20"
                      className="h-4 w-14 text-slate-300"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        points="0,16 10,12 20,14 30,8 40,10 50,4 60,6"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white/80 p-3.5">
              <div className="flex items-start justify-between text-[10px] text-slate-400">
                <div>
                  <div className="text-[11px] font-medium text-slate-700">
                    Clearance time
                  </div>
                  <div>Median minutes</div>
                </div>
                <div className="text-slate-400">Last 6 weeks</div>
              </div>
              <div className="mt-3">
                <svg viewBox="0 0 280 120" className="h-20 w-full">
                  <g stroke="#E2E8F0" strokeWidth="1">
                    <line x1="0" y1="20" x2="280" y2="20" />
                    <line x1="0" y1="60" x2="280" y2="60" />
                    <line x1="0" y1="100" x2="280" y2="100" />
                  </g>
                  <polyline
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="2"
                    points="0,90 40,70 80,74 120,52 160,60 200,38 240,46 280,30"
                  />
                  <g fill="#94A3B8" fontSize="8">
                    <text x="0" y="115">
                      Aug 5
                    </text>
                    <text x="80" y="115">
                      Aug 12
                    </text>
                    <text x="160" y="115">
                      Aug 19
                    </text>
                    <text x="240" y="115">
                      Aug 26
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainDiagram;
