import "./App.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#f8fafc]">
        {/* <Sidebar /> */}
        <Homepage />
      </div>
    </>
  );
}

export default App;
