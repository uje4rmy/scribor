import React, { useMemo } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis,YAxis,CartesianGrid, Tooltip,} from "recharts";

const ClearanceTime = () => {
  const cardClass =
    "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm";

  // Dummy Data until we have real API integration for Clearance Time 
  const getDummyTrendData = () => {
    return [
      { label: "Jan", value: 42 },
      { label: "Feb", value: 38 },
      { label: "Mar", value: 45 },
      { label: "Apr", value: 50 },
      { label: "May", value: 47 },
      { label: "Jun", value: 53 },
    ];
  };

  const trendData = useMemo(() => getDummyTrendData(), []);

  const hasData = trendData && trendData.length > 0;
  const loading = false;
  const emptyTrend = !hasData;

  const formatNumber = (num, suffix = "") => {
    return `${num}${suffix}`;
  };

  const medianValue = hasData
    ? Math.round(
        trendData.reduce((acc, item) => acc + item.value, 0) /
          trendData.length
      )
    : 0;

  return (
    <div className={`${cardClass} w-full`}>
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[11px] text-slate-500">
              Clearance time
            </div>
            <div className="text-[11px] text-slate-400">
              Median minutes
            </div>
          </div>

          <div className="text-[11px] text-slate-400">
            {hasData ? formatNumber(medianValue, "m") : "—"}
          </div>
        </div>

        <div className="mt-3 h-64 min-h-[200px]">
          {loading ? (
            <div className="h-full animate-pulse rounded-xl bg-slate-100" />
          ) : emptyTrend ? (
            <div className="flex h-full items-center justify-center text-sm text-slate-400">
              No clearance trend yet.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <defs>
                  <linearGradient
                    id="dashboardClearanceGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#FBBF24" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EA580C" />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  vertical={false}
                  stroke="#E2E8F0"
                  strokeDasharray="4 6"
                />

                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    borderColor: "#E2E8F0",
                    backgroundColor: "rgba(255,255,255,0.95)",
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#64748B" }}
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#dashboardClearanceGradient)"
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{
                    r: 5,
                    fill: "#DC2626",
                    strokeWidth: 0,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
      </div>
    </div>
  );
};

export default ClearanceTime;