import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
} from "recharts";

const RiskDistribution = () => {
  const cardClass =
    "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm";

  // Dummy Data until we have real API integration for risk distribution
  const getDummyRiskData = () => {
    return [
      { label: "Low", value: 24, color: "#22C55E" },
      { label: "Medium", value: 14, color: "#F59E0B" },
      { label: "High", value: 8, color: "#EF4444" },
    ];
  };

  const riskPie = useMemo(() => getDummyRiskData(), []);

  const loading = false;
  const hasData = riskPie && riskPie.length > 0;
  const emptyRisk = !hasData;

  const totalRisk = hasData
    ? riskPie.reduce((sum, item) => sum + item.value, 0)
    : 0;

  return (
    <div className="col-span-12 flex flex-col gap-3 lg:col-span-4">
      <div className={`${cardClass} flex-1 min-h-0`}>
        <div className="text-[11px] text-slate-500">
          Risk distribution
        </div>

        <div className="mt-3 flex items-center gap-4">
          <div className="relative h-32 w-32">
            {loading ? (
              <div className="h-full w-full animate-pulse rounded-full bg-slate-100" />
            ) : emptyRisk ? (
              <div className="flex h-full items-center justify-center text-xs text-slate-400">
                No risk data yet.
              </div>
            ) : (
              <>
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={riskPie}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={38}
                      outerRadius={52}
                      paddingAngle={2}
                    >
                      {riskPie.map((entry) => (
                        <Cell
                          key={entry.label}
                          fill={entry.color}
                        />
                      ))}
                    </Pie>
                  </RePieChart>
                </ResponsiveContainer>

                {/* Center Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] text-slate-500">
                  <div className="text-[13px] font-medium text-slate-900">
                    {totalRisk}
                  </div>
                  <div>matters</div>
                </div>
              </>
            )}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
            {riskPie.map((r) => (
              <div
                key={r.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/70 px-2 py-1"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: r.color }}
                />
                {r.label} {r.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDistribution;