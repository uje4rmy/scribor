const trancheCards = [
  {
    id: "meaning",
    title: "What Tranche 2 means for law firms",
    body: "Tranche 2 is the next phase of Australia’s AML and CTF reforms. It extends regulatory obligations beyond traditional financial services and brings most law firms into scope when onboarding clients and matters. Firms are expected to meet standards similar to other regulated entities, with decisions capable of being reviewed years later.",
  },
  {
    id: "affected",
    title: "Who is affected",
    body: "Most property, commercial, and private client firms will be affected. If your work involves client money, transactions, trusts, companies, or complex structures, Tranche 2 is likely to apply. The reforms focus on exposure created by the work itself rather than firm size or intent.",
  },
  {
    id: "enforcement",
    title: "Enforcement and risk",
    body: "AUSTRAC has broad enforcement powers. It can issue civil penalties, pursue criminal charges, and publicly disclose a firm’s name. Enforcement actions have included fines of $45 million against Tabcorp, $700 million against Commonwealth Bank, and $1.3 billion against Westpac. Smaller firms are not exempt, and failures such as missed Suspicious Matter Reports can trigger action and reputational damage.",
  },
  {
    id: "required",
    title: "What firms need to do",
    body: "Firms must implement consistent client due diligence, identify beneficial ownership where relevant, assess source of funds, and maintain ongoing monitoring. Records must be retained for at least seven years, with Suspicious Matter Reports submitted when required. Threshold Transaction Reports and International Funds Transfer Instructions may also apply. Although the deadline is July 2026, most firms need several months to prepare, train staff, and embed compliant systems.",
  },
];

const Tranch2 = () => {
  return (
    <section
      id="tranche-2"
      className="fade-in mt-16 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-slate-100"
    >
      <div>
        <h2 className="text-[30px] md:text-[32px] font-semibold tracking-[-0.02em] text-slate-50 text-center">
          Tranche 2
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {trancheCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-3 text-left text-slate-50 shadow-[0_10px_28px_rgba(15,23,42,0.4)]"
            >
              <span className="text-[13px] font-medium">{card.title}</span>
              <div className="mt-2">
                <p className="text-[13px] text-slate-200">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-slate-300 text-center max-w-3xl mx-auto">
          Scribor supports Tranche 2 readiness by structuring intake, running
          AML/CTF and conflict checks upfront, and preserving a clear,
          exportable record of how compliance decisions were made.
        </p>
      </div>
    </section>
  );
};

export default Tranch2;
