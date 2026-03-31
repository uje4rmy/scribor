import AppTopBar from "../../components/AppTopBar";
import IntakeProgress from "../../components/IntakeProgress/IntakeProgress";
import Sidebar from "../../components/Sidebar";
const Intake = () => {
return (
    <>
        <div className="grid grid-cols-[224px_1fr] min-h-screen bg-[#f8fafc]">
            <div className="sidebar">
                <Sidebar />
            </div>

            <div>
                <AppTopBar />
                <div className="flex h-20 items-center justify-between px-8">
                    <div>
                        <h1 className="text-2xl font-semibold">Intake</h1>
                        <div className="mt-1 text-xs text-gray-500">
                            Step .................... of 7
                        </div>
                    </div>

                    <div className="flex flex-wrap items-end justify-end gap-3">
                        <div className="flex flex-col items-center gap-1">
                            <button type="button" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                                Export client form
                            </button>
                            <div className="text-center text-xs text-gray-500">
                                Download to send to client
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <button type="button" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                                Insert client form
                            </button>
                            <div className="text-center text-xs text-gray-500">
                                Autofill this intake
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between px-8">
                    <IntakeProgress />
                    
                </div>
            </div>
        </div>
    </>
    );
};  


export default Intake;