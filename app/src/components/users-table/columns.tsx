"use client";

import { updateUser } from "@/app/actions/update-user";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  Facebook,
  Github,
  Globe,
  MoreHorizontal,
  Twitter,
  Youtube,
} from "lucide-react";
import EditUserForm from "../dialogs/edit-user/form";
import { Switch } from "../ui/switch";
import { UserProfile } from "./components/profile";
import { UserRating } from "./components/rating";
import { UserRole } from "./components/role";
import { UserStatus } from "./components/status";
import { UserPromote } from "./components/promote";

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
      let Icon = undefined;
      switch (socialMedia) {
        case "Facebook":
          Icon = <Facebook className="text-slate-500" size={20} />;
          break;
        case "Github":
          Icon = <Github className="text-slate-500" size={20} />;
          break;
        case "LinkedIn":
          Icon = <Facebook className="text-slate-500" size={20} />;
          break;
        case "Twitter":
          Icon = <Twitter className="text-slate-500" size={20} />;
          break;
        case "Website":
          Icon = <Globe className="text-slate-500" size={20} />;
          break;
        case "YouTube":
          Icon = <Youtube className="text-slate-500" size={20} />;
          break;
        default:
          Icon;
          break;
      }
      return (
        <a href={value} className="flex items-center justify-center gap-2">
          {Icon ?? null}
        </a>
      );
    },
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
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <Dialog>
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
                Copy User ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DialogTrigger>Edit user</DialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit user</DialogTitle>
              <EditUserForm user={payment} handleSubmit={updateUser} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
