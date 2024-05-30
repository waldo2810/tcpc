"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@radix-ui/react-checkbox";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Facebook,
  Github,
  Globe,
  Link,
  MoreHorizontal,
  MoveDown,
  MoveUp,
  Twitter,
  Youtube,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";

export type SocialProfile =
  | "Facebook"
  | "Github"
  | "LinkedIn"
  | "Twitter"
  | "Website"
  | "YouTube"
  | string;

export type UserRole = "Administrator" | "Viewer" | "Moderator";

export type UserStatus = "Active" | "Inactive";

export type User = {
  id: string;
  name: string;
  userRole: UserRole;
  status: UserStatus;
  socialProfile: SocialProfile;
  promote: boolean;
  rating: number;
  lastLogin: string;
};

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
  },
  {
    accessorKey: "name",
    header: () => "User".toUpperCase(),
  },
  {
    accessorKey: "userRole",
    header: () => "Role".toUpperCase(),
    cell: ({ row }) => {
      return <Badge>{row.getValue("userRole")}</Badge>;
    },
  },
  {
    accessorKey: "status",
    header: "Status".toUpperCase(),
    cell: ({ row }) => {
      const value = row.getValue("status");
      switch (value) {
        case "Active":
          return (
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full" />
              <p>{value}</p>
            </div>
          );
        case "Inactive":
          return (
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-red-500 rounded-full" />
              <p>{value}</p>
            </div>
          );
      }
    },
  },
  {
    accessorKey: "socialProfile",
    header: "Social Profile".toUpperCase(),
    cell: ({ row }) => {
      const value: SocialProfile = row.getValue("socialProfile");
      const socialMedia = value.includes("twitter")
        ? "Twitter"
        : value.includes("Facebook")
        ? "Facebook"
        : value.includes("github")
        ? "Github"
        : value.includes("linkedin")
        ? "LinkedIn"
        : value.includes("youtube")
        ? "YouTube"
        : "Website";
      let Icon = <Link />;
      switch (socialMedia) {
        case "Facebook":
          Icon = <Facebook />;
          break;
        case "Github":
          Icon = <Github />;
          break;
        case "LinkedIn":
          Icon = <Facebook />;
          break;
        case "Twitter":
          Icon = <Twitter />;
          break;
        case "Website":
          Icon = <Globe />;
          break;
        case "YouTube":
          Icon = <Youtube />;
          break;
        default:
          Icon;
          break;
      }
      return (
        <a href={value} className="flex items-center gap-2">
          {Icon}
        </a>
      );
    },
  },
  {
    accessorKey: "promote",
    header: "Promote".toUpperCase(),
    cell: ({ row }) => {
      return <Switch checked={row.getValue("promote")} />;
    },
  },
  {
    accessorKey: "rating",
    header: "Rating".toUpperCase(),
    cell: ({ row }) => {
      const value: number = row.getValue("rating");
      return (
        <div className="flex items-center gap-2">
          {value > 4.0 ? (
            <MoveUp className="text-green-500" size={20} />
          ) : (
            <MoveDown className="text-red-500" size={20} />
          )}
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: "lastLogin",
    header: "Last login".toUpperCase(),
    cell: ({ row }) => (
      <p>{new Date(row.getValue("lastLogin")).toDateString()}</p>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
