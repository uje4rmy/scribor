import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import SettingsAccount from "./settingsTabs/Account";
import Workspace from "./settingsTabs/Workspace";
import Notifications from "./settingsTabs/Notifications";
import Security from "./settingsTabs/Security";

const Settings = () => {
  const tabs = [
    { id: "account", label: "Account" },
    { id: "workspace", label: "Workspace" },
    { id: "notifications", label: "Notifications" },
    { id: "security", label: "Security" },
  ];

  const [activeTab, setActiveTab] = useState("account");
  const [themeMode, setThemeMode] = useState("system");

  return (
    <div className="grid grid-cols-[224px_1fr] min-h-screen">
      <div className="sidebar">
        <Sidebar />
      </div>

      <main className="min-h-screen w-full px-3 py-6 text-sm text-slate-900 sm:px-4 lg:px-6">
        <div className="mx-auto w-full max-w-[1920px]">
          {/* Header */}
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">
              Settings
            </h1>
            <p className="mt-1 text-[13px] text-slate-500">
              Manage workspace preferences, security, and notifications.
            </p>
          </div>

          {/* Tabs */}
          <div
            className="flex flex-wrap my-2 gap-2 text-xs font-medium text-slate-600"
            role="tablist"
            aria-label="Settings sections"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`settings-tab-${tab.id}`}
                id={`settings-tab-button-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-3 py-1.5 transition ${
                  activeTab === tab.id
                    ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="border-b border-slate-200"></div>

          {/* Tab content */}
          <div className="mt-6 space-y-6">
            {activeTab === "account" && (
              <SettingsAccount theme={themeMode} setThemeMode={setThemeMode} />
            )}

            {activeTab === "workspace" && <Workspace />}

            {activeTab === "notifications" && <Notifications />}

            {activeTab === "security" && <Security />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
