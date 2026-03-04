import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
} from "recharts";

const AuditPacks = () => {
  const cardClass =
    "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm";

  // Dummy Data until we have real API integration for audit packs
  const getDummyAuditData = () => {
    return [
      { label: "Open", value: 12, color: "#3B82F6" },
      { label: "In Review", value: 7, color: "#F59E0B" },
      { label: "Closed", value: 18, color: "#10B981" },
    ];
  };

  const auditPie = useMemo(() => getDummyAuditData(), []);

  const loading = false;
  const hasData = auditPie && auditPie.length > 0;
  const emptyAudit = !hasData;

  const totalAudit = hasData
    ? auditPie.reduce((sum, item) => sum + item.value, 0)
    : 0;

  return (
    <div className={`${cardClass} flex-1 min-h-0`}>
      <div className="text-[11px] text-slate-500">
        Audit packs
      </div>

      <div className="mt-3 flex items-center gap-4">
        <div className="relative h-32 w-32">
          {loading ? (
            <div className="h-full w-full animate-pulse rounded-full bg-slate-100" />
          ) : emptyAudit ? (
            <div className="flex h-full items-center justify-center text-xs text-slate-400">
              No audit packs yet.
            </div>
          ) : (
            <>
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={auditPie}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={38}
                    outerRadius={52}
                    paddingAngle={2}
                  >
                    {auditPie.map((entry) => (
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
                  {totalAudit}
                </div>
                <div>packs</div>
              </div>
            </>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
          {auditPie.map((r) => (
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
  );
};

export default AuditPacks;