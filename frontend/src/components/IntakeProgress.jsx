const IntakeProgress = () => {
  return (
        <aside className="hidden md:block">
          <div className="sticky top-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Progress</div>
            <div className="mt-4 flex flex-col gap-1">
              {steps.map((step, idx) => {
                const active = idx === currentStep;
                const completed = idx < currentStep && step.ready;
                const disabled = idx > currentStep && !canNavigateTo(idx);
                return (
                  <button
                    key={step.key}
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                      if (!canNavigateTo(idx)) return;
                      setStepNote("");
                      setCurrentStep(idx as 0 | 1 | 2 | 3 | 4 | 5);
                    }}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                      active ? "bg-black text-white" : "text-gray-800 hover:bg-gray-50"
                    } ${disabled ? "cursor-not-allowed opacity-40 hover:bg-transparent" : ""}`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded-full border text-[11px] ${
                          active
                            ? "border-white/40 bg-white/10 text-white"
                            : completed
                            ? "border-green-200 bg-green-50 text-green-700"
                            : "border-gray-200 bg-white text-gray-600"
                        }`}
                        aria-hidden="true"
                      >
                        {completed ? "✓" : idx + 1}
                      </span>
                      {step.title}
                    </span>
                    <span className={`text-xs ${active ? "text-white/70" : "text-gray-400"}`}>
                      {step.ready ? "Ready" : "Required"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

  );
};

export default IntakeProgress;