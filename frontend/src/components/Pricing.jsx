const tiers = [
  {
    name: "Free",
    monthly: "$0",
    yearly: "$0",
    value: "All essential features",
    description: [
      "Structured AML/CTF and conflict intake",
      "Identity and entity verification capture",
      "Clear risk assessment with written reasoning",
      "Audit-ready PDF exports",
      "Immutable activity log",
    ],
  },
  {
    name: "Enterprise",
    monthly: "$495",
    yearly: "$445",
    badge: "Recommended",
    value: "Enterprise-grade governance",
    description: [
      "Custom approval and governance rules",
      "Firm-specific risk frameworks",
      "Advanced audit and regulator readiness",
      "Dedicated onboarding and support",
      "Contracted SLAs",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="fade-in mt-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <div>
          <h2 className="text-[30px] font-semibold tracking-[-0.02em]">
            Start for Free.
          </h2>
          <p className="mt-2 max-w-xl text-[13px] text-slate-600">
            There is nothing to pay to get started. We believe every firm should
            have access to basic and essential features for compliance.
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-10 lg:px-20 justify-center">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative w-[450px] rounded-2xl border bg-white/70 p-6 border-slate-200/70 ${
              tier.name === "Enterprise"
                ? "border-slate-300/80 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
                : "border-slate-200/70"
            }`}
          >
            {tier.badge ? (
              <span className="absolute right-5 top-5 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[10px] text-slate-500">
                {tier.badge}
              </span>
            ) : null}

            <div className="text-[13px] font-medium text-slate-900">
              {tier.name}
            </div>
            <div className="mt-3 text-[30px] font-medium text-slate-900">
              {tier.monthly}
            </div>
            <div className="text-[12px] text-slate-400">/ month + GST</div>
            <div className="mt-2 text-[12px] text-slate-500">{tier.value}</div>
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 px-4 py-3 text-[12px] font-medium text-white shadow-[0_6px_16px_rgba(15,23,42,0.18)]"
            >
              Request a Demo
            </button>
            <ul className="mt-4 space-y-2 text-[12px] text-slate-600">
              {tier.description.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-slate-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
