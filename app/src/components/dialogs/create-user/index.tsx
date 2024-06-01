import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import CreateUserForm from "./form";
import { createUser } from "@/app/actions/create-user";

export default function CreateUserDialog() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center gap-2 w-36 text-sm p-2 rounded-md bg-indigo-500 text-white">
        <Plus size={18} />
        Add new user
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new user</DialogTitle>
          <CreateUserForm handleSubmit={createUser} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
