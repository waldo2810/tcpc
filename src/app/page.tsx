import { Payment, columns } from "@/components/users-table/columns";
import { UsersTable } from "@/components/users-table/table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
  ];
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <UsersTable columns={columns} data={data} />
    </div>
  );
}
