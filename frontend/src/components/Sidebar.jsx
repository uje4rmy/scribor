import { Link } from "react-router";

// Navigation button icons
const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="8"
          height="8"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="13"
          y="3"
          width="8"
          height="8"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="3"
          y="13"
          width="8"
          height="8"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="13"
          y="13"
          width="8"
          height="8"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },
  {
    label: "Matters",
    href: "/matters",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect
          x="3.5"
          y="4.5"
          width="17"
          height="15"
          rx="2"
          ry="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M4 13.5h4l1.5 3h5L16 13.5h4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    label: "Due Diligence",
    href: "/due-diligence",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3.5 5.5 6v5.5c0 4 2.8 7.5 6.5 9 3.7-1.5 6.5-5 6.5-9V6L12 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12.5 11 14.5 15 9.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Billing",
    href: "/billing",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect
          x="3.5"
          y="6"
          width="17"
          height="12"
          rx="2"
          ry="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M3.5 10h17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    label: "Help",
    href: "/help",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M11.1 8.7a1.9 1.9 0 0 1 3 1.5c0 1-.6 1.5-1.3 1.9-.6.3-1 .7-1 1.4v.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16.3" r="0.85" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/settings",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a1.8 1.8 0 0 1-2.5 2.5l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a1.8 1.8 0 0 1-3.6 0v-.2A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a1.8 1.8 0 0 1-2.5-2.5l.1-.1A1.7 1.7 0 0 0 5 15a1.7 1.7 0 0 0-1.5-1H3.2a1.8 1.8 0 0 1 0-3.6H3.4A1.7 1.7 0 0 0 5 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a1.8 1.8 0 0 1 2.5-2.5l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3.1V3a1.8 1.8 0 0 1 3.6 0v.2A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.8-.3l.1-.1a1.8 1.8 0 0 1 2.5 2.5l-.1.1A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.5 1h.2a1.8 1.8 0 0 1 0 3.6h-.2a1.7 1.7 0 0 0-1.5 1Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// Main Sidebar componenent
const Sidebar = () => {
  return (
    <aside className="w-56 flex-col border-r border-slate-200/80 bg-white/95 px-3 py-4">
      <div className="mb-4 flex items-center px-1">
        <Link
          to="/"
          aria-label="Go to dashboard"
          className="text-[16px] font-medium tracking-[-0.02em] text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
        >
          Scribor
        </Link>
      </div>

      <div className="mb-4 px-1">
        <label className="sr-only" htmlFor="global-search">
          Search clients and matters
        </label>
        <input
          id="global-search"
          type="search"
          placeholder="Search clients or matters"
          className="w-full rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-[12px] text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-200"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
