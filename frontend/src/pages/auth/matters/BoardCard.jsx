import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BoardDropdownMenu from "./BoardDropdownMenu";

const BoardCard = ({ intake, boardColumns }) => {
  function levelColors(level) {
    const s = level.toLowerCase();
    switch (s) {
      case "low":
        return "bg-emerald-600 text-white";
      case "medium":
        return "bg-amber-600 text-white";
      case "high":
        return "bg-rose-600 text-white";
      case "flagged":
        return "bg-rose-100 text-rose-800";
      default:
        return "bg-gray-500 text-white";
    }
  }

  function checkFlagged(flagged) {
    return flagged ? "bg-rose-100 text-rose-800" : "";
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="group relative mb-2 flex h-[132px] flex-col rounded-[10px] border border-gray-200 bg-white p-3 text-left transition hover:border-gray-300 hover:bg-gray-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300">
          <BoardDropdownMenu intake={intake} boardColumns={boardColumns} />

          <div className="min-h-0 flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-[14px] font-medium text-gray-900">
                {intake.client_fullname}
              </span>
            </div>
            <div className="truncate text-[12px] text-gray-500">
              {`${intake.matter_type} · ${
                intake.client_type.charAt(0).toUpperCase() +
                intake.client_type.slice(1)
              }`}
            </div>
            <div className="mt-1.5 flex min-h-[26px] flex-wrap items-center gap-1.5">
              <span
                className={`inline-flex h-5 items-center rounded px-2 text-[11px] font-medium uppercase ${levelColors(intake.client_level)}`}
              >
                {intake.client_level.toUpperCase()}
              </span>
              {intake.client_flagged === 1 && (
                <span
                  className={`inline-flex h-5 items-center rounded px-2 text-[11px] font-medium uppercase ${checkFlagged(intake.client_flagged)}`}
                >
                  FLAGGED
                </span>
              )}
            </div>
          </div>
          <div className="absolute right-2 top-2.5 opacity-0 transition group-hover:opacity-100">
            <span className="text-[11px] font-medium text-gray-500">Open</span>
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 inline-block h-3.5 w-3.5 text-gray-400"
              aria-hidden="true"
            >
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default BoardCard;
