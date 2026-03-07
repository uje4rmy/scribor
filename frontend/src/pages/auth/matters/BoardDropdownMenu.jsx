import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLink, Download, FolderInput } from "lucide-react";

const BoardDropdownMenu = ({ intake, boardColumns }) => {
  return (
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <ExternalLink className="mr-2 h-4 w-4" />
          Open Client Profile
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <Download className="mr-2 h-4 w-4" />
          Generate
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>Audit Pack</DropdownMenuItem>
            <DropdownMenuItem>Suspicious Matter Report</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <FolderInput className="mr-2 h-4 w-4" />
          Move
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuGroup>
            {boardColumns
              .filter((e) => e.id !== intake.client_status)
              .map((status) => (
                <DropdownMenuItem key={status.id}>
                  {status.menuLabel}
                </DropdownMenuItem>
              ))}
          </DropdownMenuGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  );
};

export default BoardDropdownMenu;
