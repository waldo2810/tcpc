"use client";

import { deleteAll } from "@/app/actions/delete-all";
import { Button } from "./button";

export const ActionButtons = () => {
  const handleDeleteAll = async () => await deleteAll();

  return (
    <div>
      <Button variant="outline" className="py-2 rounded-r-none">
        Suspend all
      </Button>
      <Button variant="outline" className="py-2 rounded-none">
        Archive all
      </Button>
      <Button
        variant="outline"
        className="py-2 rounded-l-none"
        onClick={handleDeleteAll}
      >
        Delete all
      </Button>
    </div>
  );
};
