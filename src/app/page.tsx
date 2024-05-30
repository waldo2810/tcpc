import { User, columns } from "@/components/users-table/columns";
import { UsersTable } from "@/components/users-table/table";

async function getData(): Promise<User[]> {
  return [
    {
      id: "1",
      name: "Alice Johnson",
      userRole: "Administrator",
      status: "Active",
      socialProfile: "https://twitter.com/alicejohnson",
      promote: true,
      rating: 4.8,
      lastLogin: "2024-05-25T14:35:00Z",
    },
    {
      id: "2",
      name: "Bob Smith",
      userRole: "Viewer",
      status: "Inactive",
      socialProfile: "https://linkedin.com/in/bobsmith",
      promote: false,
      rating: 3.6,
      lastLogin: "2024-03-18T09:20:00Z",
    },
    {
      id: "3",
      name: "Carol Williams",
      userRole: "Moderator",
      status: "Active",
      socialProfile: "https://facebook.com/carolwilliams",
      promote: true,
      rating: 4.2,
      lastLogin: "2024-05-28T16:45:00Z",
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
