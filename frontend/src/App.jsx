import "./App.css";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/auth/Dashboard";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#f8fafc]">
        {/* <Homepage /> */}
        <Dashboard />
      </div>
    </>
  );
}

export default App;
