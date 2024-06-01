"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Actions } from "./components/actions";
import { UserProfile } from "./components/profile";
import { UserPromote } from "./components/promote";
import { UserRating } from "./components/rating";
import { UserRole } from "./components/role";
import { SocialProfile } from "./components/social";
import { UserStatus } from "./components/status";
import { Checkbox } from "../ui/checkbox";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          className="rounded-md border-gray-300 data-[state=checked]:bg-indigo-600 h-5 w-5"
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          className="rounded-md border-gray-300 data-[state=checked]:bg-indigo-600 h-5 w-5"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "profile",
    accessorFn: (user) => user.profile.name,
    header: () => "User".toUpperCase(),
    cell: ({ row }) => <UserProfile profile={row.original.profile} />,
  },
  {
    accessorKey: "userRole",
    header: () => "Role".toUpperCase(),
    cell: ({ row }) => <UserRole role={row.original.userRole} />,
  },
  {
    accessorKey: "status",
    header: "Status".toUpperCase(),
    cell: ({ row }) => <UserStatus status={row.original.status} />,
  },
  {
    accessorKey: "socialProfile",
    header: "Social Profile".toUpperCase(),
    cell: ({ row }) => <SocialProfile value={row.original.socialProfile} />,
  },
  {
    accessorKey: "promote",
    header: "Promote".toUpperCase(),
    cell: ({ row }) => <UserPromote user={row.original} />,
  },
  {
    accessorKey: "rating",
    header: "Rating".toUpperCase(),
    cell: ({ row }) => <UserRating rating={row.original.rating} />,
  },
  {
    accessorKey: "lastLogin",
    header: "Last login".toUpperCase(),
    cell: ({ row }) => (
      <p className="text-slate-500 font-medium">
        {new Date(row.original.lastLogin).toDateString()}
      </p>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <Actions user={row.original} />,
  },
];
