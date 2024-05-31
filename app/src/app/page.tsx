import CreateUserDialog from "@/components/dialogs/create-user";
import { User, columns } from "@/components/users-table/columns";
import { UsersTable } from "@/components/users-table/table";

async function getData(): Promise<User[]> {
  const res = await fetch("http://localhost:3001/users", { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="min-h-screen max-w-5xl flex items-center justify-center mx-auto">
      <div className="w-[90%] md:w-full flex flex-col gap-2">
        <CreateUserDialog />
        <UsersTable columns={columns} data={data} />
      </div>
    </div>
  );
}
