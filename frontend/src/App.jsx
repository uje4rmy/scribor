import "./App.css";
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#f8fafc]">
        <Outlet />
        <Toaster />
      </div>
    </>
  );
}

export default App;
