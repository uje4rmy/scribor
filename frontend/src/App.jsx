import "./App.css";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/auth/Dashboard";
import Forms from "./components/Form/Forms";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#f8fafc]">
        <Forms />
      </div>
    </>
  );
}

export default App;
