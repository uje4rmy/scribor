import { useState } from "react";
import { LineChart, Line, YAxis, ResponsiveContainer } from "recharts";

// Tooltip text
const kpiTooltips = {
  "Audit Readiness":
    "Shows whether the key documents and checks required for an AML/CTF audit have been completed and properly recorded.",
};

// Function to produce dummy sparkline data
function CalculateAuditReadiness(baseValue = 60, n = 30) {
  const out = [];

  // Validate base
  const base =
    baseValue != null && baseValue >= 0 && baseValue <= 100
      ? baseValue
      : 60;

  let v = Math.max(0, Math.min(100, base));

  // Planned improvement milestones
  const step1 = Math.floor(n * 0.3);  // early improvement
  const step2 = Math.floor(n * 0.6);  // major documentation completion
  const dipPoint = Math.floor(n * 0.75); // small compliance lapse

  for (let i = 0; i < n; i++) {
    // Gradual steady improvement
    if (i > 0 && i % 5 === 0) {
      v = Math.min(100, v + 2);
    }

    // Larger readiness milestones
    if (i === step1) {
      v = Math.min(100, v + 8);
    }

    if (i === step2) {
      v = Math.min(100, v + 12);
    }

    // Small dip (e.g. expired doc)
    if (i === dipPoint) {
      v = Math.max(0, v - 5);
    }

    out.push({
      index: i,
      value: Math.round(v),
    });
  }

  return out;
}

const AuditReadiness = ({
  // Props for demo purposes - in real implementation, these would be dynamic based on API data and user selection
    period = 7,
    loading = false,
    hasData = true,
    amlScore = 47,
    cardClass = "bg-white p-4 rounded-lg shadow",
    }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const sparklineData = CalculateAuditReadiness(amlScore);

    return (
    <div className={`${cardClass} col-span-12 md:col-span-6 lg:col-span-3`}>
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200/70 text-slate-500">
            {/* File Icon */}
            <svg 
                viewBox="0 0 24 24" 
                className="h-3.5 w-3.5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                >
                <path d="M7 3h6l4 4v14H7z" />
                <path d="M13 3v5h5" />
            </svg>
          </span>

          <span className="inline-flex items-center gap-1.5">
            Audit Readiness

            {/* Info Icon */}
            <div
              className="relative ml-1 flex items-center"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
            >
              <button
                type="button"
                aria-label="Audit Readiness info"
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-200/70 text-[10px] text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                i
              </button>

              {/* Tooltip */}
              <div
                className={`absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 rounded-xl border border-slate-200/70 bg-white p-3 text-[11px] text-slate-600 shadow-lg transition-opacity duration-200 ${
                  showTooltip ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {kpiTooltips["Audit Readiness"]}
              </div>
            </div>
          </span>
        </div>

        <span className="text-[10px] text-slate-400">
          {period === 0
            ? "all time"
            : period === "custom"
            ? "custom range"
            : `vs last ${period}d`}
        </span>
      </div>

      {/* Score & Sparkline */}
      <div className="mt-3 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[30px] font-medium tracking-[-0.02em] text-slate-900">
            {loading ? (
              <span className="inline-block h-7 w-16 animate-pulse rounded bg-slate-200/60" />
            ) : hasData ? (
              `${amlScore}/100`
            ) : (
              "—"
            )}
          </div>

          <div className="mt-1 truncate text-[11px] text-slate-400">
            {loading ? (
              <span className="inline-block h-3 w-40 animate-pulse rounded bg-slate-200/50" />
            ) : (
              "Audit packs: 6 complete - 24 incomplete"
            )}
          </div>
        </div>
        
        {/* Sparkline Graph */}
        <div className="h-10 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={sparklineData}
              margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
            >
              <defs>
                <linearGradient id="healthScoreSpark" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>

              <YAxis hide domain={[0, 100]} />

              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#healthScoreSpark)"
                strokeWidth={1.5}
                dot={false}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AuditReadiness;