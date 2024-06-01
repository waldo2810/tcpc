"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Actions } from "./components/actions";
import { UserProfile } from "./components/profile";
import { UserPromote } from "./components/promote";
import { UserRating } from "./components/rating";
import { UserRole } from "./components/role";
import { SocialProfile } from "./components/social";
import { UserStatus } from "./components/status";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "profile",
    header: () => "User".toUpperCase(),
    cell: ({ row }) => <UserProfile profile={row.getValue("profile")} />,
  },
  {
    accessorKey: "userRole",
    header: () => "Role".toUpperCase(),
    cell: ({ row }) => <UserRole role={row.getValue("userRole")} />,
  },
  {
    accessorKey: "status",
    header: "Status".toUpperCase(),
    cell: ({ row }) => <UserStatus status={row.getValue("status")} />,
  },
  {
    accessorKey: "socialProfile",
    header: "Social Profile".toUpperCase(),
    cell: ({ row }) => <SocialProfile value={row.getValue("socialProfile")} />,
  },
  {
    accessorKey: "promote",
    header: "Promote".toUpperCase(),
    cell: ({ row }) => <UserPromote user={row.original} />,
  },
  {
    accessorKey: "rating",
    header: "Rating".toUpperCase(),
    cell: ({ row }) => <UserRating rating={row.getValue("rating")} />,
  },
  {
    accessorKey: "lastLogin",
    header: "Last login".toUpperCase(),
    cell: ({ row }) => (
      <p className="text-slate-500 font-medium">
        {new Date(row.getValue("lastLogin")).toDateString()}
      </p>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <Actions user={row.original} />,
  },
];
