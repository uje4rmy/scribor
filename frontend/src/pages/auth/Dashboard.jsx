import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import AppTopBar from "../../components/AppTopBar";
import HealthScore from "../../components/Dashboard/HealthScore";
import AuditReadiness from "../../components/Dashboard/AuditRediness";
import HoursSaved from "../../components/Dashboard/HoursSaved";
import HighRisk from "../../components/Dashboard/HighRisk";
import ClearanceTime from "../../components/Dashboard/ClearanceTime";
import RiskDistribution from "../../components/Dashboard/RiskDistribution";
import AuditPacks from "../../components/Dashboard/AuditPacks";

const cardClass = "rounded-2xl border border-white/60 bg-white/70 p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur transition hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]";
const data  = []; // Placeholder for action required data, replace with actual data fetching logic

const Dashboard = () => {
const [period, setPeriod] = useState(30); // default period

return (
    <>
        <div className="grid grid-cols-[224px_1fr] min-h-screen">
            <div className="sidebar">
                <Sidebar />
            </div>

            <main className="min-h-screen w-full px-3 py-6 text-sm text-slate-900 sm:px-4 lg:px-6">
                <AppTopBar />
                <div className="mx-auto mt-4 w-full max-w-[1920px]">
                    <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
                        <h1 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">
                            Overview
                        </h1>
                        <div className = "text-[15px] text-slate-500">
                            <span className="text-sm text-gray-500">Period </span>
                            <select 
                            className="border rounded-md px-3 py-1 text-sm bg-white"
                            value = {period}
                            onChange={(e) => setPeriod(e.target.value)}
                            >
                                <option value = "7">Last 7 days</option>
                                <option value = "30">Last 30 days</option>
                                <option value = "90">Last 90 days</option>
                                <option value = "all">All time</option>
                            </select>
                        </div>
                   </div>
                    
                    {/* Headers for Firm Health*/}
                    <div className="mt-5 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                        Firm Health
                    </div>
                    {/* Content */}
                    <div className="mt-2 grid grid-cols-12 gap-3">
                        <HealthScore period = {period}/>
                        <AuditReadiness period = {period}/>
                        <HoursSaved period = {period}/>
                        <HighRisk period = {period}/>
                    </div>
                    
                    <div className="mt-5 grid grid-cols-12 gap-3">
                        {/* Headers for Operational Performance  and Risk Composition */}
                        <div className="col-span-12 lg:col-span-8">
                            <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                            Operational Performance
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                            Risk Composition
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-span-12 lg:col-span-8">
                            <ClearanceTime />
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex flex-col gap-3">
                            <RiskDistribution />
                            <AuditPacks />
                        </div>
                    </div>
                    
                    {/* Header For Action Required */}
                    <div className="mt-5 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                        Action Required
                    </div>
                    <div className="mt-2 pb-8">
                        <div className={cardClass}>
                            <div className="text-[11px] text-slate-500">Requires attention</div>
                                <div className="mt-3 overflow-hidden rounded-xl border border-slate-100">
                                    <table className="w-full text-[12px]">
                                        <thead className="bg-slate-50/70 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                                            <tr>
                                            <th className="px-4 py-2 text-left">Client</th>
                                            <th className="px-4 py-2 text-left">Issue</th>
                                            <th className="px-4 py-2 text-right">Age</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(data?.requires_attention || []).length ? (
                                            data.requires_attention.map((row) => (
                                                <tr
                                                key={row.matter_id}
                                                className="border-t border-slate-100 transition-colors hover:bg-slate-50/60"
                                                >
                                                <td className="px-4 py-2.5">
                                                    <Link
                                                    href={`/client-profile/${row.matter_id}`}
                                                    className="font-medium text-slate-900"
                                                    >
                                                    {row.client_name}
                                                    </Link>
                                                    <div className="text-[11px] text-slate-400">
                                                    {row.matter_type}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2.5 text-slate-600">{row.issue}</td>
                                                <td className="px-4 py-2.5 text-right">
                                                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                                                    {row.age_days}d
                                                    </span>
                                                </td>
                                                </tr>
                                            ))
                                            ) : (
                                            <tr>
                                                <td colSpan={3} className="px-4 py-10">
                                                <div className="flex w-full flex-col items-center justify-center gap-1 text-center">
                                                    <div className="text-[13px] font-medium text-slate-900">
                                                    No matters require attention.
                                                    </div>
                                                    <div className="text-[11px] text-slate-500">
                                                    All reviews and approvals are up to date.
                                                    </div>
                                                </div>
                                                </td>
                                            </tr>
                                            )}
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
    );
};  


export default Dashboard;