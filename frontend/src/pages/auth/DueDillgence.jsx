import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import AppTopBar from "../../components/AppTopBar";

const DueDillgence = () => {
  const [pepSearch, setPepSearch] = useState("");
  const [sowSearch, setSowSearch] = useState("");
  const [kycSearch, setKycSearch] = useState("");
  const [auditPackSearch, setAuditPackSearch] = useState("");
  const [smrSearch, setSmrSearch] = useState("");

  const [kycSuggestionsOpen, setKycSuggestionsOpen] = useState(false);
  const [pepSuggestionsOpen, setPepSuggestionsOpen] = useState(false);
  const [sowSuggestionsOpen, setSowSuggestionsOpen] = useState(false);
  const [auditPackSuggestionsOpen, setAuditPackSuggestionsOpen] =
    useState(false);
  const [smrSuggestionsOpen, setSmrSuggestionsOpen] = useState(false);

  return (
    <div className="grid grid-cols-[224px_1fr] min-h-screen">
      <div className="sidebar">
        <Sidebar />
      </div>

      <main className="min-h-screen w-full px-3 py-6 text-sm text-slate-900 sm:px-4 lg:px-6">
        <AppTopBar />

        <div className="mx-auto mt-4 w-full max-w-[1920px]">
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">
              Due Diligence
            </h1>
          </div>

          <div className="mt-6 space-y-4">
            {/* KYC */}
            <section className="space-y-2 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:gap-4">
                <button
                  type="button"
                  className="w-[220px] min-w-[220px] shrink-0 rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  KYC
                </button>
                <div className="relative min-w-0 flex-1">
                  <input
                    type="text"
                    placeholder="Search client..."
                    value={kycSearch}
                    onChange={(e) => {
                      setKycSearch(e.target.value);
                      setKycSuggestionsOpen(true);
                    }}
                    className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                  />
                </div>
              </div>
              <p className="text-[13px] leading-snug text-slate-500">
                Capture identification documents, confirm beneficial ownership
                where applicable, and assess whether standard or enhanced due
                diligence is required before the matter proceeds.
              </p>
            </section>

            {/* Conduct PEP screening */}
            <section className="space-y-2 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:gap-4">
                <button
                  type="button"
                  className="w-[220px] min-w-[220px] shrink-0 rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Conduct PEP screening
                </button>
                <div className="relative min-w-0 flex-1">
                  <input
                    type="text"
                    placeholder="Search client..."
                    value={pepSearch}
                    onChange={(e) => {
                      setPepSearch(e.target.value);
                      setPepSuggestionsOpen(true);
                    }}
                    className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                  />
                </div>
              </div>
              <p className="text-[13px] leading-snug text-slate-500">
                Screen the client and relevant related parties against PEP and
                sanctions lists. Identify elevated corruption or bribery risk at
                the outset and record the firm&apos;s risk assessment and
                decision to proceed.
              </p>
            </section>

            {/* SOW/SOF verification */}
            <section className="space-y-2 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:gap-4">
                <button
                  type="button"
                  className="w-[220px] min-w-[220px] shrink-0 rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  SOW/SOF verification
                </button>
                <div className="relative min-w-0 flex-1">
                  <input
                    type="text"
                    placeholder="Search client..."
                    value={sowSearch}
                    onChange={(e) => {
                      setSowSearch(e.target.value);
                      setSowSuggestionsOpen(true);
                    }}
                    className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                  />
                </div>
              </div>
              <p className="text-[13px] leading-snug text-slate-500">
                Assess and evidence the source of funds and source of wealth
                linked to the matter. Ensure the origin of funds is understood,
                documented, and consistent with the client&apos;s profile and
                the nature of the transaction.
              </p>
            </section>

            {/* Generate audit pack */}
            <section className="space-y-2 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:gap-4">
                <button
                  type="button"
                  className="w-[220px] min-w-[220px] shrink-0 rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Generate audit pack
                </button>
                <div className="relative min-w-0 flex-1">
                  <input
                    type="text"
                    placeholder="Search client..."
                    value={auditPackSearch}
                    onChange={(e) => {
                      setAuditPackSearch(e.target.value);
                      setAuditPackSuggestionsOpen(true);
                    }}
                    className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                  />
                </div>
              </div>
              <p className="text-[13px] leading-snug text-slate-500">
                Produce a consolidated, regulator-ready record of all due
                diligence steps taken. Compile KYC documents, screening results,
                risk ratings, and file notes to support the firm in the event of
                an AUSTRAC review.
              </p>
            </section>

            {/* Generate suspicious matter report */}
            <section className="space-y-2 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:gap-4">
                <button
                  type="button"
                  className="w-[220px] min-w-[220px] shrink-0 rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Generate Suspicious Matter Report
                </button>
                <div className="relative min-w-0 flex-1">
                  <input
                    type="text"
                    placeholder="Search client..."
                    value={smrSearch}
                    onChange={(e) => {
                      setSmrSearch(e.target.value);
                      setSmrSuggestionsOpen(true);
                    }}
                    className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200"
                  />
                </div>
              </div>
              <p className="text-[13px] leading-snug text-slate-500">
                Prepare a structured SMR where reasonable grounds for suspicion
                arise. Set out the relevant facts, transactions, and risk
                indicators clearly so it is ready for submission to AUSTRAC
                within the required timeframe.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DueDillgence;
