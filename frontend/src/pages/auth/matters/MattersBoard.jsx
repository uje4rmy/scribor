import { useMemo } from "react";
import BoardCard from "./BoardCard";

const MattersBoard = ({ matters }) => {
  const BOARD_COLUMNS = [
    { id: "todo", label: "To do", menuLabel: "Move to To Do" },
    {
      id: "in_progress",
      label: "In progress",
      menuLabel: "Move to In Progress",
    },
    { id: "in_review", label: "In review", menuLabel: "Move to In Review" },
    { id: "done", label: "Done", menuLabel: "Move to Done" },
  ];

  const byColumn = useMemo(() => {
    // Sorts matters into columns without unneccessary re-rendering
    const map = {
      todo: [],
      in_progress: [],
      in_review: [],
      done: [],
    };
    for (const i of matters) {
      const col = i.client_status;
      map[col].push(i);
    }
    return map;
  }, [matters]);

  return (
    <div className="mt-4 w-full overflow-x-auto pb-4">
      <div className="flex gap-5 overflow-x-auto pb-2 min-w-0 md:grid md:grid-cols-4 md:min-w-0">
        {BOARD_COLUMNS.map((col) => (
          <div
            key={col.id}
            className="w-[280px] min-w-[280px] shrink-0 rounded-[10px] border border-gray-100 bg-gray-100/80 p-3 md:w-auto md:min-w-0 md:flex-1 md:min-w-[240px]"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-600">
                {col.label}
              </span>
              <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded bg-gray-300/70 px-2 text-[11px] font-medium text-gray-600">
                {byColumn[col.id].length}
              </span>
            </div>
            <div className="min-h-[80px] p-1">
              {byColumn[col.id].map((i) => (
                <BoardCard
                  key={i.client_id}
                  intake={i}
                  boardColumns={BOARD_COLUMNS}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MattersBoard;
