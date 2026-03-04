import { useState } from "react";
import { LineChart, Line, YAxis, ResponsiveContainer } from "recharts";

// Tooltip text
const kpiTooltips = {
  "High-Risk Open":
    "The number of open matters currently assessed as high risk that still require action or review.",
};

//Function to produce dunny sparkline data for High-Risk Open
function CalculateHighRiskOpen(baseValue = 5, n = 30) {
    const data = [];

    // Fixed test dataset (bounded between 0–20 like your original logic)
    const testValues = [
        6, 8, 7, 10, 9,
        12, 11, 13, 10, 8,
        7, 9, 6, 5, 4
    ];

    // Optional light smoothing (keeps your original smoothing behavior)
    for (let i = 0; i < n; i++) {
        const current = testValues[i % testValues.length];
        const prev = testValues[(i - 1 + testValues.length) % testValues.length];
        const next = testValues[(i + 1) % testValues.length];

        const smoothed = (prev + current * 2 + next) / 4;

        data.push({
        index: i,
        value: Math.round(smoothed * 10) / 10,
        });
    }
    return data;
};

const HighRisk = ({
    // Props for demo purposes - in real implementation, these would be dynamic based on API data and user selection
    period = 30,
    loading = false,
    hasData = true,
    amlScore = 5,
    cardClass = "bg-white p-4 rounded-lg shadow",
    }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const sparklineData = CalculateHighRiskOpen(amlScore);
    return (
            <div className={`${cardClass} col-span-12 md:col-span-6 lg:col-span-3`}>
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200/70 text-slate-500">
                        {/* Alert Icon */}
                        <svg 
                            viewBox="0 0 24 24" 
                            className="h-3.5 w-3.5" 
                            fill="none" stroke="currentColor" 
                            strokeWidth="1.5">
                            <circle cx="12" cy="12" r="8" />
                            <path d="M12 7v6" />
                            <circle cx="12" cy="16.5" r="0.8" fill="currentColor" />
                        </svg>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            High-Risk Open
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
                                    aria-label="High-Risk Open info"
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
                                    {kpiTooltips["High-Risk Open"]}
                                </div>
                            </div>
                        </span>
                    </div>

                <div className="mt-1 truncate text-[11px] text-slate-400">
                  <span className="text-[10px] text-slate-400">
                    {period === 0
                      ? "all time"
                      : period === "custom"
                      ? "custom range"
                      : `vs last ${period}d`}
                  </span>
                </div>
            </div>

        {/* Score & Sparkline */}
        <div className="mt-3 flex items-end justify-between gap-4">
            <div className="min-w-0">
                <div className="text-[30px] font-medium tracking-[-0.02em] text-slate-900">
                    {loading ? (
                    <span className="inline-block h-7 w-16 animate-pulse rounded bg-slate-200/60" />
                    ) : hasData ? (
                    `${amlScore}`
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
                <linearGradient id="hoursSavedSpark" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>

              <YAxis hide domain={[0, 100]} />

              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#hoursSavedSpark)"
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

export default HighRisk;