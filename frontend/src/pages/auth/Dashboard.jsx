import AuthHeader from "../../components/AuthHeader";
import Sidebar from "../../components/Sidebar";
import AppTopBar from "../../components/AppTopBar";
import HealthScore from "../../components/Dashboard/HealthScore";
import AuditReadiness from "../../components/Dashboard/AuditRediness";

const Dashboard = () => {
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
                            <select className="border rounded-md px-3 py-1 text-sm bg-white">
                                <option value = "7">Last 7 days</option>
                                <option value = "30">Last 30 days</option>
                                <option value = "90" selected>Last 90 days</option>
                                <option value = "all">All time</option>
                            </select>
                        </div>
                   </div>
                
                <div className="mt-5 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Firm Health
                </div>

                <div className="mt-2 grid grid-cols-12 gap-3">
                    <HealthScore />
                    <AuditReadiness />
                </div>
                </div>
            </main>
        </div>
    </>
    );
};  


export default Dashboard;