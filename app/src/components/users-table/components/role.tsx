import { Badge } from "@/components/ui/badge";
import { ClipboardList, Eye, PersonStanding } from "lucide-react";

type UserRoleProps = {
  role: UserRole;
};

export const UserRole = ({ role }: UserRoleProps) => {
  return (
    <Badge variant={role}>
      <div className="flex items-center gap-2">
        {role === "Administrator" ? (
          <ClipboardList size={20} />
        ) : role === "Viewer" ? (
          <Eye size={20} />
        ) : role === "Moderator" ? (
          <PersonStanding size={20} />
        ) : null}
        {role}
      </div>
    </Badge>
  );
};
