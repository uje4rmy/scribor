import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#f8fafc]">
        <Outlet />
      </div>
    </>
  );
}

export default App;
