import Sidebar from "../../../components/Sidebar";
import AppTopBar from "../../../components/AppTopBar";
import MattersBoard from "./MattersBoard";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Matters = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [matters, setMatters] = useState([]);

  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (isLoading || !user) return;

    const getMatters = async () => {
      try {
        const userId = user.sub.split("|")[1];
        const res = await axios.get(
          "http://localhost:8081/api/matters/" + userId,
        );
        setMatters(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMatters();
  }, [user, isLoading]);

  return (
    <div className="grid grid-cols-[224px_1fr] min-h-screen">
      <div className="sidebar">
        <Sidebar />
      </div>

      <main className="min-h-screen w-full px-3 py-6 text-sm text-slate-900 sm:px-4 lg:px-6">
        <AppTopBar />

        <div className="mx-auto w-full max-w-[1920px]">
          <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-3">
            <h1 className="text-2xl font-semibold text-gray-900">Matters</h1>
          </div>

          <div className="mt-4 w-full rounded-xl border border-gray-100 bg-white p-3">
            <div className="flex w-full flex-wrap items-center gap-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search client, email, matter type"
                className="h-9 min-w-[200px] flex-1 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
            <div className="mt-2 text-xs text-gray-500">Showing ... of ...</div>
          </div>

          {loading ? (
            <div className="mt-3 space-y-2 animate-pulse">
              <div className="h-4 w-1/3 rounded bg-gray-200" />
              <div className="h-8 rounded bg-gray-200" />
              <div className="h-8 rounded bg-gray-200" />
              <div className="h-8 rounded bg-gray-200" />
            </div>
          ) : matters.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
              <div className="text-[15px] font-medium text-gray-900">
                No matters found.
              </div>
              <div className="mt-1 text-[13px] text-gray-500">
                Adjust filters or create a new intake.
              </div>
            </div>
          ) : (
            <>
              <MattersBoard matters={matters} setMatters={setMatters} />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Matters;
