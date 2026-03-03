import { useState } from "react";
import { LineChart, Line, YAxis, ResponsiveContainer } from "recharts";

// Tooltip text
const kpiTooltips = {
  "AML/CTF Health Score":
    "An overall view of how complete and up-to-date your AML/CTF checks are for this matter, based on identity verification, risk assessment, and whether any issues remain unresolved.",
};

// Function to produce dummy sparkline data
function CalculateHealthScore(score = 94, days = 30) {
  const pattern = [0, 0.3, -0.2, 0.4, -0.1, 0.2, -0.8];
  const data = [];

  //Loop through number of days and adjust base data offsetting based on day performance
  for (let i = 0; i < days; i++) {
    const v = Math.max(0, Math.min(100, score + pattern[i % pattern.length]));
    data.push({ index: i, value: Math.round(v * 10) / 10 });
  }

  return data;
}

const HealthScore = ({
  // Props for demo purposes - in real implementation, these would be dynamic based on API data and user selection
    selectedRange = 7,
    loading = false,
    hasData = true,
    amlScore = 94,
    cardClass = "bg-white p-4 rounded-lg shadow",
    }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const sparklineData = CalculateHealthScore(amlScore);

    return (
    <div className={`${cardClass} col-span-12 md:col-span-6 lg:col-span-3`}>
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200/70 text-slate-500">
            {/* Shield Icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
            </svg>
          </span>

          <span className="inline-flex items-center gap-1.5">
            AML/CTF Health Score

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
                aria-label="AML/CTF Health Score info"
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
                {kpiTooltips["AML/CTF Health Score"]}
              </div>
            </div>
          </span>
        </div>

        <span className="text-[10px] text-slate-400">
          {selectedRange === "all"
            ? "all time"
            : selectedRange === "custom"
            ? "custom range"
            : `vs last ${selectedRange}d`}
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
              "Based on current period"
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

export default HealthScore;