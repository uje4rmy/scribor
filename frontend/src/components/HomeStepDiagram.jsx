const HomeStepDiagram = ({ card }) => {
  return (
    <div key={card.step} className="flex flex-col items-center">
      <div className="w-full max-w-[360px]">
        <div className="relative w-full aspect-[9/10] overflow-hidden rounded-2xl">
          <div className="h-full w-full p-4">
            {card.step === "1" ? (
              <div className="h-full w-full min-h-0 min-w-0 flex flex-col rounded-2xl border border-slate-200/70 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2 text-[9px] text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                    <span className="h-2 w-2 rounded-full bg-slate-100" />
                  </div>
                  <span className="text-slate-400">Intake</span>
                </div>
                <div className="flex-1 min-h-0 overflow-hidden p-2 text-[10px] text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-700">Intake</span>
                    <span className="rounded-full border border-slate-200/70 px-2 py-0.5 text-[9px] text-slate-500">
                      Step 1 of 3
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="h-6 w-6 rounded-lg border border-slate-200/70 bg-slate-50" />
                      <div>
                        <div className="text-[9px] text-slate-400">Upload</div>
                        <div className="text-[10px] text-slate-700">
                          client-info.pdf
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full border border-slate-200/70 bg-slate-50 px-2 py-0.5 text-[9px] text-slate-500">
                      Auto-fill
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    {[
                      "Full name",
                      "Email",
                      "Mobile",
                      "Address",
                      "Matter type",
                      "Jurisdiction",
                    ].map((label) => (
                      <div
                        key={label}
                        className="rounded-lg border border-slate-200/70 bg-white px-2 py-1"
                      >
                        <div className="text-[8px] text-slate-400">{label}</div>
                        <div className="mt-1 h-2 w-full rounded bg-slate-100" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-1">
                    <div className="mb-0.5 text-[9px] text-slate-400">
                      Related parties
                    </div>
                    <div className="space-y-1 text-[9px]">
                      {[
                        { name: "Lee Holdings", role: "Vendor" },
                        { name: "Jordan Patel", role: "Director" },
                      ].map((row) => (
                        <div
                          key={row.name}
                          className="flex items-center justify-between rounded-md border border-slate-200/70 bg-white px-2 py-0.5"
                        >
                          <span className="text-slate-600">{row.name}</span>
                          <span className="rounded-full border border-slate-200/70 px-1.5 py-0.5 text-[8px] text-slate-500">
                            {row.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {card.step === "2" ? (
              <div className="h-full w-full min-h-0 min-w-0 flex flex-col rounded-2xl border border-slate-200/70 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2 text-[9px] text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                    <span className="h-2 w-2 rounded-full bg-slate-100" />
                  </div>
                  <span>Dashboard</span>
                </div>
                <div className="flex-1 min-h-0 overflow-hidden flex">
                  <aside className="w-16 shrink-0 border-r border-slate-100 bg-slate-50/70 p-2 text-[8px] text-slate-500">
                    {["Matters", "Intake", "Dashboard"].map((item) => (
                      <div
                        key={item}
                        className={`rounded-md px-1.5 py-1 ${item === "Dashboard" ? "bg-slate-900/5 text-slate-700" : ""}`}
                      >
                        {item}
                      </div>
                    ))}
                  </aside>
                  <div className="flex-1 min-w-0 p-2 text-[9px] text-slate-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-medium text-slate-800">
                          Client profile
                        </span>
                        <span className="rounded-full border border-amber-200/70 bg-amber-50/70 px-2 py-0.5 text-[8px] text-amber-700">
                          In review
                        </span>
                      </div>
                      <span className="rounded-full border border-slate-200/70 px-2 py-0.5 text-[8px] text-slate-400">
                        Approved by lawyer
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 text-[8px] text-slate-400">
                      {["Overview", "AML", "Conflicts", "Audit Pack"].map(
                        (tab) => (
                          <span
                            key={tab}
                            className={`rounded-full border border-slate-200/70 px-2 py-0.5 ${
                              tab === "AML"
                                ? "bg-slate-900/5 text-slate-700"
                                : ""
                            }`}
                          >
                            {tab}
                          </span>
                        ),
                      )}
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="space-y-1 min-w-0">
                        {[
                          "Risk assessment",
                          "PEP screening",
                          "Sanctions",
                          "ASIC",
                          "ABN/ACN",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-md border border-slate-200/70 bg-white px-2 py-1"
                          >
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2 min-w-0">
                        <div className="rounded-md border border-slate-200/70 bg-white px-2 py-2 text-[8px]">
                          <div className="mb-1 text-[8px] text-slate-400">
                            Risk breakdown
                          </div>
                          <div className="flex h-2 overflow-hidden rounded-full border border-slate-200/70">
                            <div className="w-2/3 bg-slate-300" />
                            <div className="w-1/4 bg-slate-400" />
                            <div className="w-1/12 bg-slate-500" />
                          </div>
                          <div className="mt-1 flex justify-between text-[7px] text-slate-400">
                            <span>Low</span>
                            <span>Med</span>
                            <span>High</span>
                          </div>
                        </div>
                        <div className="rounded-md border border-slate-200/70 bg-white px-2 py-2 text-[8px]">
                          <div className="mb-1 flex items-center justify-between text-[8px] text-slate-400">
                            <span>Review freshness</span>
                            <span>Last updated 2h</span>
                          </div>
                          <svg
                            viewBox="0 0 60 16"
                            className="h-4 w-full text-slate-400"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              points="0,12 12,8 24,10 36,6 48,7 60,4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 rounded-md border border-slate-200/70 bg-white px-2 py-1 text-[8px] text-slate-500">
                      No direct conflicts • 1 related party reviewed
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {card.step === "3" ? (
              <div className="h-full w-full min-h-0 min-w-0 flex flex-col rounded-2xl border border-slate-200/70 bg-white shadow-sm">
                <div className="flex-1 min-h-0 overflow-hidden p-4">
                  <div className="flex h-full gap-3">
                    <div className="flex-1 min-w-0 rounded-xl border border-slate-200/70 bg-white shadow-sm p-4 text-[7px] text-slate-600 space-y-1">
                      <div>
                        <div className="text-[9px] font-semibold text-slate-800">
                          AML/CTF & Conflicts Summary
                        </div>
                        <div className="mt-0 text-[6px] text-slate-400">
                          Matter: 24-0187
                        </div>
                        <div className="text-[6px] text-slate-400">
                          Client: Jordan Patel
                        </div>
                        <div className="text-[6px] text-slate-400">
                          Generated: 2 Feb
                        </div>
                      </div>
                      <div className="h-px w-full bg-slate-100" />
                      <div className="space-y-0.5">
                        <div className="text-[7px] font-semibold text-slate-700">
                          Identity & Verification
                        </div>
                        <div className="text-[6px] text-slate-500">
                          Status: Verified
                        </div>
                        <div className="text-[6px] text-slate-500">
                          Source checks: Completed
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-[7px] font-semibold text-slate-700">
                          Risk Assessment
                        </div>
                        <div className="text-[6px] text-slate-500">
                          Rating: Medium
                        </div>
                        <div className="space-y-0.5">
                          <div className="h-1.5 w-full rounded bg-slate-100" />
                          <div className="h-1.5 w-4/5 rounded bg-slate-100" />
                          <div className="h-1.5 w-3/5 rounded bg-slate-100" />
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-[7px] font-semibold text-slate-700">
                          PEP & Sanctions
                        </div>
                        <div className="text-[6px] text-slate-500">
                          PEP: Clear
                        </div>
                        <div className="text-[6px] text-slate-500">
                          Sanctions: Clear
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-[7px] font-semibold text-slate-700">
                          Conflicts
                        </div>
                        <div className="text-[6px] text-slate-500">
                          Direct conflicts: None
                        </div>
                        <div className="text-[6px] text-slate-500">
                          Related parties reviewed: Yes
                        </div>
                      </div>
                      <div className="text-[5px] text-slate-300 text-right">
                        1
                      </div>
                    </div>
                    <div className="w-20 shrink-0 space-y-2 text-[8px] text-slate-500">
                      <button className="w-full rounded-full border border-slate-200/70 bg-slate-900 px-2 py-1 text-[8px] text-white">
                        Export PDF
                      </button>
                      <span className="inline-flex w-full justify-center rounded-full border border-emerald-200/70 bg-emerald-50/70 px-2 py-0.5 text-[8px] text-emerald-700">
                        Saved to matter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="mt-6 w-full px-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl leading-none font-semibold text-slate-200">
              {card.step}
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              {card.title}
            </h3>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeStepDiagram;
