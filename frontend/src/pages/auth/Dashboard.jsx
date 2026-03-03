import AuthHeader from "../../components/AuthHeader";
import Sidebar from "../../components/Sidebar";
const Dashboard = () => {
return (
    <>
        <div className="grid grid-cols-[224px_1fr] min-h-screen">
            <div className="sidebar">
                <Sidebar />
            </div>

            <div>
                <AuthHeader />
                <div className = "flex h-16 items-center justify-between px-8">
                    <div className = "text-[25px]">
                        Overview
                    </div>
                    <div className = "text-[15px] text-slate-500">
                        <span className="text-sm text-gray-500">Period </span>
                        <select className="border rounded-md px-3 py-1 text-sm bg-white">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option selected>Last 90 days</option>
                            <option>Last 12 months</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};  


export default Dashboard;