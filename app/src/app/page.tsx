import CreateUserDialog from "@/components/dialogs/create-user";
import { ActionButtons } from "@/components/ui/action-buttons";
import { columns } from "@/components/users-table/columns";
import { UsersTable } from "@/components/users-table/table";
import { getUsers } from "./actions/get-users";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="min-h-screen max-w-5xl flex items-center justify-center mx-auto">
      <div className="w-[90%] md:w-full flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <CreateUserDialog />
          <ActionButtons />
        </div>
        <UsersTable columns={columns} data={users} />
      </div>
    </div>
  );
}
