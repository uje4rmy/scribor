import { Link } from "react-router";
import HomeMainDiagram from "../components/HomeMainDiagram";
import HomeStepDiagram from "../components/HomeStepDiagram";
import Pricing from "../components/Pricing";
import Tranch2 from "../components/Tranch2";
import FAQAccordian from "../components/FAQAccordian";
import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";

const auditLabels = [
  { label: "Pipeline", value: "12 active matters" },
  { label: "Checks", value: "8 running" },
  { label: "Audit", value: "4 packs ready" },
];

const stepLabels = [
  {
    step: "1",
    title: "Client Onboarding",
    description:
      "Send a secure link to the client to complete their details. Once submitted, the system automatically creates a structured client and matter profile, ready for review.",
  },
  {
    step: "2",
    title: "Risk & Compliance Review",
    description:
      "Assess the client profile, determine risk, and record relevant financial activity. Run KYC and PEP screening, request and log SOW or SOF verification, generate audit reports, and prepare suspicious matter reports where required.",
  },
  {
    step: "3",
    title: "Approval & Record Management",
    description:
      "After review, formally approve the matter. The signed-off client profile is saved to file, with version control and prompts to update records if circumstances change.",
  },
];

const faqItems = [
  {
    question: "Will Scribor replace our existing AML/CTF policy?",
    answer:
      "No. Scribor is designed to sit alongside your existing AML/CTF framework and make it easier to apply in day-to-day work. It helps you capture the checks, decisions, and records that your policy already requires, without asking you to rewrite that policy.",
  },
  {
    question: "Will our data be safe?",
    answer:
      "Yes. Scribor is designed for legal compliance workflows and treats data security as non-negotiable. Records are access-controlled, time-stamped, and preserved in a way that supports audit and regulatory review. Any data retained is used only to support your matters and is not used to train models or other systems.",
  },
  {
    question: "Do we need to train the whole firm?",
    answer:
      "No. Scribor is designed to mirror how lawyers already work. Most firms can onboard partners and staff with minimal guidance, without formal training sessions.",
  },
  {
    question: "Why Scribor over other providers?",
    answer:
      "Scribor is the only AML/CTF and conflict platform built specifically for law firms. Unlike generic AML/CTF tools, it is designed around legal workflows, captures decision-making reasoning, and produces audit-ready records that align with how regulators and partners assess compliance.",
  },
  {
    question: "How long does it take to get Scribor running in a firm?",
    answer:
      "Most firms can start using Scribor within a few days, beginning with a small group of partners or an AML/CTF lead. Over the following weeks, settings can be tuned to match your risk thresholds, approvals, and matter types so that the process feels familiar while still meeting regulatory expectations.",
  },
];

const Homepage = () => {
  return (
    <>
      <HomeHeader />

      <main className="mx-auto max-w-screen-2xl px-8 pb-24 lg:px-12">
        <section className="fade-in grid grid-cols-1 gap-14 pb-20 pt-16 lg:grid-cols-[minmax(640px,1fr)_minmax(0,600px)] lg:items-center">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-1.5 text-[12px] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Now in Private Beta
            </div>
            <h1 className="mt-5 text-[48px] font-bold leading-[1.05] text-slate-900 md:text-[56px]">
              #1 AML/CTF & Conflict Platform for{" "}
              <span className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
                Australian Law Firms
              </span>
            </h1>
            <p className="mt-5 text-[17px] leading-7 text-slate-600">
              Scribor handles AUSTRAC compliance and conflict checks upfront,
              leaving a clear record behind every decision.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#resources"
                className="rounded-full border border-slate-200/80 bg-slate-900 px-6 py-3 text-[14px] font-medium text-white shadow-[0_1px_0_rgba(15,23,42,0.18)] transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Watch 30-second demo
              </Link>
            </div>
          </div>

          <HomeMainDiagram />
        </section>

        <section className="fade-in rounded-3xl bg-slate-950 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%)] px-8 py-14 text-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.18)]">
          <div className="flex gap-8 lg:items-center">
            <div className="flex-1">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Deploy in seconds
              </p>
              <h2 className="mt-3 text-[34px] font-medium tracking-[-0.02em]">
                Audit-ready AML/CTF files in seconds
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-slate-300">
                There is no onboarding or training. Scribor records the right
                details as decisions are made and is ready to export at any
                time.
              </p>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div className="w-full max-w-md -translate-x-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="grid gap-3 md:grid-cols-3">
                  {auditLabels.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[12px]"
                    >
                      <div className="text-slate-300">{item.label}</div>
                      <div className="mt-2 text-[14px] font-medium text-white">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="fade-in mt-20">
          <div className="text-center">
            <h2 className="text-[34px] font-semibold tracking-[-0.02em]">
              Ready in 3 steps
            </h2>
            <p className="mt-3 text-[14px] text-slate-500">
              A fast, repeatable workflow that leaves files ready for AUSTRAC
              review.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 items-stretch md:grid-cols-3">
            {stepLabels.map((card) => (
              <HomeStepDiagram card={card} />
            ))}
          </div>
        </section>

        <section className="fade-in mt-20 rounded-3xl bg-slate-950 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%)] p-10 text-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.18)]">
          <div>
            <h2 className="text-[28px] font-medium tracking-[-0.02em]">
              Measured impact, based on real workflows.
            </h2>
            <p className="mt-2 text-[14px] leading-7 text-slate-300">
              Estimated time savings based on standard AML/CTF and conflict
              processes used by Australian law firms.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-[12px] text-slate-200">
              <div className="text-[20px] font-medium text-white">
                ≈ 20 minutes saved per matter
              </div>
              <p className="mt-2 text-[12px] text-slate-300">
                By consolidating intake, KYC, PEP screening, conflict checks,
                transaction recording, and audit documentation into one
                structured workflow.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-[12px] text-slate-200">
              <div className="text-[20px] font-medium text-white">
                ≈ 17-33 hours per month
              </div>
              <p className="mt-2 text-[12px] text-slate-300">
                Based on firms handling 50–100 matters per month requiring
                compliance review.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-[12px] text-slate-200">
              <div className="text-[20px] font-medium text-white">
                ≈ $1,700-$3,300 per month in recovered capacity
              </div>
              <p className="mt-2 text-[12px] text-slate-300">
                Calculated using a blended internal cost of $100 per hour.
              </p>
            </div>
          </div>
          <div className="mt-4 text-[11px] text-slate-400">
            Estimates assume consistent matter volume and standard compliance
            requirements. Actual results vary by matter complexity and internal
            processes.
          </div>
        </section>

        <Pricing />

        <Tranch2 />

        <section id="resources" className="fade-in mt-20">
          <h2 className="text-[34px] font-semibold tracking-[-0.02em] text-center">
            Frequently asked questions
          </h2>
          <div className="mt-5">{<FAQAccordian items={faqItems} />}</div>
        </section>
      </main>

      <HomeFooter />
    </>
  );
};

export default Homepage;
