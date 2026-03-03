import Sidebar from "../../components/Sidebar";
import Topics from "../../components/variables/HelpTopics";
import AppTopBar from "../../components/AppTopBar";
import { useState } from "react";
import FAQAccordian from "../../components/FAQAccordian";

const Help = () => {
  const [activeTopic, setActiveTopic] = useState("getting-started");
  const [openItemId, setOpenItemId] = useState(null);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi there! How can we help you with Scribor today?",
    },
  ]);
  const [draftMessage, setDraftMessage] = useState("");

  const currentTopic = Topics.find((t) => t.id === activeTopic) ?? Topics[0];

  return (
    <div className="grid grid-cols-[224px_1fr] min-h-screen">
      <div className="sidebar">
        <Sidebar />
      </div>

      <main className="min-h-screen w-full px-3 py-6 text-sm text-slate-900 sm:px-4 lg:px-6">
        <AppTopBar />
        <div className="mx-auto mt-4 w-full max-w-[1920px]">
          {/* Header */}
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">
              Help
            </h1>
            <p className="mt-1 text-[13px] text-slate-500">
              Guidance, answers, and support for using Scribor.
            </p>
          </div>

          {/* Content */}
          <div className="mt-6 space-y-6">
            {/* Topics navigation */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Topics
              </h2>
              <div className="space-y-1">
                {Topics.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => {
                      setActiveTopic(topic.id);
                      setOpenItemId(null);
                    }}
                    className={`w-full text-left rounded-md px-3 py-2 text-sm ${
                      activeTopic === topic.id
                        ? "bg-slate-900 text-white"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </section>

            {/* Topic content */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <h2 className="text-sm font-semibold text-slate-900">
                {currentTopic.label}
              </h2>
              <p className="mt-1 mb-3 text-[13px] text-slate-500">
                Explore common questions and step-by-step guidance for this
                topic.
              </p>
              <div className="divide-y divide-slate-200">
                <FAQAccordian items={currentTopic.faqs} />
              </div>
            </section>

            {/* Help chat */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-3">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Help chat
                </h2>
                <p className="mt-1 text-[13px] text-slate-500">
                  Ask a question and we’ll guide you.
                </p>
              </div>

              <div className="flex-1 space-y-3 rounded-lg border border-slate-100 bg-slate-50 p-3 overflow-y-auto max-h-72">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`text-xs ${
                      msg.role === "user" ? "text-slate-900" : "text-slate-600"
                    }`}
                  >
                    <span className="font-medium">
                      {msg.role === "user" ? "You" : "Scribor"}
                    </span>
                    <span className="ml-1 text-slate-600">·</span>{" "}
                    <span>{msg.text}</span>
                  </div>
                ))}
              </div>

              <form className="mt-2 space-y-2">
                <label className="sr-only" htmlFor="help-chat-input">
                  Ask a question
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="help-chat-input"
                    type="text"
                    value={draftMessage}
                    onChange={(e) => setDraftMessage(e.target.value)}
                    placeholder="Type a question about using Scribor…"
                    className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                  >
                    Send
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Help;
