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
import { Link } from "react-router";
import { createApi } from "../../../components/utils/Api";
import { useAuth0 } from "@auth0/auth0-react";

const BoardDropdownMenu = ({ intake, boardColumns, setMatters }) => {
  const { getAccessTokenSilently } = useAuth0();
  const api = createApi(getAccessTokenSilently);

  async function updateStatus(statusId) {
    try {
      api.put("http://localhost:8081/api/matters/update-status", {
        clientId: intake.client_id,
        clientStatus: statusId,
      });

      setMatters((prev) =>
        prev.map((matter) =>
          matter.client_id === intake.client_id
            ? { ...matter, client_status: statusId }
            : matter,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DropdownMenuContent className="overflow-visible">
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Link
            to={`/client-profile/${intake.client_id}`}
            className="flex items-center"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open Client Profile
          </Link>
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
                <DropdownMenuItem
                  key={status.id}
                  onClick={() => {
                    updateStatus(status.id);
                  }}
                >
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
